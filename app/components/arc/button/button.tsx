"use client";

import React, { forwardRef, isValidElement, useCallback, useEffect, useLayoutEffect, useRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode, Ref, RefObject } from "react";
import Link from "next/link";
import { AnimatePresence, animate, motion, useIsPresent, useMotionValue, useReducedMotion } from "motion/react";
import type { TargetAndTransition, Variants } from "motion/react";
import { motionTokens } from "../lib/motion-tokens";
import styles from "./button.module.css";

export type ButtonVariant = "primary" | "secondary" | "whatsapp" | "outline" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onDrag" | "onDragEnd" | "onDragStart" | "onAnimationStart"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  external?: boolean;
}

const MotionLink = motion.create(Link);

/** Icon buttons press a little deeper, wide buttons a little less, so every size reads as the same push. */
const pressVariants: Variants = {
  pressed: (button: RefObject<HTMLElement | null>) => {
    const width = button.current?.offsetWidth ?? 0;
    return {
      scale: width > 220 ? 0.985 : width && width <= 48 ? 0.96 : 0.97,
      transition: {
        duration: motionTokens.duration.instant,
        ease: [...motionTokens.ease.standard]
      }
    };
  },
};

const rest: TargetAndTransition = { opacity: 1, y: 0, scale: 1 };
/** One clean crossfade: the new label rises 2px as it fades in, the outgoing one fades out faster. No blur. */
const textIn: TargetAndTransition = { opacity: 0, y: 2 };
const textOut: TargetAndTransition = {
  opacity: 0,
  transition: {
    duration: motionTokens.duration.instant,
    ease: [...motionTokens.ease.standard]
  }
};
const iconIn: TargetAndTransition = { opacity: 0, scale: 0.85 };
const iconOut: TargetAndTransition = {
  opacity: 0,
  transition: {
    duration: motionTokens.duration.instant,
    ease: [...motionTokens.ease.standard]
  }
};
const fadeIn: TargetAndTransition = { ...rest, opacity: 0 };
const fadeOut: TargetAndTransition = {
  opacity: 0,
  transition: { duration: motionTokens.duration.instant }
};
/** Scale rides the spring; opacity tweens. */
const iconEnter = {
  ...motionTokens.spring.snappy,
  opacity: {
    duration: motionTokens.duration.fast,
    ease: [...motionTokens.ease.enter]
  }
} as const;

/** A key for the label content: text plus element names, so a new label or icon crossfades while prop-only updates stay in place. */
function labelKey(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number" || typeof node === "bigint") return String(node);
  if (Array.isArray(node)) return node.map(labelKey).join("");
  if (!isValidElement(node)) return "";
  const type = node.type as string | { displayName?: string; name?: string };
  return `<${typeof type === "string" ? type : type?.displayName ?? type?.name ?? ""}>${labelKey((node.props as { children?: ReactNode }).children)}`;
}

/** Springs the slot to the natural width of the incoming label when it changes, so a new label never snaps the button's size. */
function useMorphWidth(content: RefObject<HTMLElement | null>, key: string, reduced: boolean) {
  const width = useMotionValue<number | "auto">("auto");
  const lastKey = useRef(key), armedUntil = useRef(0);
  useLayoutEffect(() => {
    if (lastKey.current === key) return;
    lastKey.current = key;
    armedUntil.current = performance.now() + 700;
  }, [key]);
  useEffect(() => {
    const node = content.current, slot = node?.parentElement;
    if (!node || !slot || typeof ResizeObserver === "undefined") return;
    let measured = false;
    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;
      const next = entry.contentRect.width;
      if (!next || !measured || reduced || performance.now() > armedUntil.current) {
        measured = next > 0;
        width.jump(next || "auto");
        delete slot.dataset.morphing;
        return;
      }
      slot.dataset.morphing = "";
      animate(width, next, {
        ...motionTokens.spring.morph,
        onComplete: () => {
          delete slot.dataset.morphing;
        }
      });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [content, reduced, width]);
  return width;
}

function LabelPhase({ children, icon, reduced, ref }: { children: ReactNode; icon: boolean; reduced: boolean; ref?: Ref<HTMLSpanElement> }) {
  const present = useIsPresent();
  return (
    <motion.span
      ref={ref}
      className={styles.labelPhase}
      aria-hidden={present ? undefined : true}
      initial={reduced ? fadeIn : icon ? iconIn : textIn}
      animate={rest}
      exit={reduced ? fadeOut : icon ? iconOut : textOut}
      transition={reduced ? { duration: motionTokens.duration.instant } : icon ? iconEnter : { duration: motionTokens.duration.standard, ease: [...motionTokens.ease.enter] }}
    >
      {children}
    </motion.span>
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", loading = false, disabled, children, onClick, href, target, rel, external, ...props },
  ref,
) {
  const reduceMotion = useReducedMotion() ?? false;
  const buttonRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const key = labelKey(children);
  const width = useMorphWidth(contentRef, key, reduceMotion);
  const setRefs = useCallback((node: HTMLElement | null) => {
    buttonRef.current = node;
    if (typeof ref === "function") ref(node as HTMLButtonElement | null);
    else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node as HTMLButtonElement | null;
  }, [ref]);

  const popup = props["aria-haspopup"];
  const anchorsLayer = (popup !== undefined && popup !== false && popup !== "false") || props.role === "combobox" || (props as Record<string, unknown>)["data-state"] !== undefined;
  const inert = disabled || loading || props["aria-disabled"] === true || props["aria-disabled"] === "true";
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(" ");

  const innerContent = (
    <>
      <AnimatePresence initial={false}>
        {loading ? (
          <motion.span
            key="loader"
            className={styles.loader}
            aria-hidden="true"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? fadeOut : { ...iconOut, scale: 0.8 }}
            transition={reduceMotion ? { duration: motionTokens.duration.instant } : iconEnter}
          >
            <span className={styles.spinner} />
          </motion.span>
        ) : null}
      </AnimatePresence>
      <motion.span
        className={[styles.labelSlot, loading ? styles.loadingLabel : ""].filter(Boolean).join(" ")}
        style={{ width, minWidth: "max-content", whiteSpace: "nowrap" }}
      >
        <span ref={contentRef} className={styles.labelContent} style={{ minWidth: "max-content", whiteSpace: "nowrap" }}>
          <AnimatePresence mode="popLayout" initial={false}>
            <LabelPhase key={key} icon={!/\S/.test(key.replace(/<[^>]*>/g, ""))} reduced={reduceMotion}>
              {children}
            </LabelPhase>
          </AnimatePresence>
        </span>
      </motion.span>
    </>
  );

  const mergedStyle = { whiteSpace: "nowrap" as const, flexShrink: 0, minWidth: "max-content", ...props.style };

  // If href is provided, render either Next Link or motion anchor
  if (href) {
    const isInternal = href.startsWith("/") && !external && (!target || target === "_self");
    if (isInternal) {
      return (
        <MotionLink
          ref={setRefs as any}
          href={href}
          className={classes}
          style={mergedStyle}
          aria-busy={loading || undefined}
          custom={buttonRef}
          variants={pressVariants}
          whileTap={reduceMotion || anchorsLayer || inert ? undefined : "pressed"}
          transition={motionTokens.spring.snappy}
          onClick={loading ? (e: React.MouseEvent) => e.preventDefault() : (onClick as any)}
        >
          {innerContent}
        </MotionLink>
      );
    }

    return (
      <motion.a
        ref={setRefs}
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
        style={mergedStyle}
        aria-busy={loading || undefined}
        custom={buttonRef}
        variants={pressVariants}
        whileTap={reduceMotion || anchorsLayer || inert ? undefined : "pressed"}
        transition={motionTokens.spring.snappy}
        onClick={loading ? (e) => e.preventDefault() : (onClick as any)}
      >
        {innerContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={setRefs as any}
      tabIndex={props.tabIndex ?? 0}
      className={classes}
      disabled={disabled}
      aria-busy={loading || undefined}
      custom={buttonRef}
      variants={pressVariants}
      whileTap={reduceMotion || anchorsLayer || inert ? undefined : "pressed"}
      transition={motionTokens.spring.snappy}
      {...props}
      style={mergedStyle}
      aria-disabled={loading || props["aria-disabled"] || undefined}
      onClick={loading ? (event) => event.preventDefault() : onClick}
    >
      {innerContent}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;

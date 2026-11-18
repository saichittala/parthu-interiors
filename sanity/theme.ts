import { buildLegacyTheme } from 'sanity';

/**
 * Apple Design System & Unslop Pro Studio Theme
 * Tiered elevation, high-contrast typography, and refined Apple crimson accents.
 */
export const unslopTheme = buildLegacyTheme({
  /* Base theme colors - Apple Dark Tiered Palette */
  '--black': '#121215',
  '--white': '#FFFFFF',

  '--gray': '#9CA3AF',
  '--gray-base': '#374151',

  '--component-bg': '#1E1E24',
  '--component-text-color': '#F3F4F6',

  /* Brand - Apple Refined Crimson */
  '--brand-primary': '#E11D48',

  // Default button
  '--default-button-color': '#9CA3AF',
  '--default-button-primary-color': '#E11D48',
  '--default-button-success-color': '#34D399',
  '--default-button-warning-color': '#FBBF24',
  '--default-button-danger-color': '#F87171',

  /* State */
  '--state-info-color': '#E11D48',
  '--state-success-color': '#34D399',
  '--state-warning-color': '#FBBF24',
  '--state-danger-color': '#F87171',

  /* Navbar */
  '--main-navigation-color': '#16161A',
  '--main-navigation-color--inverted': '#FFFFFF',

  '--focus-color': '#E11D48',
});

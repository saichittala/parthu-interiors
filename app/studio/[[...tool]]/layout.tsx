import type { Metadata, Viewport } from 'next';
import './studio.css';

export const metadata: Metadata = {
  title: 'Parthu Interiors — Admin Studio',
  description: 'Secure Content Management & Media Hub for Parthu Interiors.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
      }}
    >
      {children}
    </div>
  );
}


import React from 'react';

export function StudioLogo(props: any) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 4px',
        userSelect: 'none',
      }}
    >
      {/* Brand Icon */}
      <div
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '8px',
          background: 'linear-gradient(145deg, #E11D48 0%, #9F1239 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontWeight: '700',
          fontSize: '13px',
          letterSpacing: '-0.02em',
          boxShadow: '0 2px 8px rgba(225, 29, 72, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          flexShrink: 0,
        }}
      >
        P
      </div>

      {/* Brand Text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span
          style={{
            fontSize: '13px',
            fontWeight: '700',
            letterSpacing: '-0.015em',
            color: '#FFFFFF',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", system-ui, sans-serif',
            whiteSpace: 'nowrap',
          }}
        >
          PARTHU INTERIORS
        </span>
        <span
          style={{
            fontSize: '10px',
            fontWeight: '600',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            background: 'rgba(255, 255, 255, 0.08)',
            color: '#D1D5DB',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: '2px 6px',
            borderRadius: '6px',
            whiteSpace: 'nowrap',
          }}
        >
          STUDIO
        </span>
      </div>

      {/* Subtle Divider */}
      <div
        style={{
          width: '1px',
          height: '18px',
          background: 'rgba(255, 255, 255, 0.12)',
          margin: '0 4px',
        }}
      />

      {/* Quick Access: Live Website */}
      <a
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          color: '#E5E7EB',
          textDecoration: 'none',
          fontWeight: '500',
          fontSize: '11px',
          padding: '4px 9px',
          borderRadius: '6px',
          background: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          transition: 'all 0.15s ease',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.14)';
          e.currentTarget.style.color = '#FFFFFF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
          e.currentTarget.style.color = '#E5E7EB';
        }}
        title="Open live website in a new tab"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span>Website</span>
      </a>

      {/* Quick Access: Executive CRM Dashboard */}
      <a
        href="/dashboard"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
          color: '#FFFFFF',
          textDecoration: 'none',
          fontWeight: '500',
          fontSize: '11px',
          padding: '4px 9px',
          borderRadius: '6px',
          background: 'rgba(225, 29, 72, 0.16)',
          border: '1px solid rgba(225, 29, 72, 0.35)',
          transition: 'all 0.15s ease',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(225, 29, 72, 0.28)';
          e.currentTarget.style.borderColor = 'rgba(225, 29, 72, 0.55)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(225, 29, 72, 0.16)';
          e.currentTarget.style.borderColor = 'rgba(225, 29, 72, 0.35)';
        }}
        title="Open Executive CRM Leads & Inquiries Dashboard"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
        <span>CRM</span>
      </a>
    </div>
  );
}

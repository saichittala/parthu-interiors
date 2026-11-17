import React from 'react';

export function StudioLogo(props: any) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 8px',
        userSelect: 'none',
      }}
    >
      <div
        style={{
          width: '26px',
          height: '26px',
          borderRadius: '6px',
          background: 'linear-gradient(135deg, #C1121F 0%, #780016 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          fontWeight: '900',
          fontSize: '14px',
          letterSpacing: '-0.02em',
          boxShadow: '0 2px 8px rgba(193, 18, 31, 0.35)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
        }}
      >
        P
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: '700',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFFFFF',
              fontFamily: 'var(--font-inter, -apple-system, sans-serif)',
            }}
          >
            PARTHU INTERIORS
          </span>
          <span
            style={{
              fontSize: '9px',
              fontWeight: '700',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              background: 'rgba(193, 18, 31, 0.18)',
              color: '#FF6364',
              border: '1px solid rgba(193, 18, 31, 0.35)',
              padding: '1px 6px',
              borderRadius: '9999px',
            }}
          >
            CMS STUDIO
          </span>
        </div>
        <span
          style={{
            fontSize: '10px',
            color: '#71717A',
            letterSpacing: '0.02em',
            fontWeight: '500',
          }}
        >
          Production Workspace
        </span>
      </div>
    </div>
  );
}

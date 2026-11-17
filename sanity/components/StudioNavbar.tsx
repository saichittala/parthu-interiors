import React from 'react';

export function StudioNavbar(props: any) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          background: '#060708',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '12px',
          color: '#A1A1AA',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '12px',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(193, 18, 31, 0.16)';
              e.currentTarget.style.borderColor = 'rgba(193, 18, 31, 0.4)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
          >
            <span>←</span>
            <span>Back to Live Website</span>
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 8px rgba(16, 185, 129, 0.6)',
              }}
            />
            <span style={{ color: '#71717A', fontSize: '11px', fontWeight: '500' }}>
              Connected to Sanity Content Lake (<strong style={{ color: '#EDEDEE', fontWeight: '600' }}>production</strong>)
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ color: '#52525B', fontSize: '11px' }}>
            Turnkey Interior Architecture &bull; Kokapet Facility
          </span>
          <a
            href="https://parthuinteriors.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#A1A1AA',
              textDecoration: 'none',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span>parthuinteriors.in</span>
            <span style={{ fontSize: '10px' }}>↗</span>
          </a>
        </div>
      </div>

      {props.renderDefault(props)}
    </div>
  );
}

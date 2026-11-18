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
          background: 'rgba(22, 22, 26, 0.88)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '12px',
          color: '#A1A1AA',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif',
          letterSpacing: '-0.01em',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#F3F4F6',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '12px',
              padding: '5px 11px',
              borderRadius: '7px',
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#F3F4F6';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.97)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Live Website</span>
          </a>

          <a
            href="/dashboard"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: '500',
              fontSize: '12px',
              padding: '5px 11px',
              borderRadius: '7px',
              background: 'rgba(225, 29, 72, 0.14)',
              border: '1px solid rgba(225, 29, 72, 0.35)',
              boxShadow: '0 1px 2px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(225, 29, 72, 0.25)';
              e.currentTarget.style.borderColor = 'rgba(225, 29, 72, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(225, 29, 72, 0.14)';
              e.currentTarget.style.borderColor = 'rgba(225, 29, 72, 0.35)';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.97)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'none';
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="9" />
              <rect x="14" y="3" width="7" height="5" />
              <rect x="14" y="12" width="7" height="9" />
              <rect x="3" y="16" width="7" height="5" />
            </svg>
            <span>Executive CRM</span>
          </a>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '6px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#34D399',
                boxShadow: '0 0 8px rgba(52, 211, 153, 0.6)',
              }}
            />
            <span style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: '500' }}>
              Content Lake: <span style={{ color: '#F3F4F6', fontWeight: '600' }}>production</span>
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ color: '#9CA3AF', fontSize: '11px', fontWeight: '400' }}>
            Parthu Interiors &bull; Kokapet Architecture Studio
          </span>
          <a
            href="https://parthuinteriors.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#D1D5DB',
              textDecoration: 'none',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '3px 8px',
              borderRadius: '5px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#D1D5DB';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
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

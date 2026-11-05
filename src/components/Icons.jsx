const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ArrowUpRight = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Menu = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} {...p}>
    <path d="M4 8h16M10 16h10" />
  </svg>
)

export const Close = (p) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Chevron = ({ dir = 'right', ...p }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...base} {...p}>
    <path d={dir === 'right' ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'} />
  </svg>
)

export const Mail = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

// Official WhatsApp glyph (filled)
export const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Z" />
  </svg>
)

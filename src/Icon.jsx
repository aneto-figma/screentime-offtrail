import './Icon.css'

const glyphs = {
  x: (
    <path
      d="M12.5 4.21 11.79 3.5 8 7.29 4.21 3.5 3.5 4.21 7.29 8 3.5 11.79l.71.71L8 8.71l3.79 3.79.71-.71L8.71 8z"
      fill="currentColor"
    />
  ),
  check: (
    <path
      d="M6.5 11.5 3 8l.71-.71L6.5 10.09l5.79-5.8.71.71z"
      fill="currentColor"
    />
  ),
  info: (
    <>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <rect x="7.25" y="7" width="1.5" height="4" rx="0.5" fill="currentColor" />
      <circle cx="8" cy="5.25" r="0.85" fill="currentColor" />
    </>
  ),
  warning: (
    <>
      <path
        d="M7.13 2.5a1 1 0 0 1 1.74 0l5.5 9.5A1 1 0 0 1 13.5 13.5h-11a1 1 0 0 1-.87-1.5z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect x="7.25" y="6" width="1.5" height="3.5" rx="0.5" fill="currentColor" />
      <circle cx="8" cy="11.25" r="0.85" fill="currentColor" />
    </>
  ),
  plus: (
    <path
      d="M8.75 3.5h-1.5v3.75H3.5v1.5h3.75v3.75h1.5V8.75h3.75v-1.5H8.75z"
      fill="currentColor"
    />
  ),
  out: (
    <path
      d="M9 3h4v4m0-4L7 9M6 4H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  question: (
    <>
      <path
        d="M6 5.5a2 2 0 1 1 2.5 1.94V9"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8" cy="11.5" r="0.85" fill="currentColor" />
    </>
  ),
  'caret-down': (
    <path
      d="M4 6l4 4 4-4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  'caret-up': (
    <path
      d="M4 10l4-4 4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
}

export default function Icon({ glyph = 'x', className = '' }) {
  return (
    <svg
      className={`icon-glyph ${className}`}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      {glyphs[glyph]}
    </svg>
  )
}

Icon.glyphs = Object.keys(glyphs)

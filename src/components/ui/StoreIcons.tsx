interface IconProps {
  className?: string
}

export function AppleIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.37 1.43c0 1.14-.49 2.27-1.18 3.08-.74.9-1.99 1.57-2.99 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.57-2.27 1.21-2.98.8-.94 2.14-1.64 3.25-1.68.03.13.05.28.05.43Zm4.56 15.71c-.03.07-.46 1.58-1.52 3.12-.94 1.34-1.94 2.71-3.43 2.71-1.52 0-1.9-.88-3.63-.88-1.7 0-2.3.91-3.67.91-1.38 0-2.33-1.26-3.43-2.8C2.97 18.38 1.93 15.57 1.93 12.92c0-4.28 2.8-6.55 5.55-6.55 1.45 0 2.68.95 3.6.95.87 0 2.22-1.01 3.9-1.01.61 0 2.89.06 4.38 2.19-.13.09-2.39 1.37-2.39 4.19 0 3.26 2.86 4.42 2.96 4.45Z" />
    </svg>
  )
}

export function PlayIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.2 2.3c-.25.26-.4.66-.4 1.18v17.04c0 .52.15.92.4 1.18l.07.06 9.55-9.55v-.22L4.27 2.24l-.07.06Zm12.8 12.9-3.18-3.19v-.22l3.18-3.18.07.04 3.77 2.14c1.08.61 1.08 1.61 0 2.22l-3.77 2.15-.07.04Zm.07-.04L13.82 11.9 4.2 21.52c.36.38.95.43 1.61.05l11.26-6.41ZM5.81 2.43c-.66-.37-1.25-.33-1.61.06l9.62 9.61 3.25-3.25L5.81 2.43Z" />
    </svg>
  )
}

export function ChromeIcon({ className = 'h-3.5 w-3.5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8.5h8.5M8.97 13.75 4.72 6.4M15.03 13.75l-4.25 7.2" strokeLinecap="round" />
    </svg>
  )
}

interface TopBarProps {
  portfolioUrl: string
}

export function TopBar({ portfolioUrl }: TopBarProps) {
  return (
    <div className="pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <nav
        className="pointer-events-auto flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/80 px-2 py-1.5 shadow-lg backdrop-blur-md"
        aria-label="Quick navigation"
      >
        <a
          href={portfolioUrl}
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-white"
          aria-label="Back to portfolio"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M9 2L4 7L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <span className="h-4 w-px bg-zinc-700" aria-hidden="true" />
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500"
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </nav>
    </div>
  )
}

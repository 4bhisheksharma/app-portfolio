import { Link } from 'react-router-dom'

interface LegalLayoutProps {
  title: string
  subtitle?: string
  effectiveDate: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-300">
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
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
          Back to Apps
        </Link>

        <header className="mb-10 border-b border-zinc-800 pb-8">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-600">P.U.L.S.E</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          {subtitle && <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>}
          <p className="mt-4 text-xs text-zinc-600">
            Effective date: {effectiveDate} · Last updated: {lastUpdated}
          </p>
        </header>

        <article className="legal-prose">{children}</article>
      </div>
    </div>
  )
}

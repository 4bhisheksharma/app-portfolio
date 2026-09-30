import { Link } from 'react-router-dom'

interface LegalLayoutProps {
  appName?: string
  title: string
  subtitle?: string
  effectiveDate?: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({
  appName = 'P.U.L.S.E',
  title,
  subtitle,
  effectiveDate,
  lastUpdated,
  children,
}: LegalLayoutProps) {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <div className="relative mx-auto max-w-2xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
        <Link
          to="/"
          className="group mb-12 inline-flex items-center gap-2 py-1.5 text-sm text-muted transition-colors hover:text-fg"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
          >
            <path
              d="M9 2L4 7L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          All apps
        </Link>

        <header className="mb-10 border-b border-line pb-8">
          <p className="font-mono text-xs text-faint">{appName}</p>
          <h1 className="mt-3 text-[clamp(2rem,6vw,3rem)] font-medium leading-[1.05] tracking-[-0.035em]">
            {title}
          </h1>
          {subtitle && <p className="mt-3 text-sm text-muted">{subtitle}</p>}
          <p className="mt-4 font-mono text-[11px] text-faint">
            {effectiveDate ? `Effective ${effectiveDate} · ` : ''}Updated {lastUpdated}
          </p>
        </header>

        {/* tables in the policies can be wider than a phone */}
        <article className="legal-prose [&_table]:block [&_table]:overflow-x-auto sm:[&_table]:table">
          {children}
        </article>
      </div>
    </div>
  )
}

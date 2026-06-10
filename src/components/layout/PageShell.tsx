import { TopBar } from '../ui/TopBar'

interface PageShellProps {
  children: React.ReactNode
  portfolioUrl: string
}

export function PageShell({ children, portfolioUrl }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-300">
      <div className="grain pointer-events-none fixed inset-0 z-0" aria-hidden="true" />
      <TopBar portfolioUrl={portfolioUrl} />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

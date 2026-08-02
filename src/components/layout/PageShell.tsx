interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-300">
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}

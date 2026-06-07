interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

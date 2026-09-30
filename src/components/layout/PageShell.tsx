interface PageShellProps {
  children: React.ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-fg">
      {/* faint glow at the top so the page isn't flat black */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-20rem] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full opacity-[0.07] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #6aff9d, transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-5xl px-5 pb-10 pt-5 sm:px-8 sm:pt-6">{children}</div>
    </div>
  )
}

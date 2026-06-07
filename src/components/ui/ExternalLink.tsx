interface ExternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 transition-colors hover:text-white ${className}`}
    >
      {children}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        aria-hidden="true"
        className="opacity-60"
      >
        <path
          d="M1 9L9 1M9 1H3M9 1V7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}

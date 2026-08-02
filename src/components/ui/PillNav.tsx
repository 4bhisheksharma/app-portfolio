import type { NavLink } from '../../types/app'

interface PillNavProps {
  links: NavLink[]
}

export function PillNav({ links }: PillNavProps) {
  return (
    <nav className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-zinc-800/60 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-500 backdrop-blur-sm">
      {links.map((link, index) => (
        <span key={link.label} className="flex items-center gap-2">
          {index > 0 && (
            <span className="text-zinc-700" aria-hidden="true">
              ·
            </span>
          )}
          {link.href ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-200"
            >
              {link.label}
            </a>
          ) : (
            <span>{link.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

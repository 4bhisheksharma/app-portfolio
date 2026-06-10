import type { NavLink } from '../../types/app'

interface PillNavProps {
  links: NavLink[]
}

export function PillNav({ links }: PillNavProps) {
  return (
    <nav className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-zinc-800/60 bg-zinc-900/40 px-5 py-2.5 text-xs tracking-widest text-zinc-500 backdrop-blur-sm">
      {links.map((link, index) => (
        <span key={link.label} className="flex items-center gap-3">
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
              className="uppercase transition-colors hover:text-zinc-300"
            >
              {link.label}
            </a>
          ) : (
            <span className="uppercase">{link.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

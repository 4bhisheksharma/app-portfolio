import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { App, AppStatus } from '../../types/app'
import { AppCard } from './AppCard'

interface AppsSectionProps {
  apps: App[]
}

type Filter = 'all' | AppStatus

const filters: { id: Filter; label: string; param: string }[] = [
  { id: 'all', label: 'All', param: '' },
  { id: 'live', label: 'Live', param: 'live' },
  { id: 'closed_testing', label: 'In testing', param: 'testing' },
  { id: 'coming_soon', label: 'Coming soon', param: 'soon' },
]

const ease = [0.22, 1, 0.36, 1] as const

function matches(app: App, query: string) {
  if (!query) return true
  const haystack = `${app.name} ${app.tag} ${app.category} ${app.description}`.toLowerCase()
  return query
    .toLowerCase()
    .split(/\s+/)
    .every((word) => haystack.includes(word))
}

export function AppsSection({ apps }: AppsSectionProps) {
  // Filter and search live in the URL (?filter=live&q=vpn) so a view can be shared or bookmarked
  const [params, setParams] = useSearchParams()
  const filter = filters.find((f) => f.param && f.param === params.get('filter'))?.id ?? 'all'
  // Typing updates local state immediately; the URL follows, so fast keystrokes are never lost
  const [query, setQuery] = useState(() => params.get('q') ?? '')
  const [touched, setTouched] = useState(false)
  const [highlight, setHighlight] = useState<string | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const searchRef = useRef<HTMLInputElement>(null)

  const searched = apps.filter((app) => matches(app, query.trim()))
  const visible = filter === 'all' ? searched : searched.filter((app) => app.status === filter)
  const countFor = (id: Filter) => (id === 'all' ? searched.length : searched.filter((a) => a.status === id).length)

  const setParam = (key: 'filter' | 'q', value: string) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev)
        if (value) next.set(key, value)
        else next.delete(key)
        return next
      },
      { replace: true, preventScrollReset: true },
    )
  }

  const search = (value: string) => {
    setTouched(true)
    setQuery(value)
    setParam('q', value.trim())
  }

  const select = (index: number) => {
    setTouched(true)
    setParam('filter', filters[index].param)
  }

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (index + delta + filters.length) % filters.length
    select(next)
    tabRefs.current[next]?.focus()
  }

  // "/" focuses search, like most docs and app directories
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (e.key !== '/' || target.closest('input, textarea, [contenteditable], dialog')) return
      e.preventDefault()
      searchRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Deep links (#chill-nepal) scroll to the app and briefly highlight it
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (!id || !apps.some((a) => a.id === id)) return
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setHighlight(id)
    }, 700)
    const clear = window.setTimeout(() => setHighlight(null), 3200)
    return () => {
      window.clearTimeout(timer)
      window.clearTimeout(clear)
    }
  }, [apps])

  const reset = () => {
    setTouched(true)
    setQuery('')
    setParams({}, { replace: true, preventScrollReset: true })
    searchRef.current?.focus()
  }

  return (
    <section aria-label="Apps">
      {/* stays pinned while scrolling so switching views is always one tap away */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
        className="sticky top-0 z-20 -mx-5 flex flex-col gap-2 border-b border-line bg-bg/85 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8"
      >
        <div role="tablist" aria-label="Filter apps" className="no-scrollbar isolate -mx-1 flex gap-1 overflow-x-auto px-1">
          {filters.map((f, index) => {
            const selected = filter === f.id
            return (
              <button
                key={f.id}
                ref={(el) => {
                  tabRefs.current[index] = el
                }}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="apps-list"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(index)}
                onKeyDown={(e) => onKeyDown(e, index)}
                className={`relative shrink-0 cursor-pointer rounded-full px-4 py-2 text-[13px] transition-colors duration-300 ${
                  selected ? 'text-bg' : 'text-muted hover:text-fg'
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-fg"
                    transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                  />
                )}
                {f.label}
                <span className={`ml-1.5 font-mono text-[11px] ${selected ? 'text-bg/60' : 'text-faint'}`}>
                  {countFor(f.id)}
                </span>
              </button>
            )
          })}
        </div>

        <label className="group/search relative flex items-center sm:w-64">
          <span className="sr-only">Search apps</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 text-faint transition-colors group-focus-within/search:text-fg"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => search(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                search('')
                e.currentTarget.blur()
              }
            }}
            placeholder="Search apps"
            autoComplete="off"
            className="w-full rounded-full border border-line bg-card/80 py-2 pl-9 pr-9 text-base text-fg outline-none transition-colors placeholder:text-faint focus:border-white/20 sm:text-[13px] [&::-webkit-search-cancel-button]:hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => search('')}
              aria-label="Clear search"
              className="absolute right-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full text-muted transition-colors hover:bg-white/[0.06] hover:text-fg"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          ) : (
            <kbd className="pointer-events-none absolute right-3 hidden rounded border border-line px-1.5 font-mono text-[10px] text-faint sm:block">
              /
            </kbd>
          )}
        </label>
      </motion.div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? 'app' : 'apps'} shown
      </p>

      <ul id="apps-list" role="tabpanel" className="grid md:grid-cols-2 md:gap-x-10">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((app, index) => (
            <motion.li
              key={app.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease }}
              className="border-b border-line"
            >
              <AppCard app={app} index={index} stagger={!touched} highlighted={highlight === app.id} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <AnimatePresence>
        {visible.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="py-20 text-center"
          >
            <p className="text-fg">No apps match {query ? <>&ldquo;{query}&rdquo;</> : 'this filter'}.</p>
            <p className="mt-1 text-sm text-muted">Try another word, or browse everything.</p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 cursor-pointer rounded-full border border-line px-4 py-2 text-[13px] text-fg transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              Show all apps
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

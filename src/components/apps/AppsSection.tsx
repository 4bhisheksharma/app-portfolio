import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
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

export function AppsSection({ apps }: AppsSectionProps) {
  // The filter lives in the URL (?filter=live) so a filtered view can be shared or bookmarked
  const [params, setParams] = useSearchParams()
  const filter = filters.find((f) => f.param && f.param === params.get('filter'))?.id ?? 'all'
  const [touched, setTouched] = useState(false)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const visible = filter === 'all' ? apps : apps.filter((app) => app.status === filter)
  const countFor = (id: Filter) => (id === 'all' ? apps.length : apps.filter((a) => a.status === id).length)

  const select = (index: number) => {
    const next = filters[index]
    setTouched(true)
    setParams(next.param ? { filter: next.param } : {}, { replace: true, preventScrollReset: true })
  }

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (index + delta + filters.length) % filters.length
    select(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section aria-label="Apps">
      {/* stays pinned while scrolling so switching views is always one tap away */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease }}
        className="sticky top-0 z-20 -mx-5 border-b border-line bg-bg/85 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8"
      >
        <div role="tablist" aria-label="Filter apps" className="no-scrollbar isolate flex gap-1 overflow-x-auto">
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
      </motion.div>

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
              <AppCard app={app} index={index} stagger={!touched} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}

import type { App } from '../../types/app'
import { accentStyles } from '../../utils/accent'
import { AppCardHeader } from './AppCardHeader'
import { AppCategoryRow } from './AppCategoryRow'
import { PhoneMockup } from './PhoneMockup'
import { StoreLinks } from './StoreLinks'

interface AppCardProps {
  app: App
}

export function AppCard({ app }: AppCardProps) {
  const accent = accentStyles[app.accent]

  return (
    <article
      className={`flex w-[85vw] shrink-0 snap-center flex-col rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/80 hover:shadow-2xl ${accent.glow} sm:w-auto sm:shrink`}
    >
      <AppCardHeader app={app} />
      <AppCategoryRow app={app} />
      <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">{app.name}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{app.description}</p>
      <PhoneMockup app={app} />
      <StoreLinks app={app} />
    </article>
  )
}

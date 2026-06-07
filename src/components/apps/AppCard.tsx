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
      className={`flex w-[85vw] shrink-0 snap-center flex-col rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700/80 hover:shadow-xl ${accent.glow} sm:w-auto sm:shrink`}
    >
      <AppCardHeader app={app} />
      <AppCategoryRow app={app} />
      <h2 className="mt-3 text-lg font-semibold text-white">{app.name}</h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
        {app.description}
      </p>
      <PhoneMockup app={app} />
      <StoreLinks app={app} />
    </article>
  )
}

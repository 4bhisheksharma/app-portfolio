import type { App } from '../../types/app'
import { ExternalLink } from '../ui/ExternalLink'

interface StoreLinksProps {
  app: App
}

export function StoreLinks({ app }: StoreLinksProps) {
  const isLive = app.status === 'live'

  return (
    <div className="mt-6 flex items-center justify-between border-t border-zinc-800/80 pt-4">
      {isLive && app.appStoreUrl ? (
        <ExternalLink
          href={app.appStoreUrl}
          className="text-xs font-medium tracking-widest text-zinc-500"
        >
          APP STORE
        </ExternalLink>
      ) : (
        <span className="text-xs font-medium tracking-widest text-zinc-700">
          APP STORE
          <span className="ml-2 text-zinc-600">· SOON</span>
        </span>
      )}

      {isLive && app.playStoreUrl ? (
        <ExternalLink
          href={app.playStoreUrl}
          className="text-xs font-medium tracking-widest text-zinc-500"
        >
          GOOGLE PLAY
        </ExternalLink>
      ) : (
        <span className="text-xs font-medium tracking-widest text-zinc-700">
          GOOGLE PLAY
          <span className="ml-2 text-zinc-600">· SOON</span>
        </span>
      )}
    </div>
  )
}

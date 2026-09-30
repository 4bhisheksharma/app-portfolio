import { motion } from 'framer-motion'
import type { SiteConfig } from '../../types/app'
import { ExternalLink } from '../ui/ExternalLink'
import { AppleIcon, PlayIcon } from '../ui/StoreIcons'

interface SiteHeaderProps {
  config: SiteConfig
  appCount: number
  playCount: number
  appStoreCount: number
}

const ease = [0.22, 1, 0.36, 1] as const

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
})

export function SiteHeader({ config, appCount, playCount, appStoreCount }: SiteHeaderProps) {
  return (
    <header>
      <motion.nav
        {...rise(0)}
        aria-label="Site"
        className="flex items-center justify-between py-2 text-sm"
      >
        <a
          href={config.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 py-1.5 font-medium tracking-tight"
        >
          <img
            src={config.logo}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 rounded-full bg-white p-0.5 transition-transform duration-500 ease-out group-hover:-rotate-12"
          />
          {config.name}
        </a>
        <ExternalLink href={config.portfolioUrl} className="py-1.5 text-muted">
          Portfolio
        </ExternalLink>
      </motion.nav>

      <div className="pb-12 pt-16 sm:pb-16 sm:pt-24">
        <motion.p {...rise(0.1)} className="font-mono text-xs text-faint">
          {String(appCount).padStart(2, '0')} apps
        </motion.p>
        <motion.h1
          {...rise(0.18)}
          className="mt-4 text-[clamp(2.75rem,8vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.045em]"
        >
          Apps I&apos;ve{' '}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-accent">built.</span>
        </motion.h1>
        <motion.p {...rise(0.28)} className="mt-6 max-w-md text-base leading-relaxed text-muted">
          {config.subtitle}
        </motion.p>
        <motion.ul
          {...rise(0.34)}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-muted"
        >
          <li className="flex items-center gap-2">
            <PlayIcon className="h-3.5 w-3.5 text-fg" />
            <span>
              <span className="text-fg">{playCount}</span> on Google Play
            </span>
          </li>
          <li className="flex items-center gap-2">
            <AppleIcon className="h-3.5 w-3.5 text-fg" />
            <span>
              <span className="text-fg">{appStoreCount}</span> on the App Store
            </span>
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Built with Flutter
          </li>
        </motion.ul>
      </div>
    </header>
  )
}

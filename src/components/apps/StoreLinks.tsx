import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { App } from '../../types/app'
import { ArrowUpRight, ExternalLink } from '../ui/ExternalLink'
import { AppleIcon, ChromeIcon, PlayIcon } from '../ui/StoreIcons'
import { ClosedTestingModal } from './ClosedTestingModal'

interface StoreLinksProps {
  app: App
}

const buttonBase =
  'inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-300 ease-out active:scale-[0.97]'

/** Primary action: a store the app can be installed from. */
function StoreButton({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonBase} border border-line bg-card text-fg hover:border-white/20 hover:bg-white/[0.04]`}
    >
      {icon}
      {children}
    </a>
  )
}

/** Secondary link: website, source, policy. */
function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const className = 'py-2 text-[13px] text-muted'
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={`${className} link-underline transition-colors hover:text-fg`}>
        {children}
      </Link>
    )
  }
  return (
    <ExternalLink href={href} className={className}>
      {children}
    </ExternalLink>
  )
}

export function StoreLinks({ app }: StoreLinksProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const isComingSoon = app.status === 'coming_soon'
  const isClosedTesting = app.closedTesting || app.status === 'closed_testing'

  if (isComingSoon) {
    return <p className="mt-4 text-[13px] text-faint">In development. Not yet available.</p>
  }

  // Websites that are just the repo are shown once, as GitHub
  const website = app.websiteUrl && app.websiteUrl !== app.githubUrl ? app.websiteUrl : undefined
  const hasSecondary = website || app.githubUrl || app.privacyUrl || (isClosedTesting && app.playStoreUrl)

  return (
    <>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {isClosedTesting && (
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className={`${buttonBase} group/ext cursor-pointer bg-accent text-bg hover:brightness-110`}
          >
            Join testing
            <ArrowUpRight className="opacity-80" />
          </button>
        )}
        {!isClosedTesting && app.playStoreUrl && (
          <StoreButton href={app.playStoreUrl} icon={<PlayIcon />}>
            Google Play
          </StoreButton>
        )}
        {app.appStoreUrl && (
          <StoreButton href={app.appStoreUrl} icon={<AppleIcon />}>
            App Store
          </StoreButton>
        )}
        {app.chromeStoreUrl && (
          <StoreButton href={app.chromeStoreUrl} icon={<ChromeIcon />}>
            Chrome
          </StoreButton>
        )}
        {!app.appStoreUrl && app.iosComingSoon && (
          <span className={`${buttonBase} border border-dashed border-line text-faint`}>
            <AppleIcon />
            iOS soon
          </span>
        )}
      </div>

      {hasSecondary && (
        <div className="mt-2 flex flex-wrap items-center gap-x-5">
          {isClosedTesting && app.playStoreUrl && <TextLink href={app.playStoreUrl}>Google Play (testers)</TextLink>}
          {website && <TextLink href={website}>Website</TextLink>}
          {app.githubUrl && <TextLink href={app.githubUrl}>GitHub</TextLink>}
          {app.privacyUrl && <TextLink href={app.privacyUrl}>Privacy</TextLink>}
        </div>
      )}

      {isClosedTesting && (
        <ClosedTestingModal app={app} open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}

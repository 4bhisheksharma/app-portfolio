import { useEffect, useRef, useState } from 'react'
import type { App } from '../../types/app'
import { siteConfig } from '../../data/site'

export interface ClosedTestingModalProps {
  app: App
  open: boolean
  onClose: () => void
}

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export function ClosedTestingModal({ app, open, onClose }: ClosedTestingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formState, setFormState] = useState<FormState>('idle')

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [open])

  const handleClose = () => {
    setFormState('idle')
    onClose()
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormState('submitting')

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${siteConfig.testingContactEmail}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            app: app.name,
            appId: app.id,
            playStoreUrl: app.playStoreUrl || '',
            _subject: `${app.name} — Closed Testing Interest`,
            _template: 'table',
            message: `${name} (${email}) is interested in early/closed testing for ${app.name}.`,
          }),
        },
      )

      if (!response.ok) throw new Error('Submit failed')

      setFormState('success')
      setName('')
      setEmail('')
    } catch {
      setFormState('error')
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="fixed inset-0 z-[100] m-auto w-[min(100%,28rem)] max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-0 shadow-2xl backdrop:bg-black/60 open:flex open:flex-col"
    >
      <div className="border-b border-zinc-800 px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {app.iconImage && (
              <img
                src={app.iconImage}
                alt={`${app.name} icon`}
                className="h-10 w-10 shrink-0 rounded-xl border border-zinc-800 object-cover"
              />
            )}
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-rose-400">
                Closed testing
              </p>
              <h2 className="mt-0.5 text-lg font-semibold text-white">{app.name}</h2>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-200 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="px-6 py-5">
        <p className="text-sm leading-relaxed text-zinc-400">
          <strong className="font-medium text-zinc-200">{app.name}</strong> is currently in{' '}
          <strong className="font-medium text-zinc-200">closed testing</strong> on Google Play.
          The store listing is available to authorized testers.
        </p>

        {app.playStoreUrl && (
          <div className="mt-3 rounded-xl border border-zinc-800/80 bg-zinc-800/40 p-3 text-xs text-zinc-400">
            <span className="block font-medium text-zinc-300">Already an approved tester?</span>
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-1.5 font-medium text-rose-400 hover:text-rose-300 underline underline-offset-2"
            >
              Open on Google Play
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        )}

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Interested in early access or becoming a closed tester? Leave your name and Google Play
          email — we&apos;ll invite you when a spot opens.
        </p>

        {formState === 'success' ? (
          <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
            Thanks! We&apos;ll be in touch at the email you provided once your account is added to
            the closed test group.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor={`${app.id}-name`}
                className="block text-sm font-medium text-zinc-300"
              >
                Name
              </label>
              <input
                id={`${app.id}-name`}
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-2.5 text-sm text-white outline-none transition-shadow placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-2 focus:ring-zinc-700"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor={`${app.id}-email`}
                className="block text-sm font-medium text-zinc-300"
              >
                Google Play Email
              </label>
              <input
                id={`${app.id}-email`}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-zinc-700 bg-zinc-800/80 px-3 py-2.5 text-sm text-white outline-none transition-shadow placeholder:text-zinc-600 focus:border-zinc-600 focus:ring-2 focus:ring-zinc-700"
                placeholder="you@example.com"
              />
            </div>

            {formState === 'error' && (
              <p className="text-sm text-red-400">
                Something went wrong. Please try again or email{' '}
                <a
                  href={`mailto:${siteConfig.testingContactEmail}`}
                  className="underline underline-offset-2"
                >
                  {siteConfig.testingContactEmail}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={formState === 'submitting'}
              className="w-full rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 disabled:opacity-60 cursor-pointer"
            >
              {formState === 'submitting' ? 'Sending…' : 'Request early access'}
            </button>
          </form>
        )}
      </div>
    </dialog>
  )
}

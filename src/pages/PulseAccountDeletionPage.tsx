import { Link } from 'react-router-dom'
import { LegalLayout } from '../components/legal/LegalLayout'
import { pulseMeta } from '../data/pulse/constants'

export function PulseAccountDeletionPage() {
  const m = pulseMeta

  return (
    <LegalLayout
      title="Account & Data Deletion Policy"
      subtitle={`${m.fullName} (${m.displayName})`}
      effectiveDate={m.effectiveDate}
      lastUpdated={m.lastUpdated}
    >
      <h2>No User Accounts</h2>
      <p>
        P.U.L.S.E does not offer account registration, login, or cloud profiles. There is no account
        for us to delete on a server. All of your data is stored locally on your device.
      </p>
      <p>This policy explains how you can delete that data.</p>

      <h2>Delete Individual Capsules</h2>
      <p>You can remove a single voice capsule in the App:</p>
      <ul>
        <li>On the Home screen, swipe to delete a capsule</li>
        <li>On the Played Capsules screen, delete opened capsules</li>
      </ul>
      <p>When you delete a capsule, the App removes its title, description, dates, and other metadata, and cancels any scheduled unlock or reminder notifications for that capsule.</p>

      <h2>Clear App Lock and PIN</h2>
      <p>
        To remove your PIN and biometric unlock settings, go to <strong>Profile → Security</strong>{' '}
        and disable app lock. This removes your stored PIN hash and biometric preference from the
        App.
      </p>

      <h2>Delete All Data</h2>
      <p>
        To permanently remove all voice recordings, capsule metadata, settings, and PIN data,
        uninstall the App from your device:
      </p>
      <ul>
        <li>
          <strong>Android:</strong> Settings → Apps → PULSE → Uninstall (or long-press the app icon →
          Uninstall)
        </li>
        <li>
          <strong>iOS:</strong> Long-press the app icon → Remove App → Delete App
        </li>
      </ul>
      <p>
        Uninstalling removes the App and its local data from your device. We do not keep copies on
        our servers because we do not operate servers that store your content.
      </p>
      <p>
        If your device is backed up to iCloud or Google Drive, deleted data may remain in those
        backups according to your device’s backup settings.
      </p>

      <h2>Data You Shared Outside the App</h2>
      <p>
        If you shared an unlocked capsule using your device’s share feature, copies may exist in
        messaging apps, email, or cloud storage you chose. P.U.L.S.E cannot delete data once it has
        been shared outside the App. You will need to delete those copies in the relevant apps or
        services.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about deleting your data, contact us at{' '}
        <a href={`mailto:${m.email}`}>{m.email}</a>.
      </p>

      <p className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
        See also:{' '}
        <Link to="/pulse/privacy" className="text-zinc-400 hover:text-white">
          Privacy Policy
        </Link>
      </p>
    </LegalLayout>
  )
}

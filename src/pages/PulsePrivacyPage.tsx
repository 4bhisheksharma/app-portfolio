import { Link } from 'react-router-dom'
import { LegalLayout } from '../components/legal/LegalLayout'
import { pulseMeta } from '../data/pulse/constants'

export function PulsePrivacyPage() {
  const m = pulseMeta

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle={`${m.fullName} (${m.displayName})`}
      effectiveDate={m.effectiveDate}
      lastUpdated={m.lastUpdated}
    >
      <p className="lead">
        <strong>App name:</strong> {m.appName} (display name: {m.displayName})<br />
        <strong>Package ID:</strong> {m.packageId}<br />
        <strong>Developer:</strong> {m.developer}<br />
        <strong>Contact:</strong>{' '}
        <a href={`mailto:${m.email}`}>{m.email}</a>
      </p>

      <h2>1. Introduction</h2>
      <p>
        P.U.L.S.E (“we,” “our,” or “the App”) is a personal voice time-capsule application. You
        record audio messages, lock them until a future date, and listen when they unlock.
      </p>
      <p>
        This Privacy Policy explains what information the App handles, how it is stored, what limited
        third-party services are involved, and what control you have over your data.
      </p>
      <p>
        <strong>Important:</strong> P.U.L.S.E does not require an account. We do not operate servers
        that store your personal content.
      </p>

      <h2>2. Information the App Handles</h2>
      <p>
        Because P.U.L.S.E works offline and without accounts, the information below is created by
        you and stored on your device. We do not collect it on our servers.
      </p>

      <h3>2.1 Voice Recordings</h3>
      <p>
        When you create a capsule, the App records audio using your device microphone and saves it
        locally on your device as an audio file in the App’s private storage.
      </p>

      <h3>2.2 Capsule Information</h3>
      <p>For each voice capsule, the App may store:</p>
      <ul>
        <li>Title (required)</li>
        <li>Description (optional)</li>
        <li>Emotion tag (optional)</li>
        <li>Recorded date, unlock date, and recording duration</li>
        <li>Whether the capsule has been opened</li>
      </ul>

      <h3>2.3 App Settings and Security</h3>
      <p>The App may store locally on your device:</p>
      <ul>
        <li>Whether app lock is enabled</li>
        <li>A hashed version of your PIN (not stored in plain text)</li>
        <li>Your biometric unlock preference</li>
        <li>Display preferences such as sort order and filters</li>
      </ul>
      <p>
        Biometric data is handled by your device’s operating system. P.U.L.S.E does not store
        fingerprint or face data.
      </p>

      <h3>2.4 Information We Do Not Collect</h3>
      <p>P.U.L.S.E does not collect or request:</p>
      <ul>
        <li>Name, email, phone number, or postal address</li>
        <li>Location or GPS data</li>
        <li>Contacts, calendar, photos, or camera images</li>
        <li>Health or fitness data</li>
        <li>Advertising identifiers</li>
        <li>Usage analytics, crash reporting, or behavioral tracking</li>
        <li>Payment or billing information</li>
      </ul>

      <h2>3. How Your Information Is Used</h2>
      <p>All data is used locally on your device to:</p>
      <ul>
        <li>Record, store, and play voice capsules</li>
        <li>Lock capsules until their unlock date</li>
        <li>Display countdowns, statistics, and search results</li>
        <li>Schedule local notifications when capsules unlock</li>
        <li>Protect the App with optional PIN or biometric lock</li>
        <li>Share unlocked capsules when you choose to use the share feature</li>
      </ul>
      <p>
        We do not use your data for advertising, profiling, or sale to third parties. We have no
        access to your recordings or metadata because they never leave your device unless you share
        them.
      </p>

      <h2>4. Data Storage and Security</h2>
      <p>
        Your voice recordings, capsule information, and settings are stored locally on your device.
        Audio files are kept in the App’s private storage and protected by your device’s operating
        system security.
      </p>
      <p>
        If enabled, the App can require a 4-digit PIN or biometric authentication before use.
      </p>
      <p>
        Your data security also depends on your device settings, such as screen lock, encryption, and
        backups. If your device is backed up to iCloud or Google Drive, capsule data may be included
        in those backups according to your OS backup policies.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>P.U.L.S.E is primarily offline. Limited third-party interactions may include:</p>
      <ul>
        <li>
          <strong>Google Fonts:</strong> The App may download font files from Google’s servers. This
          does not include your recordings or capsule content.
        </li>
        <li>
          <strong>Google Play updates (Android only):</strong> The App may check for updates through
          Google Play. This does not transmit your recordings or capsule data.
        </li>
        <li>
          <strong>Share sheet:</strong> When you share an unlocked capsule, you choose where to send
          it using your device’s built-in share options. Sharing is entirely user-initiated.
        </li>
      </ul>

      <h2>6. Device Permissions</h2>
      <p>The App may request permission to use:</p>
      <ul>
        <li>Your microphone, to record voice capsules</li>
        <li>Notifications, to alert you when capsules unlock</li>
        <li>Biometrics, to unlock the App if you enable app lock</li>
      </ul>
      <p>
        You can deny or revoke these permissions in your device settings. The App can still be used
        without notifications, but you will not receive unlock alerts.
      </p>

      <h2>7. Notifications</h2>
      <p>P.U.L.S.E uses local notifications only — no remote push servers.</p>
      <p>The App may notify you:</p>
      <ul>
        <li>When a capsule unlocks</li>
        <li>One day before a capsule unlocks</li>
      </ul>
      <p>
        Notification content may include your capsule title. Notifications are scheduled on your
        device and are not sent to our servers.
      </p>

      <h2>8. Children’s Privacy</h2>
      <p>
        P.U.L.S.E does not knowingly collect personal information from anyone, including children
        under 13 (or the applicable age in your region), because it does not collect personal
        information on servers and does not require accounts.
      </p>
      <p>Parents and guardians should supervise minors’ use of recording and sharing features.</p>

      <h2>9. Your Rights and Choices</h2>
      <p>
        Because your data is stored locally and we do not maintain user accounts or remote
        databases, you control your information directly in the App and through your device
        settings.
      </p>
      <p>You can:</p>
      <ul>
        <li>View your capsules and their information in the App</li>
        <li>Rename or update capsules by editing them in the App</li>
        <li>Share unlocked audio files using your device’s share feature</li>
        <li>Deny or revoke permissions in your device settings</li>
      </ul>
      <p>
        To delete your data, see our{' '}
        <Link to="/pulse/account-deletion">Account &amp; Data Deletion Policy</Link>.
      </p>
      <p>
        For privacy inquiries, contact{' '}
        <a href={`mailto:${m.email}`}>{m.email}</a>.
      </p>

      <h2>10. Data Retention</h2>
      <ul>
        <li>
          <strong>Capsules:</strong> Kept on your device until you delete them or uninstall the App
        </li>
        <li>
          <strong>PIN data:</strong> Removed when you disable app lock in Security settings
        </li>
        <li>
          <strong>Notifications:</strong> Cancelled when a capsule is deleted
        </li>
      </ul>

      <h2>11. International Users</h2>
      <p>
        P.U.L.S.E does not transfer your capsule data to developer-operated servers. Limited
        third-party network activity (such as Google Fonts or Play Store update checks) may involve
        servers operated by those providers, subject to their respective privacy policies.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy when the App changes. The “Last updated” date at the top
        will be revised. Continued use after changes constitutes acceptance of the updated policy.
      </p>

      <h2>13. Contact Us</h2>
      <ul>
        <li>
          <strong>Developer:</strong> {m.developer}
        </li>
        <li>
          <strong>Website:</strong>{' '}
          <a href={m.website} target="_blank" rel="noopener noreferrer">
            {m.website}
          </a>
        </li>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${m.email}`}>{m.email}</a>
        </li>
      </ul>

      <p className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">
        See also:{' '}
        <Link to="/pulse/account-deletion" className="text-zinc-400 hover:text-white">
          Account &amp; Data Deletion Policy
        </Link>
      </p>
    </LegalLayout>
  )
}

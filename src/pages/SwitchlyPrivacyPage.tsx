import { useEffect } from 'react'
import { LegalLayout } from '../components/legal/LegalLayout'
import { switchlyMeta } from '../data/switchly/constants'

export function SwitchlyPrivacyPage() {
  const m = switchlyMeta

  useEffect(() => {
    document.title = `Privacy Policy - ${m.appName}`
  }, [m.appName])

  return (
    <LegalLayout
      appName={m.appName}
      title="Privacy Policy"
      subtitle={`Privacy Policy for ${m.appName} (${m.packageName})`}
      effectiveDate={m.effectiveDate}
      lastUpdated={m.lastUpdated}
    >
      <p className="lead">
        <strong>Switchly</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the app&rdquo;) is
        committed to protecting your privacy. This Privacy Policy explains our practices regarding
        data collection, usage, and permissions.
      </p>

      <h2>Summary: 100% On-Device, Zero Data Collection</h2>
      <ul>
        <li>
          <strong>No Data Collected:</strong> Switchly does not collect, record, transmit, or share
          any personal information, telemetry, analytics, or behavioral data.
        </li>
        <li>
          <strong>No Third-Party Trackers:</strong> Switchly contains <strong>zero</strong> analytics
          SDKs, advertising SDKs, tracking libraries, or external telemetry tools.
        </li>
        <li>
          <strong>No Cloud Accounts Required:</strong> All features operate entirely offline and
          on-device.
        </li>
      </ul>

      <h2>Sensitive Permissions and How They Are Used</h2>
      <p>
        Switchly uses Android system features and permissions solely to provide on-device Quick
        Settings utility toggles. Below is a detailed breakdown of each permission:
      </p>

      <h3>1. VPN Service (<code>VpnService</code>)</h3>
      <ul>
        <li>
          <strong>Feature:</strong> Internet Kill Switch tile.
        </li>
        <li>
          <strong>Usage:</strong> Switchly establishes a <strong>local blackhole VPN interface</strong>{' '}
          on your device to drop outgoing and incoming network packets when you tap the Kill Switch tile,
          allowing you to instantly sever network connectivity for selected or all apps.
        </li>
        <li>
          <strong>Data Policy:</strong> No traffic is inspected, decrypted, routed to external
          servers, logged, or collected. The local tunnel interface operates purely on-device as a
          local circuit breaker.
        </li>
      </ul>

      <h3>2. Usage Access (<code>PACKAGE_USAGE_STATS</code>)</h3>
      <ul>
        <li>
          <strong>Feature:</strong> Screen Time Quick Settings tiles and Public Mode app protection.
        </li>
        <li>
          <strong>Usage:</strong> Reads real-time foreground application usage statistics from
          Android&apos;s <code>UsageStatsManager</code> to:
          <ol className="mt-2 list-decimal pl-5 space-y-1">
            <li>Display today&apos;s screen time for your chosen app directly in your Quick Settings panel.</li>
            <li>Detect when a restricted application is opened during Public Mode.</li>
          </ol>
        </li>
        <li>
          <strong>Data Policy:</strong> Usage statistics are calculated strictly in memory on your
          device. No application history, app names, or timestamps are ever uploaded or shared.
        </li>
      </ul>

      <h3>3. Display Over Other Apps (<code>SYSTEM_ALERT_WINDOW</code>)</h3>
      <ul>
        <li>
          <strong>Feature:</strong> Public Mode.
        </li>
        <li>
          <strong>Usage:</strong> Used to display a temporary, on-device security lock overlay when a
          user attempts to launch a restricted application while Public Mode is enabled.
        </li>
        <li>
          <strong>Data Policy:</strong> The overlay is rendered locally by the Android{' '}
          <code>WindowManager</code>. No user input, keystrokes, or screen contents are captured or
          recorded.
        </li>
      </ul>

      <h3>4. Do Not Disturb Access (<code>ACCESS_NOTIFICATION_POLICY</code>)</h3>
      <ul>
        <li>
          <strong>Feature:</strong> Public Mode notification privacy.
        </li>
        <li>
          <strong>Usage:</strong> Used to temporarily suppress incoming notification previews and
          sounds when your phone is handed to someone else in Public Mode, protecting your private
          messages.
        </li>
        <li>
          <strong>Data Policy:</strong> No notification contents, titles, sender information, or text
          are ever read or logged.
        </li>
      </ul>

      <h3>5. Camera (<code>CAMERA</code>)</h3>
      <ul>
        <li>
          <strong>Feature:</strong> Quick Settings QR Scanner and Payment QR code reader.
        </li>
        <li>
          <strong>Usage:</strong> The camera is accessed only while the scanner viewfinder is actively
          open on your screen to parse QR code payloads locally using on-device computer vision.
        </li>
        <li>
          <strong>Data Policy:</strong> No pictures, frames, or video recordings are saved, stored in
          gallery, or transmitted over the internet.
        </li>
      </ul>

      <h3>6. Foreground Services (<code>FOREGROUND_SERVICE</code>, <code>FOREGROUND_SERVICE_SPECIAL_USE</code>)</h3>
      <ul>
        <li>
          <strong>Feature:</strong> Caffeine tile (keeps screen on) and Public Mode (monitors foreground
          app during device handover).
        </li>
        <li>
          <strong>Usage:</strong> Required by Android to maintain a user-visible status bar notification
          while Caffeine or Public Mode is actively running, allowing you to stop the service at any time
          with a single tap.
        </li>
        <li>
          <strong>Data Policy:</strong> Foreground services do not collect or exfiltrate any data.
        </li>
      </ul>

      <h3>7. Write Secure Settings (<code>WRITE_SECURE_SETTINGS</code>)</h3>
      <ul>
        <li>
          <strong>Feature:</strong> Private DNS, Grayscale, Animator Duration Scale, and Network Mode tiles.
        </li>
        <li>
          <strong>Usage:</strong> An optional Android system permission granted by the user via ADB (
          <code>adb shell pm grant {m.packageName} android.permission.WRITE_SECURE_SETTINGS</code>) to
          allow Switchly to toggle native system settings that Android does not expose to third-party
          apps by default.
        </li>
        <li>
          <strong>Data Policy:</strong> Used exclusively to modify specific user-requested system
          settings keys. No settings data is gathered or uploaded.
        </li>
      </ul>

      <h2>App Updates</h2>
      <ul>
        <li>
          <strong>Google Play Edition:</strong> Updates are distributed and managed exclusively via the
          official Google Play In-App Updates API (<code>in_app_update</code>). The Google Play build does
          not request <code>REQUEST_INSTALL_PACKAGES</code> and adheres strictly to Google Play&apos;s
          Device and Network Abuse Policy.
        </li>
        <li>
          <strong>GitHub Edition:</strong> Standalone APK releases available on GitHub check GitHub&apos;s
          public API for releases and allow manual sideloaded updating.
        </li>
      </ul>

      <h2>Data Storage &amp; Retention</h2>
      <p>
        All user preferences, custom quick text snippets, payment QR images, and tile configurations are
        stored locally on your device within Android&apos;s sandboxed private app storage (
        <code>SharedPreferences</code> and app data directory). This data is completely deleted when you
        clear app data or uninstall the app.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Switchly does not address or target anyone under the age of 13. We do not knowingly collect or
        solicit personal information from children.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be reflected in this
        document with an updated &ldquo;Last Updated&rdquo; date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback about this Privacy Policy or Switchly&apos;s data
        practices, please contact:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${m.email}`}>{m.email}</a>
        </li>
        <li>
          <strong>GitHub:</strong>{' '}
          <a href={m.githubUrl} target="_blank" rel="noopener noreferrer">
            {m.githubUrl}
          </a>
        </li>
        {m.playStoreUrl && (
          <li>
            <strong>Google Play Store:</strong>{' '}
            <a href={m.playStoreUrl} target="_blank" rel="noopener noreferrer">
              {m.playStoreUrl}
            </a>
          </li>
        )}
      </ul>
    </LegalLayout>
  )
}


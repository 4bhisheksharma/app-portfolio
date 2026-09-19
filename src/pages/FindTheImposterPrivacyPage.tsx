import { useEffect } from 'react'
import { LegalLayout } from '../components/legal/LegalLayout'
import { imposterMeta } from '../data/imposter/constants'

export function FindTheImposterPrivacyPage() {
  const m = imposterMeta

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
        This Privacy Policy applies to the mobile application <strong>{m.appName}</strong> (referred
        to as &ldquo;the App&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), with
        package identifier <code>{m.packageName}</code>. We respect your privacy and are committed
        to protecting it. This policy explains how information is handled when you download,
        install, and use the App.
      </p>

      <h2>1. Summary (Zero Data Collection)</h2>
      <p>
        <strong>
          {m.appName} does not collect, store, transmit, sell, or share any personally identifiable
          information (PII) or device data.
        </strong>
      </p>
      <p>
        The App is designed as a local, offline pass-and-play party game. Everything happens directly
        on your device.
      </p>

      <h2>2. Information Collection and Usage</h2>
      <ul>
        <li>
          <strong>Personal Information:</strong> We do not require you to create an account,
          register, or provide any personal details (such as name, email address, phone number, or
          age) to use the App.
        </li>
        <li>
          <strong>Game Data &amp; Settings:</strong> All gameplay configurations—such as player
          counts, selected categories, round timers, and display preferences (Light/Dark theme)—are
          processed and stored strictly on your local device. This data is never sent to external
          servers.
        </li>
        <li>
          <strong>Word Database:</strong> The word lists and hint dictionaries are bundled locally
          within the App package. No remote content is downloaded during gameplay.
        </li>
        <li>
          <strong>Location &amp; Sensor Data:</strong> The App does not access your GPS location,
          camera, microphone, contacts, photos, or storage files.
        </li>
      </ul>

      <h2>3. Device Permissions &amp; Network Access</h2>
      <p>
        The App contains standard runtime dependencies provided by the Flutter framework. Although
        basic network-state permissions may exist in the underlying operating system manifest,{' '}
        <strong>
          the App does not make network requests, does not transmit gameplay data, and does not
          communicate with any external backend servers.
        </strong>
      </p>

      <h2>4. Third-Party Services &amp; Analytics</h2>
      <ul>
        <li>
          <strong>No Advertising SDKs:</strong> We do not display third-party advertisements or use
          ad networks (such as Google AdMob, Unity Ads, or Meta Audience Network).
        </li>
        <li>
          <strong>No Tracking or Analytics SDKs:</strong> We do not use third-party analytics
          services (such as Google Analytics for Firebase, Flurry, or Mixpanel) to track your
          behavior or monitor gameplay.
        </li>
        <li>
          <strong>No User Profiling:</strong> We do not track your activity across other apps or
          websites.
        </li>
      </ul>

      <h2>5. Children&apos;s Privacy (COPPA &amp; GDPR-K Compliance)</h2>
      <p>
        {m.appName} is a family-friendly party game suitable for players of all ages. Because we do
        not collect any personal information whatsoever, our App complies with:
      </p>
      <ul>
        <li>
          The <strong>Children&apos;s Online Privacy Protection Act (COPPA)</strong> in the United
          States.
        </li>
        <li>
          The <strong>General Data Protection Regulation (GDPR / GDPR-K)</strong> in the European
          Union.
        </li>
        <li>
          Google Play&apos;s <strong>Families Policy Requirements</strong>.
        </li>
      </ul>
      <p>
        If a parent or guardian has questions regarding our privacy practices, please contact us at
        the address provided below.
      </p>

      <h2>6. Data Retention and Deletion</h2>
      <p>
        Because we do not collect or store any user data on external servers, there is no remote data
        to retain or delete. If you uninstall the App from your device, all locally stored game
        preferences are immediately and permanently removed by your operating system.
      </p>

      <h2>7. Security</h2>
      <p>
        We value your trust in using our App. Since no personal data is collected or transmitted
        across the internet, there is no risk of unauthorized third-party access to your personal
        information through our servers.
      </p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect future app enhancements or legal
        requirements. Any updates will be posted on this page with an updated &ldquo;Last
        Updated&rdquo; date. We encourage you to review this policy periodically.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions, suggestions, or concerns regarding this Privacy Policy or the App,
        please contact us at:
      </p>
      <ul>
        <li>
          <strong>Developer / Support Email:</strong>{' '}
          <a href={`mailto:${m.email}`}>{m.email}</a>
        </li>
        <li>
          <strong>Application:</strong> {m.appName} (<code>{m.packageName}</code>)
        </li>
      </ul>
    </LegalLayout>
  )
}

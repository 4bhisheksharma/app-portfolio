import { useEffect } from 'react'
import { LegalLayout } from '../components/legal/LegalLayout'
import { gitMosaicMeta } from '../data/gitmosaic/constants'

export function GitMosaicPrivacyPage() {
  const m = gitMosaicMeta

  useEffect(() => {
    document.title = 'Privacy Policy - GitMosaic'
  }, [])

  return (
    <LegalLayout
      appName={m.appName}
      title="Privacy Policy"
      subtitle={`Privacy Policy for ${m.appName}`}
      lastUpdated={m.lastUpdated}
    >
      <p className="lead">
        Welcome to GitMosaic (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). We are committed
        to protecting your privacy. This Privacy Policy explains how GitMosaic handles information
        when you use our mobile application.
      </p>

      <h2>1. Overview</h2>
      <p>
        GitMosaic is designed with privacy at its core. We do not require account registration, we
        do not collect personal identifying information (PII), and we do not track or sell your data.
      </p>
      <p>
        The application operates locally on your device to fetch and display public GitHub
        contribution activity on your home screen.
      </p>

      <h2>2. Information We Process</h2>

      <h3>A. Public Information You Provide</h3>
      <p>
        <strong>GitHub Username:</strong> When configuring your widget, you input a public GitHub
        username. This username is used exclusively to fetch public contribution statistics (such as
        contribution counts and dates) from GitHub&apos;s public records.
      </p>

      <h3>B. Information We Do NOT Collect</h3>
      <ul>
        <li>
          We do not collect personal details such as your real name, email address, phone number,
          location, or contacts.
        </li>
        <li>
          We do not request, access, or store your GitHub passwords, Personal Access Tokens (PAT), or
          private repository data.
        </li>
        <li>
          We do not run third-party advertising networks, user tracking SDKs, or invasive analytics
          trackers.
        </li>
      </ul>

      <h2>3. How We Use the Information</h2>
      <p>The public GitHub username you provide is used solely to:</p>
      <ul>
        <li>Retrieve publicly available contribution data to generate your contribution graph.</li>
        <li>Render and refresh the widget snapshot displayed on your device&apos;s home screen.</li>
        <li>Calculate in-app streak statistics and metrics.</li>
      </ul>

      <h2>4. Local Data Storage</h2>
      <p>All app preferences and widget settings are stored strictly locally on your device:</p>
      <ul>
        <li>
          <strong>iOS:</strong> Stored securely within your device&apos;s local container and App Group
          storage (UserDefaults).
        </li>
        <li>
          <strong>Android:</strong> Stored locally within your device&apos;s private app storage
          (SharedPreferences).
        </li>
      </ul>
      <p>This stored data includes:</p>
      <ul>
        <li>Your entered GitHub username.</li>
        <li>Your selected color theme palette.</li>
        <li>Locally rendered widget snapshot images.</li>
      </ul>
      <p>
        This data never leaves your device and is not transmitted to any external server owned by us.
      </p>

      <h2>5. Third-Party Services &amp; Network Requests</h2>
      <p>
        To display your contribution graph, GitMosaic sends standard HTTPS requests to retrieve public
        contribution activity from public endpoints. These requests are governed by:
      </p>
      <ul>
        <li>
          <strong>GitHub Privacy Statement:</strong>{' '}
          <a
            href={m.githubPrivacyStatement}
            target="_blank"
            rel="noopener noreferrer"
          >
            {m.githubPrivacyStatement}
          </a>
        </li>
      </ul>
      <p>
        We do not share any data with third parties for marketing, advertising, or profiling purposes.
      </p>

      <h2>6. Data Retention and Deletion</h2>
      <p>Because all data is stored locally on your device, you have complete control over it:</p>
      <ul>
        <li>You can change or clear your username directly inside the app settings at any time.</li>
        <li>
          Uninstalling the GitMosaic app immediately removes all locally saved data, preferences, and
          widget images from your device.
        </li>
      </ul>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        GitMosaic does not knowingly collect or solicit any personal information from children under
        the age of 13.
      </p>

      <h2>8. Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. Any changes will be posted on this page with
        an updated revision date.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions or suggestions regarding this Privacy Policy, please contact us at:
      </p>
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          <a href={`mailto:${m.email}`}>{m.email}</a>
        </li>
        <li>
          <strong>GitHub Repository:</strong>{' '}
          <a href={m.repository} target="_blank" rel="noopener noreferrer">
            {m.repository}
          </a>
        </li>
      </ul>
    </LegalLayout>
  )
}

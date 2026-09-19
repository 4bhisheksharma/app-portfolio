import { Route, Routes } from 'react-router-dom'
import { FindTheImposterPrivacyPage } from './pages/FindTheImposterPrivacyPage'
import { GitMosaicPrivacyPage } from './pages/GitMosaicPrivacyPage'
import { HomePage } from './pages/HomePage'
import { PulseAccountDeletionPage } from './pages/PulseAccountDeletionPage'
import { PulsePrivacyPage } from './pages/PulsePrivacyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pulse/privacy" element={<PulsePrivacyPage />} />
      <Route path="/pulse/account-deletion" element={<PulseAccountDeletionPage />} />
      <Route path="/gitmosaic/privacy" element={<GitMosaicPrivacyPage />} />
      <Route path="/find-the-imposter/privacy" element={<FindTheImposterPrivacyPage />} />
      <Route path="/findtheimposter/privacy" element={<FindTheImposterPrivacyPage />} />
      <Route path="/imposter/privacy" element={<FindTheImposterPrivacyPage />} />
    </Routes>
  )
}

export default App

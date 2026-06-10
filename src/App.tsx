import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { PulseAccountDeletionPage } from './pages/PulseAccountDeletionPage'
import { PulsePrivacyPage } from './pages/PulsePrivacyPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pulse/privacy" element={<PulsePrivacyPage />} />
      <Route path="/pulse/account-deletion" element={<PulseAccountDeletionPage />} />
    </Routes>
  )
}

export default App

import { HashRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import AppPage from './pages/AppPage'
import ResourcePage from './pages/ResourcePage'
import ResourceDownloadsPage from './pages/ResourceDownloadsPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/app/news" element={<NewsPage />} />
        <Route path="/app/resource/resources-downloads/" element={<ResourceDownloadsPage />} />
        <Route path="/app/resource/*" element={<ResourcePage />} />
        <Route path="/app/contact/" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}   
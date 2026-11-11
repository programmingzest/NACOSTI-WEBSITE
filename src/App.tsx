import { HashRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import AppPage from './pages/AppPage'
import ResourcePage from './pages/ResourcePage'
import ContactPage from './pages/ContactPage'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/app/resource/*" element={<ResourcePage />} />
        <Route path="/app/contact/" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}   
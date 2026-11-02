import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import AppPage from './pages/AppPage'
import ResourcePage from './pages/ResourcePage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import './App.css' 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/app/news" element={<NewsPage />} />
        <Route path="/app/resource/*" element={<ResourcePage />} />
        <Route path="/app/contact/" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}   
import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import AppPage from './pages/AppPage'
import ResourcePage from './pages/ResourcePage'
import './App.css' 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/app/resource/*" element={<ResourcePage />} />
      </Routes>
    </BrowserRouter>
  )
}   
import { HashRouter, Routes, Route, useLocation } from 'react-router'
import { useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import AppPage from './pages/AppPage'
import ResourcePage from './pages/ResourcePage'
import ResourceDownloadsPage from './pages/ResourceDownloadsPage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import './App.css'
import { initializeAnalytics, trackEvent } from './lib/analytics'
import { FloatingActions } from './components/FloatingActions'
import { NacostiChatbot } from './components/NacostiChatbot'

function AnalyticsTracker() {
  const location = useLocation()
  useEffect(() => {
    initializeAnalytics()
    trackEvent('page-view', `${location.pathname}${location.search}`)
  }, [location])
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-analytics]') : null
      if (target?.dataset.analytics) trackEvent(target.dataset.analytics, target.dataset.analytics)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}

function NotFoundPage() {
  return (
    <main id="main" className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Page not found</p>
        <h1 className="mt-3 text-4xl font-extrabold">This page is unavailable</h1>
        <p className="mt-4 text-muted-foreground">The requested NACOSTI page could not be found. Use the site navigation to continue.</p>
      </div>
    </main>
  )
}

function SkipToContent() {
  return (
    <a
      href="#main"
      onClick={(event) => {
        event.preventDefault()
        const main = document.querySelector<HTMLElement>('main')
        if (!main) return
        main.setAttribute('tabindex', '-1')
        main.focus()
        main.scrollIntoView({ block: 'start' })
      }}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-3 focus:font-bold focus:text-accent-foreground"
    >
      Skip to content
    </a>
  )
}

export default function App() {
  return (
    <HashRouter>
      <SkipToContent />
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/app/news" element={<NewsPage />} />
        <Route path="/app/resource/resources-downloads/" element={<ResourceDownloadsPage />} />
        <Route path="/app/resource/*" element={<ResourcePage />} />
        <Route path="/app/contact/" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <FloatingActions />
      <NacostiChatbot />
    </HashRouter>
  )
}   
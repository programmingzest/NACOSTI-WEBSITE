import { useEffect } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { HeroCarousel } from '@/components/HeroCarousel'
import { EServices } from '@/components/EServices'
import { MandateTabs } from '@/components/MandateTabs'
import { StatsBand } from '@/components/StatsBand'
import { LicenseProcess } from '@/components/LicenseProcess'
import { StiPriorities } from '@/components/StiPriorities'
import { InformationCentre } from '@/components/InformationCentre'
import { LatestNews } from '@/components/LatestNews'
import { PartnersMarquee } from '@/components/PartnersMarquee'
import { SiteFooter } from '@/components/SiteFooter'
import { FloatingActions } from '@/components/FloatingActions'
import { LocationGuide } from '@/components/LocationGuide'

export default function AppPage() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
        return
      }
    }
    document.getElementById('top')?.focus()
  }, [])

  return (
    <div id="top" tabIndex={-1}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <HeroCarousel />
        <EServices />
        <MandateTabs />
        <StatsBand />
        <div className="h-24 md:h-32" aria-hidden="true" />
        <LicenseProcess />
        <StiPriorities />
        <InformationCentre />
        <LocationGuide />
        <LatestNews />
        <PartnersMarquee />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}   
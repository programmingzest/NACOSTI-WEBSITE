import { useEffect } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { HeroCarousel } from '@/components/HeroCarousel'
import { EServices } from '@/components/EServices'
import { MandateTabs } from '@/components/MandateTabs'
import { StatsBand } from '@/components/StatsBand'
import { StiPriorities } from '@/components/StiPriorities'
import { InformationCentre } from '@/components/InformationCentre'
import { PartnersMarquee } from '@/components/PartnersMarquee'
import { SiteFooter } from '@/components/SiteFooter'
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
        <StiPriorities />
        <InformationCentre />
        <PartnersMarquee />
        <LocationGuide />
      </main>
      <SiteFooter />
    </div>
  )
}   
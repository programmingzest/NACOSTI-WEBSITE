import siteContent from '@/content/site.json'
import navigationContent from '@/content/navigation.json'

const BASE = '/app/resource'

export const contact = siteContent.contact
export const socials = siteContent.socials

export type NavLink = { label: string; href: string; description?: string }
export type NavGroup = { title?: string; links: NavLink[] }
export type NavItem = { label: string; href?: string; groups?: NavGroup[] }

export const navigation = navigationContent as NavItem[]

export type EService = {
  title: string
  description: string
  cta: string
  href: string
  icon: 'microscope' | 'chart' | 'id'
}

export const heroSlides = siteContent.heroSlides
export const eServices = siteContent.eServices as EService[]
export const mandates = siteContent.mandates
export const priorities = siteContent.priorities

export type InformationResource = {
  label: string
  href: string
  type: 'Legislation' | 'PDF' | 'Directory'
}

export const informationCentre = siteContent.informationCentre as InformationResource[]
export const conferences = siteContent.conferences
export const partners = siteContent.partners
export const relatedSites = siteContent.relatedSites
export const icgebLinks = siteContent.icgebLinks

export const serviceChargesHref = `${BASE}/research-licensing-fees/`
export const prioritiesPdf = `${BASE}/nacosti/Docs/2024/National%20STI%20Priorities.pdf`
export const newsHref = `${BASE}/category/latest/`

export const eResources = [
  { label: 'Research Licensing Portal', href: `${BASE}/research-licensing` },
  { label: 'STI-PC MDAs Portal', href: `${BASE}/pc-mdas` },
  { label: 'Staff Mail', href: `${BASE}/staff-mail` },
  { label: 'E-Procurement', href: `${BASE}/e-procurement` },
]

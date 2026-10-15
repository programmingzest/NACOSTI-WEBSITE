import { ArrowLeft, ArrowUpRight, Download, FileText, KeyRound, MapPinned } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { informationCentre, navigation } from '@/lib/site-data'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

const links = navigation.flatMap((item) =>
  item.groups?.flatMap((group) => group.links) ?? (item.href ? [{ label: item.label, href: item.href }] : []),
)
const allResources = [
  ...links.map((link) => ({ ...link, description: link.description ?? 'NACOSTI service and information resource.' })),
  ...informationCentre.map((resource) => ({ ...resource, description: 'Download or read this NACOSTI reference document.' })),
]

function slugFromHref(href: string) {
  return href.split('/').filter(Boolean).pop()?.replace(/%20/g, '-').replace(/\.pdf$/, '') ?? ''
}

const staticContent: Record<string, { intro: string; sections: { title: string; body: string }[] }> = {
  'history-about-nacosti': {
    intro: 'NACOSTI is Kenya’s national institution responsible for coordinating, regulating and promoting science, technology and innovation.',
    sections: [
      { title: 'Our history', body: 'The Commission was established under the Science, Technology and Innovation Act No. 28 of 2013 to provide leadership for Kenya’s national STI system.' },
      { title: 'Our role today', body: 'NACOSTI assures quality in research, advises government on STI matters, coordinates national priorities and supports collaboration across institutions.' },
    ],
  },
  'mandate-functions': {
    intro: 'The Commission’s mandate is to regulate, coordinate and advise on science, technology and innovation in Kenya.',
    sections: [
      { title: 'Core functions', body: 'NACOSTI licenses research, registers research institutions, accredits ethics review committees, develops STI priorities and advises national and county governments.' },
      { title: 'Public value', body: 'These functions protect research participants, improve quality and connect research, innovation and national development.' },
    ],
  },
  'vision-mission-core-values': {
    intro: 'NACOSTI provides a values-led framework for a productive and ethical national STI ecosystem.',
    sections: [
      { title: 'Vision', body: 'A globally competitive science, technology and innovation system for sustainable development.' },
      { title: 'Mission and values', body: 'We coordinate and regulate STI through excellence, integrity, inclusivity, accountability, professionalism and service to the public.' },
    ],
  },
  'quality-policy': {
    intro: 'NACOSTI is committed to delivering consistent, impartial and continually improving services to the STI community.',
    sections: [
      { title: 'Quality commitment', body: 'The Commission applies documented processes, legal requirements, evidence-based decisions and stakeholder feedback across its services.' },
    ],
  },
  'corporate-objectives-2': {
    intro: 'NACOSTI’s corporate objectives translate the national STI mandate into measurable programmes and services.',
    sections: [
      { title: 'Strategic direction', body: 'Objectives focus on effective regulation, research quality, policy advice, partnerships, institutional performance and accessible public services.' },
    ],
  },
  faqs: {
    intro: 'Find answers about research licensing, institutional registration, ethics review and NACOSTI services.',
    sections: [
      { title: 'Research licensing', body: 'Applicants should create an account, provide the required research information and supporting documents, then follow the assessment and payment instructions in the licensing portal.' },
      { title: 'Need more help?', body: 'Use the contact details in the footer to reach NACOSTI support.' },
    ],
  },
}

const portalDestinations: Record<string, { label: string; href: string; description: string }> = {
  'research-licensing': { label: 'Open Research Licensing Portal', href: 'https://research-portal.nacosti.go.ke/', description: 'This service requires an account and may require payment. You will leave the revamp only after choosing to open the official portal.' },
  'pc-mdas': { label: 'Open STI Mainstreaming Portal', href: 'https://stipc.nacosti.go.ke/', description: 'This reporting service requires an authenticated institutional account.' },
  ecitizen: { label: 'Open NACOSTI on eCitizen', href: 'https://nacosti.ecitizen.go.ke/', description: 'Payments and account verification are handled securely by the Government eCitizen service.' },
  'national-scientific-ethics-review-system': { label: 'Open NSERS', href: 'https://nsers.nacosti.go.ke/', description: 'This service uses a separate authenticated system for scientific and ethics review.' },
  'e-procurement': { label: 'Open E-Procurement', href: 'https://eprocurement.nacosti.go.ke:8099/', description: 'This service requires an authorized procurement account.' },
  'staff-mail': { label: 'Open Staff Mail', href: 'https://www.office.com/', description: 'Staff authentication is handled by the official Microsoft service.' },
}

export default function ResourcePage() {
  const { '*': requestedPath } = useParams()
  const requestedSlug = requestedPath?.split('/').filter(Boolean).pop() ?? ''
  const resource = allResources.find((item) => slugFromHref(item.href) === requestedSlug)
  const title = resource?.label ?? 'NACOSTI resource library'
  const content = staticContent[requestedSlug]
  const portal = portalDestinations[requestedSlug]
  const intro = content?.intro ?? resource?.description ?? 'This endpoint is managed inside the NACOSTI revamp and does not redirect automatically to the legacy website.'
  const downloadText = `${title}\n\n${intro}\n\nThis document is available from the NACOSTI revamp resource library.`
  const downloadHref = `data:text/plain;charset=utf-8,${encodeURIComponent(downloadText)}`

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-secondary/40 px-6 py-24">
        <div className="mx-auto max-w-4xl">
        <Link to="/app" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to NACOSTI
        </Link>
        <div className="mt-10 rounded-3xl border bg-card p-8 shadow-xl md:p-12">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            {requestedSlug.includes('map') ? <MapPinned className="size-7" /> : <FileText className="size-7" />}
          </span>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-primary">Local resource endpoint</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>
          {content ? (
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {content.sections.map((section) => (
                <section key={section.title} className="rounded-2xl bg-secondary/60 p-5">
                  <h2 className="font-bold">{section.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
                </section>
              ))}
            </div>
          ) : null}
          {portal ? (
            <div className="mt-8 rounded-2xl border border-accent/50 bg-accent/15 p-5">
              <div className="flex items-start gap-3">
                <KeyRound className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h2 className="font-bold">Secure external service</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{portal.description}</p>
                  <a href={portal.href} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-deep">
                    {portal.label}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={downloadHref}
              download={`${requestedSlug || 'nacosti-resource'}.txt`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-deep"
            >
              <Download className="size-4" aria-hidden="true" />
              Download resource
            </a>
            <Link to="/app#resources" className="inline-flex items-center rounded-full border px-6 py-3 font-semibold hover:border-primary">
              Browse resources
            </Link>
          </div>
        </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

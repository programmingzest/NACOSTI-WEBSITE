import { ArrowLeft, ArrowUpRight, KeyRound } from 'lucide-react'
import { Link, useParams } from 'react-router'
import { informationCentre, navigation } from '@/lib/site-data'
import resourcePages from '@/content/resource-pages.json'
import { additionalResourcePages } from '@/content/additional-resource-pages'
import { requestedResourcePages, type RequestedResourcePage } from '@/content/requested-resource-pages'
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
  try {
    const decoded = decodeURIComponent(href)
    const lastPart = decoded.split('/').filter(Boolean).pop() ?? ''
    return lastPart.replace(/\.pdf$/i, '').trim().replace(/\s+/g, '-')
  } catch {
    const lastPart = href.split('/').filter(Boolean).pop() ?? ''
    return lastPart.replace(/\.pdf$/i, '').trim().replace(/\s+/g, '-')
  }
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
  const requestedSlug = slugFromHref(requestedPath ?? '')
  const resource = allResources.find((item) => slugFromHref(item.href) === requestedSlug)

  const content: RequestedResourcePage | (typeof additionalResourcePages)[number] | (typeof resourcePages.pages)[number] | undefined =
    requestedResourcePages.find((page) => page.slug === requestedSlug)
    ?? additionalResourcePages.find((page) => page.slug === requestedSlug)
    ?? resourcePages.pages.find((page) => page.slug === requestedSlug)
  const title = (content as { title?: string } | undefined)?.title ?? resource?.label ?? 'NACOSTI resource library'

  const portal = portalDestinations[requestedSlug]
  const intro = content?.intro ?? resource?.description ?? 'This endpoint is managed inside the NACOSTI revamp and does not redirect automatically to the legacy website.'
  const sourceHref = resource?.href ?? ''
  const downloadHref = sourceHref.startsWith('/documents/') ? sourceHref : undefined
  const images = content && 'images' in content ? content.images : undefined

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
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>
          {images ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {images.map((image) => (
                <figure key={image.filename} className="overflow-hidden rounded-2xl border bg-secondary/40">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="aspect-[4/3] w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  <figcaption className="p-4 text-sm text-muted-foreground">
                    Add <code className="font-semibold text-foreground">{image.filename}</code> to <code className="font-semibold text-foreground">public/images/</code> to display this image.
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : null}
          {content ? (
            <div className="mt-8 flex flex-col gap-6">
              {content.sections.map((section) => {
                const sectionLink = 'link' in section && typeof section.link === 'string' ? section.link : undefined
                return (
                  <section key={section.title} className="rounded-2xl bg-secondary/60 p-5 md:p-7">
                    <h2 className="text-xl font-bold">{section.title}</h2>
                    <p className="mt-3 whitespace-pre-line text-sm leading-7 text-muted-foreground">{section.body}</p>
                    {'table' in section && section.table ? (
                      <div className="mt-5 overflow-x-auto rounded-xl border bg-card">
                        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                          <thead className="bg-primary text-primary-foreground">
                            <tr>{section.table.headers.map((header) => <th key={header} className="px-4 py-3 font-semibold">{header}</th>)}</tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr key={row[0]} className="border-t even:bg-secondary/40">
                                {row.map((cell, index) => <td key={`${row[0]}-${index}`} className="px-4 py-3 whitespace-nowrap">{cell}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                    {sectionLink ? (
                      <a href={sectionLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-deep">
                        Apply for a Research License
                      </a>
                    ) : null}
                  </section>
                )
              })}
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
          {downloadHref ? (
            <div className="mt-8">
              <a href={downloadHref} download className="inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-deep">
                Download resource
              </a>
            </div>
          ) : null}
        </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

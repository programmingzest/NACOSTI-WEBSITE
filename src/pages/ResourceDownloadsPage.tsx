import { useMemo, useState } from 'react'
import { ArrowDownToLine, ArrowLeft, ArrowUpRight, BookOpen, FileText, Gavel } from 'lucide-react'
import { Link } from 'react-router'
import { informationCentre, prioritiesPdf } from '@/lib/site-data'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

type ResourceFilter = 'All resources' | 'Downloadable files' | 'Information pages'

const filters: ResourceFilter[] = ['All resources', 'Downloadable files', 'Information pages']

const resourceIcons = {
  Legislation: Gavel,
  PDF: FileText,
  Directory: BookOpen,
}

function isDownloadable(resource: (typeof informationCentre)[number]) {
  return resource.type === 'PDF' && resource.available === true && resource.href.startsWith('/documents/')
}

export default function ResourceDownloadsPage() {
  const [filter, setFilter] = useState<ResourceFilter>('All resources')
  
  const visibleResources = useMemo(
    () => informationCentre.filter((resource) => {
      if (filter === 'Downloadable files') return isDownloadable(resource)
      if (filter === 'Information pages') return !isDownloadable(resource)
      return true
    }),
    [filter],
  )

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-secondary/40 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <Link to="/app" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to NACOSTI
          </Link>

          <section className="mt-8 overflow-hidden rounded-3xl bg-deep px-7 py-10 text-deep-foreground shadow-xl md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Resources</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Resources Downloads</h1>
            <p className="mt-5 max-w-3xl leading-7 text-deep-foreground/75">
              Access official NACOSTI laws, regulations, plans, directories and service information.
              Available documents can be downloaded directly from this page.
            </p>
          
          </section>

          <section aria-labelledby="priorities-heading" className="mt-12">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">National STI Priorities</p>
                <h2 id="priorities-heading" className="mt-2 text-3xl font-extrabold tracking-tight">
                  Twelve priority areas
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                  The priorities guide public investment, research funding and policy development across Kenya.
                </p>
              </div>
              <a
                href={prioritiesPdf}
                download
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-deep"
              >
                <ArrowDownToLine className="size-4" aria-hidden="true" />
                Download priorities document
              </a>
            </div>
            
          </section>

          <section aria-labelledby="documents-heading" className="mt-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Information Centre</p>
              <h2 id="documents-heading" className="mt-2 text-3xl font-extrabold tracking-tight">
                Documents & information
              </h2>
              <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                Download available documents or open the related NACOSTI information pages.
              </p>
            </div>

          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter resources">
            {filters.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
                className={filter === option
                  ? 'rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground'
                  : 'rounded-full border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground hover:border-primary hover:text-primary'}
              >
                {option}
              </button>
            ))}
          </div>

          <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {visibleResources.map((resource) => {
              const Icon = resourceIcons[resource.type]
              const downloadable = isDownloadable(resource)
              const card = (
                <>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-bold text-foreground">{resource.label}</span>
                      <span className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground">
                        {downloadable ? 'PDF' : resource.type}
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                      {resource.description ?? 'NACOSTI information and reference resource.'}
                    </span>
                  </span>
                  {downloadable
                    ? <ArrowDownToLine className="size-5 shrink-0 text-primary" aria-hidden="true" />
                    : <ArrowUpRight className="size-5 shrink-0 text-primary" aria-hidden="true" />}
                </>
              )

              return (
                <li key={resource.href}>
                  {downloadable ? (
                    <a
                      href={resource.href}
                      download
                      className="flex h-full items-start gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary/40"
                    >
                      {card}
                    </a>
                  ) : resource.href.startsWith('/app') ? (
                    <Link
                      to={resource.href}
                      className="flex h-full items-start gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary/40"
                    >
                      {card}
                    </Link>
                  ) : (
                    <a
                      href={resource.href}
                      className="flex h-full items-start gap-4 rounded-2xl border bg-card p-5 transition-colors hover:border-primary/50 hover:bg-secondary/40"
                    >
                      {card}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

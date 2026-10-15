import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { mandates } from '@/lib/site-data'
import { Reveal, SectionHeading } from '@/components/Reveal'
import { cn } from '@/lib/utils'

export function MandateTabs() {
  const [active, setActive] = useState(0)
  const current = mandates[active]

  return (
    <section id="mandate" aria-labelledby="mandate-heading" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div id="mandate-heading">
            <SectionHeading
              eyebrow="Our Key Mandate"
              title="Shaping Kenya's science, technology & innovation ecosystem"
              description="Established under the Science, Technology and Innovation Act No. 28 of 2013, NACOSTI assures quality in the STI sector and advises Government on related matters."
            />
          </div>
          <a
            href="/app/resource/mandate-functions"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Mandate & functions
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div role="tablist" aria-label="NACOSTI mandates" aria-orientation="vertical" className="flex flex-col gap-3">
            {mandates.map((mandate, i) => (
              <button
                key={mandate.key}
                id={`tab-${mandate.key}`}
                role="tab"
                type="button"
                aria-selected={active === i}
                aria-controls={`panel-${mandate.key}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault()
                    setActive((i + 1) % mandates.length)
                  }
                  if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault()
                    setActive((i - 1 + mandates.length) % mandates.length)
                  }
                }}
                className={cn(
                  'group relative flex items-center gap-5 overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300',
                  active === i
                    ? 'border-primary bg-primary text-primary-foreground shadow-xl shadow-primary/20'
                    : 'bg-card hover:border-primary/40 hover:bg-secondary',
                )}
              >
                <span
                  className={cn(
                    'font-display text-3xl font-extrabold tabular-nums transition-colors',
                    active === i ? 'text-accent' : 'text-primary/25 group-hover:text-primary/50',
                  )}
                >
                  0{i + 1}
                </span>
                <span className="flex-1">
                  <span className="block font-display text-xl font-bold uppercase tracking-wide">{mandate.title}</span>
                  <span
                    className={cn(
                      'mt-1 line-clamp-1 block text-sm',
                      active === i ? 'text-primary-foreground/75' : 'text-muted-foreground',
                    )}
                  >
                    {mandate.points[0]}
                  </span>
                </span>
                <ArrowUpRight
                  className={cn(
                    'size-5 transition-all',
                    active === i ? 'rotate-45 text-accent' : 'text-muted-foreground',
                  )}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          <div
            id={`panel-${current.key}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.key}`}
            className="relative overflow-hidden rounded-3xl bg-deep"
          >
            <div key={current.key} className="grid h-full animate-in fade-in duration-500 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="relative min-h-64 md:min-h-full lg:min-h-72 xl:min-h-full">
                <img
                  src={current.image}
                  alt={`NACOSTI ${current.title} mandate in action`}
                  className="absolute inset-0 h-full w-full object-cover animate-in zoom-in-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/70 to-transparent" aria-hidden="true" />
                <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  {current.title}
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-10">
                <h3 className="text-2xl font-bold text-deep-foreground animate-in slide-in-from-bottom-3 duration-500">
                  We {current.title.toLowerCase()}
                </h3>
                <p className="mt-4 leading-relaxed text-deep-foreground/75">{current.summary}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {current.points.map((point, i) => (
                    <li
                      key={point}
                      style={{ animationDelay: `${i * 100}ms` }}
                      className="flex items-start gap-3 text-sm text-deep-foreground animate-in fade-in slide-in-from-left-2 fill-mode-both duration-500"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                        <Check className="size-3" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}   
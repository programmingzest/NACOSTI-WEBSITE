import { ArrowUpRight, Sparkles } from 'lucide-react'
import { conferences } from '@/lib/site-data'
import { Reveal, SectionHeading } from '@/components/Reveal'
import { cn } from '@/lib/utils'

export function ConferenceTimeline() {
  const latest = conferences.length - 1

  return (
    <section id="conference" aria-labelledby="conference-heading" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div id="conference-heading">
            <SectionHeading
              align="center"
              eyebrow="MS-CORSTI"
              title="Multi-Sectoral Conference on Research, Science, Technology & Innovation"
              description="Our flagship convening that brings together government, academia, industry and development partners to chart the future of STI in Kenya."
            />
          </div>
        </Reveal>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-4">
          {conferences.map((conf, i) => (
            <Reveal as="li" key={conf.year} delay={i * 100}>
              <a
                href={conf.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'group relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5',
                  i === latest
                    ? 'border-primary bg-primary text-primary-foreground shadow-2xl shadow-primary/30'
                    : 'bg-card hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10',
                )}
              >
                {i === latest ? (
                  <span className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    <Sparkles className="size-3" aria-hidden="true" />
                    Latest
                  </span>
                ) : null}
                <span
                  className={cn(
                    'font-display text-6xl font-extrabold tracking-tight',
                    i === latest ? 'text-accent' : 'text-primary/20 transition-colors group-hover:text-primary',
                  )}
                >
                  {conf.year}
                </span>
                <span className="mt-6 text-sm font-semibold uppercase tracking-wider opacity-70">
                  {conf.edition} Edition
                </span>
                <span className="mt-1 text-lg font-bold">{conf.label}</span>
                <span
                  className={cn(
                    'mt-6 inline-flex items-center gap-2 text-sm font-semibold',
                    i === latest ? 'text-accent' : 'text-primary',
                  )}
                >
                  Visit
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}   
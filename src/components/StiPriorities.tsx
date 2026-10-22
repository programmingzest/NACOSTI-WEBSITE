import {
  Cpu, FlaskConical, GraduationCap, HeartPulse, Shield, Sprout,
  Siren, Building2, Globe2, Waves, Scale
} from 'lucide-react'
import { priorities, prioritiesPdf } from '@/lib/site-data'
import { Reveal, SectionHeading } from '@/components/Reveal'
import { ArrowUpRight } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  flask: FlaskConical,
  graduation: GraduationCap,
  scale: Scale,
  shield: Shield,
  heart: HeartPulse,
  sprout: Sprout,
  cpu: Cpu,
  waves: Waves,
  siren: Siren,
  building: Building2,
  globe: Globe2,
  city: Building2,
}

export function StiPriorities() {
  return (
    <section id="priorities" aria-labelledby="priorities-heading" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div id="priorities-heading">
            <SectionHeading
              eyebrow="National STI Priorities"
              title="Twelve priority areas driving Kenya's transformation"
              description="The National STI Priorities guide public investment, research funding and policy development across the country."
            />
          </div>
          <a
            href={prioritiesPdf}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary"
          >
            Download full document
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {priorities.map((priority, i) => {
            const Icon = iconMap[priority.icon] ?? FlaskConical
            return (
              <Reveal key={priority.title} delay={i * 60}>
                <div className="group flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-bold leading-snug">{priority.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{priority.detail}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}   
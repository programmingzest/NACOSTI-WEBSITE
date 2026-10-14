import { ArrowUpRight, ChartNoAxesCombined, IdCard, Microscope } from 'lucide-react'
import { eServices } from '@/lib/site-data'
import { Reveal } from '@/components/Reveal'

const icons = {
  microscope: Microscope,
  chart: ChartNoAxesCombined,
  id: IdCard,
}

export function EServices() {
  return (
    <section id="e-services" aria-labelledby="e-services-title" className="relative z-10 -mt-20 px-6">
      <h2 id="e-services-title" className="sr-only">
        NACOSTI E-Services
      </h2>
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {eServices.map((service, i) => {
          const Icon = icons[service.icon]
          const featured = i === 0
          return (
            <Reveal key={service.title} delay={i * 100}>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  featured
                    ? 'group flex h-full flex-col rounded-2xl bg-primary p-7 text-primary-foreground shadow-2xl shadow-primary/30 transition-all duration-300 hover:-translate-y-1.5'
                    : 'group flex h-full flex-col rounded-2xl border bg-card p-7 shadow-xl shadow-deep/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10'
                }
              >
                <div className="flex items-start justify-between">
                  <span
                    className={
                      featured
                        ? 'flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground'
                        : 'flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground'
                    }
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span
                    className={
                      featured
                        ? 'text-xs font-semibold uppercase tracking-wider text-accent'
                        : 'text-xs font-semibold uppercase tracking-wider text-muted-foreground'
                    }
                  >
                    E-Service 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug">{service.title}</h3>
                <p
                  className={
                    featured
                      ? 'mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/80'
                      : 'mt-3 flex-1 text-sm leading-relaxed text-muted-foreground'
                  }
                >
                  {service.description}
                </p>
                <span
                  className={
                    featured
                      ? 'mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent'
                      : 'mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary'
                  }
                >
                  {service.cta}
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </a>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}   
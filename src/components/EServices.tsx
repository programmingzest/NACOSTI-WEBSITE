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
    <section id="e-services" aria-labelledby="e-services-title" className="relative z-10 px-6 py-16 md:py-20">
      <h2 id="e-services-title" className="sr-only">
        NACOSTI E-Services
      </h2>
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {eServices.map((service, i) => {
          const Icon = icons[service.icon]
          return (
            <Reveal key={service.title} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border bg-card p-7 shadow-xl shadow-deep/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex items-start justify-between">
                  <span
                    className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    E-Service 0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-snug">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a href={service.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {service.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}   
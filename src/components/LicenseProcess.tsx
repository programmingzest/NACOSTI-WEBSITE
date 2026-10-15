import { ArrowUpRight, BadgeCheck, CreditCard, FileUp, UserPlus } from 'lucide-react'
import { serviceChargesHref } from '@/lib/site-data'
import { Reveal, SectionHeading } from '@/components/Reveal'

const steps = [
  {
    icon: UserPlus,
    title: 'Create your account',
    description: 'Register on the Research Information Management System (RIMS) portal.',
  },
  {
    icon: FileUp,
    title: 'Submit your application',
    description: 'Fill in research details and upload your proposal and supporting documents.',
  },
  {
    icon: CreditCard,
    title: 'Pay the service charge',
    description: 'Settle the applicable research licensing fee securely online.',
  },
  {
    icon: BadgeCheck,
    title: 'Receive your license',
    description: 'Once reviewed and approved, download your research license from the portal.',
  },
]

export function LicenseProcess() {
  return (
    <section id="licensing" aria-labelledby="licensing-heading" className="relative overflow-hidden bg-deep px-6 py-24 md:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-0 size-[32rem] rounded-full bg-primary/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div id="licensing-heading">
            <SectionHeading
              tone="dark"
              eyebrow="Research Licensing"
              title="Get licensed to conduct research in Kenya"
              description="Everyone intending to undertake research in the country requires a Research License. The entire process is online — simple, transparent and fast."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/app/resource/research-licensing"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Start application
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={serviceChargesHref}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-deep-foreground transition-colors hover:bg-white/10"
            >
              View service charges
            </a>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 120} className="relative">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <span className="relative flex size-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground ring-8 ring-deep transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                      <step.icon className="size-7" aria-hidden="true" />
                    </span>
                    <span className="font-display text-5xl font-extrabold text-white/10 transition-colors group-hover:text-accent/40">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-deep-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-deep-foreground/70">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}   
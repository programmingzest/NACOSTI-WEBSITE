import { ArrowUpRight, BookOpen, FileText, Gavel, Headphones, Receipt } from 'lucide-react'
import { informationCentre, serviceChargesHref, serviceCharterAudio } from '@/lib/site-data'
import { Reveal, SectionHeading } from '@/components/Reveal'

const typeIcon = {
  Legislation: Gavel,
  PDF: FileText,
  Directory: BookOpen,
}

export function InformationCentre() {
  return (
    <section id="information-centre" aria-labelledby="info-heading" className="px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <Reveal>
            <div id="info-heading">
              <SectionHeading
                eyebrow="Information Centre"
                title="Policies, regulations & key documents"
                description="Access the legal framework, registers and strategic documents that govern Kenya's STI sector."
              />
            </div>
          </Reveal>
          <ul className="mt-10 divide-y rounded-2xl border bg-card">
            {informationCentre.map((doc, i) => {
              const Icon = typeIcon[doc.type]
              return (
                <Reveal as="li" key={doc.label} delay={i * 50}>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-secondary/60"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1 font-medium">{doc.label}</span>
                    <span className="hidden rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground sm:inline">
                      {doc.type}
                    </span>
                    <ArrowUpRight
                      className="size-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              )
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-6 lg:pt-36">
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl bg-accent p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/30 blur-2xl" aria-hidden="true" />
              <Receipt className="size-10 text-accent-foreground" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-extrabold text-accent-foreground">Service Charges for Research Licensing</h3>
              <p className="mt-3 text-sm leading-relaxed text-accent-foreground/75">
                Review the current fee schedule for local and foreign researchers before you apply.
              </p>
              <a
                href={serviceChargesHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-deep px-6 py-3 text-sm font-semibold text-deep-foreground transition-transform hover:-translate-y-0.5"
              >
                View charges
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-3xl border bg-card p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Headphones className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold">Service Charter Audio</h3>
                  <p className="text-xs text-muted-foreground">Listen in Kiswahili</p>
                </div>
              </div>
              <audio controls preload="none" className="mt-5 w-full" aria-label="NACOSTI Service Charter audio in Kiswahili">
                <source src={serviceCharterAudio} type="audio/mpeg" />
              </audio>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}   
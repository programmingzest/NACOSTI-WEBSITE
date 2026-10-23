import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { contact, navigation, relatedSites } from '@/lib/site-data'
import { SocialIcons } from '@/components/SocialIcons'

const services = navigation.find((n) => n.label === 'Services')?.groups?.[0].links.slice(0, 5) ?? []
const about = navigation.find((n) => n.label === 'About Us')?.groups?.[0].links.slice(0, 5) ?? []
const currentYear = new Date().getFullYear()

function FooterList({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider text-accent">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-1 text-sm text-deep-foreground/70 transition-colors hover:text-deep-foreground"
            >
              {link.label}
              <ArrowUpRight
                className="mt-0.5 size-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-deep text-deep-foreground">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20">
        <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-primary p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Have a question about research in Kenya?
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              Our team is ready to assist with licensing, accreditation and STI enquiries.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="size-4" aria-hidden="true" />
              Email us
            </a>
            <a
              href="/app/resource/faqs"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
            >
              Read FAQs
            </a>
          </div>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white p-3">
              <img
                src="/nacosti-logo.jpg"
                alt="NACOSTI - National Commission for Science, Technology and Innovation"
                className="h-10 w-auto"
              />
            </div>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-deep-foreground/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {contact.address}, Nairobi, Kenya
              </li>
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-deep-foreground">
                  <Phone className="size-4 text-accent" aria-hidden="true" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-deep-foreground">
                  <Mail className="size-4 text-accent" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
            </ul>
            <SocialIcons
              className="mt-6"
              itemClassName="size-9 bg-white/10 text-deep-foreground hover:bg-accent hover:text-accent-foreground"
            />
          </div>
          <FooterList title="About" links={about} />
          <FooterList title="Services" links={services} />
          <FooterList title="Related websites" links={relatedSites} />
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs text-deep-foreground/60 md:flex-row">
          <p>
            &copy; {currentYear} National Commission for Science, Technology and Innovation. All rights
            reserved.
          </p>
         
        </div>
      </div>
    </footer>
  )
}   
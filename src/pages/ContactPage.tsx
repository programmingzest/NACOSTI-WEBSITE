import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-secondary/40 px-6 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact NACOSTI</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">Get in touch with us</h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Have a question or need assistance? Contact the National Commission for Science, Technology and Innovation.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <section className="rounded-3xl bg-deep p-8 text-deep-foreground md:p-10" aria-labelledby="contact-details-heading">
              <h2 id="contact-details-heading" className="text-2xl font-bold">Contact details</h2>
              <div className="mt-8 space-y-7 text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Physical and postal address</h3>
                    <p className="mt-1 leading-relaxed text-deep-foreground/75">
                      Off Waiyaki Way, Upper Kabete<br />
                      P. O. Box 30623, 00100 Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Telephone</h3>
                    <div className="mt-1 flex flex-col gap-1 text-deep-foreground/75">
                      <a href="tel:+254713788787" className="hover:text-deep-foreground">0713 788 787</a>
                      <a href="tel:+254735404245" className="hover:text-deep-foreground">0735 404 245</a>
                      <a href="tel:+254208001077" className="hover:text-deep-foreground">020-8001077</a>
                      <a href="tel:+254204007000" className="hover:text-deep-foreground">0204007000</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <div className="mt-1 flex flex-col gap-1 text-deep-foreground/75">
                      <a href="mailto:customercare@nacosti.go.ke" className="hover:text-deep-foreground">customercare@nacosti.go.ke</a>
                      <a href="mailto:info@nacosti.go.ke" className="hover:text-deep-foreground">info@nacosti.go.ke</a>
                      <a href="mailto:complaints@nacosti.go.ke" className="hover:text-deep-foreground">complaints@nacosti.go.ke</a>
                    </div>
                  </div>
                </div>
                <p className="border-t border-white/15 pt-5 text-sm leading-relaxed text-deep-foreground/75">
                  <strong className="text-deep-foreground">NOTE:</strong> If you have any complaints regarding our services, you may contact us through{' '}
                  <a href="mailto:complaints@nacosti.go.ke" className="font-semibold text-deep-foreground underline underline-offset-2">
                    complaints@nacosti.go.ke
                  </a>
                </p>
              </div>
            </section>

            <section className="rounded-3xl border bg-card p-8 shadow-sm md:p-10" aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading" className="text-2xl font-bold">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">Complete the form below and our team will get back to you.</p>
              {submitted ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-secondary p-5 text-sm text-primary" role="status">
                  Thank you for contacting NACOSTI. Your message has been received in this demo.
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-semibold">
                      Name
                      <input name="name" required className="mt-2 w-full rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                    </label>
                    <label className="text-sm font-semibold">
                      Email
                      <input name="email" type="email" required className="mt-2 w-full rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                    </label>
                  </div>
                  <label className="block text-sm font-semibold">
                    Subject
                    <input name="subject" required className="mt-2 w-full rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                  </label>
                  <label className="block text-sm font-semibold">
                    Message
                    <textarea name="message" required rows={6} className="mt-2 w-full resize-y rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                  </label>
                  <button type="submit" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-deep">
                    Submit
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </main>
      <SiteFooter hideContactDetails />
    </>
  )
}

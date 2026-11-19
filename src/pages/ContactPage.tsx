import { useRef, useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { submitContact, validateContact, type ContactFormValues, type ContactFieldErrors } from '@/lib/contact'
import { trackEvent } from '@/lib/analytics'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<ContactFieldErrors>({})
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries()) as unknown as ContactFormValues
    const nextErrors = validateContact(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setStatus('loading')
    setErrorMessage('')
    try {
      await submitContact(values)
      trackEvent('contact-form-submission')
      setStatus('success')
      formRef.current?.reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'We could not send your message. Please try again.')
    }
  }

  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-screen bg-secondary/40 px-6 py-14 md:py-20">
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
              {status === 'success' ? (
                <div className="mt-8 rounded-2xl border border-primary/30 bg-secondary p-5 text-sm text-primary" role="status">
                  Thank you for contacting NACOSTI. Your message has been sent.
                </div>
              ) : (
                <form ref={formRef} className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate aria-describedby="form-status">
                  <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
                    <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
                  </div>
                  <div id="form-status" role="alert" aria-live="polite">
                    {status === 'error' ? <p className="mb-4 rounded-xl border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">{errorMessage}</p> : null}
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-semibold" htmlFor="contact-name">
                      Name
                      <input id="contact-name" name="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className="mt-2 w-full rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                      {errors.name ? <span id="name-error" className="mt-1 block text-xs text-destructive">{errors.name}</span> : null}
                    </label>
                    <label className="text-sm font-semibold" htmlFor="contact-email">
                      Email
                      <input id="contact-email" name="email" type="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className="mt-2 w-full rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                      {errors.email ? <span id="email-error" className="mt-1 block text-xs text-destructive">{errors.email}</span> : null}
                    </label>
                  </div>
                  <label className="block text-sm font-semibold" htmlFor="contact-subject">
                    Subject
                    <input id="contact-subject" name="subject" required aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined} className="mt-2 w-full rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                    {errors.subject ? <span id="subject-error" className="mt-1 block text-xs text-destructive">{errors.subject}</span> : null}
                  </label>
                  <label className="block text-sm font-semibold" htmlFor="contact-message">
                    Message
                    <textarea id="contact-message" name="message" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined} rows={6} className="mt-2 w-full resize-y rounded-xl border bg-background px-4 py-3 font-normal outline-none transition-colors focus:border-primary" />
                    {errors.message ? <span id="message-error" className="mt-1 block text-xs text-destructive">{errors.message}</span> : null}
                  </label>
                  <button type="submit" disabled={status === 'loading'} className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-deep disabled:cursor-wait disabled:opacity-60">
                    {status === 'loading' ? 'Sending…' : 'Submit'}
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

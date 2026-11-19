export type ContactFormValues = {
  name: string
  email: string
  subject: string
  message: string
  website?: string
}

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>

const limits = { name: { min: 2, max: 100 }, subject: { min: 3, max: 150 }, message: { min: 10, max: 5000 } } as const

export function validateContact(values: ContactFormValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {}
  const name = values.name.trim()
  const subject = values.subject.trim()
  const message = values.message.trim()
  if (name.length < limits.name.min || name.length > limits.name.max) errors.name = 'Enter a name between 2 and 100 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (subject.length < limits.subject.min || subject.length > limits.subject.max) errors.subject = 'Enter a subject between 3 and 150 characters.'
  if (message.length < limits.message.min || message.length > limits.message.max) errors.message = 'Enter a message between 10 and 5,000 characters.'
  return errors
}

const lastSubmissionKey = 'nacosti-contact-last-submission'
const submissionInterval = 60_000

export function isSubmissionThrottled() {
  const last = Number(localStorage.getItem(lastSubmissionKey) ?? 0)
  return Number.isFinite(last) && Date.now() - last < submissionInterval
}

export async function submitContact(values: ContactFormValues) {
  if (values.website?.trim()) throw new Error('Spam validation failed.')
  if (isSubmissionThrottled()) throw new Error('Please wait a minute before sending another message.')
  const recipient = import.meta.env.VITE_CONTACT_EMAIL || 'customercare@nacosti.go.ke'
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
      _captcha: 'true',
      _template: 'table',
    }),
  })
  if (!response.ok) throw new Error('The message service could not accept this request.')
  localStorage.setItem(lastSubmissionKey, String(Date.now()))
}

import { cn } from '../lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em]',
          tone === 'dark' ? 'text-accent' : 'text-primary',
        )}
      >
        <span className="h-px w-8 bg-accent" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl',
          tone === 'dark' ? 'text-deep-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed md:text-lg',
            tone === 'dark' ? 'text-deep-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}   
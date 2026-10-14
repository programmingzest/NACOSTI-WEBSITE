import { partners } from '@/lib/site-data'
import { cn } from '@/lib/utils'

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = reverse ? [...partners].reverse() : partners
  return (
    <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <ul
        className={cn(
          'flex w-max shrink-0 gap-4 pr-4 group-hover:[animation-play-state:paused]',
          reverse ? 'animate-marquee-reverse' : 'animate-marquee',
        )}
      >
        {[...items, ...items].map((partner, i) => (
          <li
            key={`${partner.short}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 rounded-full border bg-background py-2 pl-2 pr-5 shadow-sm"
          >
            <span className="flex h-9 min-w-9 items-center justify-center rounded-full bg-primary px-2 font-display text-xs font-bold text-primary-foreground">
              {partner.short}
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-foreground/80">{partner.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PartnersMarquee() {
  return (
    <section aria-labelledby="partners-heading" className="border-y bg-secondary/40 py-16">
      <h2
        id="partners-heading"
        className="px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
      >
        Collaborating with partners across Kenya, Africa and the world
      </h2>
      <div className="mt-8 flex flex-col gap-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}   
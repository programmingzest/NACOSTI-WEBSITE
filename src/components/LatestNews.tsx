import { ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react'
import { heroSlides, newsHref } from '@/lib/site-data'
import { Reveal, SectionHeading } from '@/components/Reveal'

export function LatestNews() {
  const [featured, ...rest] = heroSlides

  return (
    <section id="news" aria-labelledby="news-heading" className="bg-secondary/60 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div id="news-heading">
            <SectionHeading eyebrow="Newsroom" title="Latest news & stories" />
          </div>
          <a
            href={newsHref}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary"
          >
            All news
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="group relative flex h-full min-h-[28rem] flex-col justify-end overflow-hidden rounded-3xl">
              <img
                src={featured.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-transparent" aria-hidden="true" />
              <div className="relative p-8">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                  {featured.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-deep-foreground md:text-3xl">
                  <a href={featured.href} className="after:absolute after:inset-0">
                    {featured.title}
                  </a>
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-deep-foreground/70">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  {featured.date}
                </p>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <Reveal key={post.href} delay={(i + 1) * 120} className="flex-1">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-background transition-shadow hover:shadow-xl hover:shadow-primary/10 sm:flex-row">
                  <div className="relative aspect-video overflow-hidden sm:aspect-auto sm:w-2/5">
                    <img
                      src={post.image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{post.tag}</span>
                    <h3 className="mt-2 text-lg font-bold leading-snug">
                      <a href={post.href} className="after:absolute after:inset-0">
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-4 text-sm">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <CalendarDays className="size-4" aria-hidden="true" />
                        {post.date}
                      </span>
                      <ArrowUpRight
                        className="size-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}   
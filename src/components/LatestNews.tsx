import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  Newspaper,
} from 'lucide-react'
import newsStories from '@/content/news.json'
import { newsHref } from '@/lib/site-data'
import { Reveal } from '@/components/Reveal'

type NewsStory = (typeof newsStories)[number]

const categories = ['All updates', ...new Set(newsStories.map((story) => story.tag))]

function StoryDetails({ story }: { story: NewsStory }) {
  return (
    <details className="group mt-5 border-t border-white/15 pt-4">
      <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-sm font-semibold text-accent marker:hidden">
        <span>More details</span>
        <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="mt-3 space-y-4 text-sm leading-6 text-white/80">
        <p>{story.details}</p>
        <a
          href={story.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-accent hover:underline"
        >
          Read full story on NACOSTI
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </details>
  )
}

function StoryCard({ story, index }: { story: NewsStory; index: number }) {
  return (
    <Reveal delay={index * 100}>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
        <a href={story.href} target="_blank" rel="noopener noreferrer" className="relative block aspect-[16/10] overflow-hidden" aria-label={`Read ${story.title} on NACOSTI`}>
          <img
            src={story.image}
            alt=""
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
            {story.tag}
          </span>
        </a>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <CalendarDays className="size-4 text-primary" aria-hidden="true" />
            {story.date}
          </p>
          <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
            <a href={story.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
              {story.title}
            </a>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">{story.excerpt}</p>
          <div className="mt-auto pt-2">
            <details className="group/details mt-5 border-t pt-4">
              <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-sm font-semibold text-primary marker:hidden">
                <span>More details</span>
                <ChevronDown className="size-4 transition-transform group-open/details:rotate-180" aria-hidden="true" />
              </summary>
              <div className="mt-3 space-y-3 text-sm leading-6 text-muted-foreground">
                <p>{story.details}</p>
                <a
                  href={story.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  Read full story on NACOSTI
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </details>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function LatestNews({ showAllLink = true }: { showAllLink?: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState('All updates')
  const stories = selectedCategory === 'All updates'
    ? newsStories
    : newsStories.filter((story) => story.tag === selectedCategory)
  const [featured, ...rest] = stories

  return (
    <div className="bg-[#f5f7f3]">
      <section className="px-6 pt-20 pb-10 md:pt-22 md:pb-14 ">
       
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-black/65">
            <Newspaper className="size-4 text-accent" aria-hidden="true" />
            Newsroom
            <span className="px-1 text-white/35" aria-hidden="true"></span>
            
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-black md:text-6xl">
                News &amp; Announcements
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-black/75 md:text-lg">
                The latest updates, research stories and announcements from NACOSTI and Kenya&apos;s science community.
              </p>
            </div>
           
          </div>
        </div>
      </section>

      <main id="news" className="px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="-mt-1 flex flex-col gap-5 border-b border-border/80 py-6 md:flex-row md:items-center md:justify-between">
           
            {showAllLink ? (
              <a
                href={newsHref}
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                View all updates
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            ) : null}
          </div>

          {featured ? (
            <div className="pt-10 md:pt-14">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {selectedCategory === 'All updates' ? 'Featured story' : selectedCategory}
                </p>
     
              </div>
              <Reveal>
                <article className="grid overflow-hidden rounded-[2rem] bg-[#174b36] text-white shadow-xl shadow-[#174b36]/10 md:min-h-[26rem] md:grid-cols-[1.05fr_0.95fr]">
                  <a
                    href={featured.href}
                    className="group relative block min-h-64 overflow-hidden md:min-h-full"
                    aria-label={`Read ${featured.title}`}
                  >
                    <img
                      src={featured.image}
                      alt=""
                      className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#103d2c]/45 to-transparent md:bg-gradient-to-r" aria-hidden="true" />
                    <span className="absolute left-6 top-6 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#173c2c]">
                      {featured.tag}
                    </span>
                  </a>
                  <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                    <p className="flex items-center gap-2 text-xs font-medium text-white/60">
                      <CalendarDays className="size-4 text-accent" aria-hidden="true" />
                      {featured.date}
                    </p>
                    <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">
                      <a href={featured.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                        {featured.title}
                      </a>
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">{featured.excerpt}</p>
                    <StoryDetails story={featured} />
                  </div>
                </article>
              </Reveal>
            </div>
          ) : null}

          {rest.length > 0 ? (
            <section className="pt-14 md:pt-20" aria-labelledby="more-stories-heading">
              <div className="mb-7 flex items-end justify-between gap-4">
                
                
                  <h2 id="more-stories-heading" className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                    More stories
                  </h2>
              
               
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((story, index) => (
                  <StoryCard key={story.href} story={story} index={index} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </main>
    </div>
  )
}

import { useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { heroSlides } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovering, setHovering] = useState(false)
  const total = heroSlides.length
  const go = (next: number) => setIndex((next + total) % total)
  const isPaused = paused || hovering

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured news"
      className="relative isolate overflow-hidden bg-deep"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {heroSlides.map((slide, i) => (
        <div
          key={slide.href}
          aria-hidden={i !== index}
          className={cn(
            'absolute inset-0 -z-10 transition-opacity duration-1000',
            i === index ? 'opacity-100' : 'opacity-0',
          )}
        >
          <img
            src={slide.image}
            alt=""
            className={cn(
              'absolute inset-0 h-full w-full object-cover transition-transform duration-[8000ms] ease-out',
              i === index ? 'scale-105' : 'scale-100',
            )}
          />
        </div>
      ))}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-deep via-deep/85 to-deep/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-deep via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl flex-col justify-center px-6 pb-40 pt-16 md:min-h-[48rem] md:pb-72">
        <div className="max-w-3xl" aria-live={isPaused ? 'polite' : 'off'}>
          <div
            key={`meta-${index}`}
            className="flex flex-wrap items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-700"
          >
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              {heroSlides[index].tag}
            </span>
            <span className="text-sm text-deep-foreground/70">{heroSlides[index].date}</span>
          </div>
          <h1
            key={`title-${index}`}
            className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-deep-foreground animate-in fade-in slide-in-from-bottom-6 duration-700 md:text-5xl xl:text-6xl"
          >
            {heroSlides[index].title}
          </h1>
          <p
            key={`excerpt-${index}`}
            className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-deep-foreground/80 animate-in fade-in slide-in-from-bottom-6 duration-1000"
          >
            {heroSlides[index].excerpt}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={heroSlides[index].href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-xl shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-accent/40"
            >
              Read the story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="https://research-portal.nacosti.go.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 font-semibold text-deep-foreground backdrop-blur transition-colors hover:border-white hover:bg-white/15"
            >
              Apply for Research License
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/25 text-deep-foreground transition-colors hover:bg-white hover:text-deep"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
            <span className="sr-only">Previous slide</span>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/25 text-deep-foreground transition-colors hover:bg-white hover:text-deep"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
            <span className="sr-only">Next slide</span>
          </button>
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="flex size-11 items-center justify-center rounded-full text-deep-foreground/70 transition-colors hover:text-accent"
          >
            {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
            <span className="sr-only">{paused ? 'Play slideshow' : 'Pause slideshow'}</span>
          </button>
          <p className="ml-2 font-display text-sm font-semibold tabular-nums text-deep-foreground/70">
            <span className="text-accent">{String(index + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-28 hidden md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4 px-6">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              onClick={() => go(i)}
              aria-current={i === index}
              className={cn(
                'group relative overflow-hidden rounded-xl border p-4 text-left backdrop-blur-md transition-all',
                i === index
                  ? 'border-white/30 bg-white/15'
                  : 'border-white/10 bg-white/5 hover:bg-white/10',
              )}
            >
              <span className="block text-xs font-semibold uppercase tracking-wider text-accent">{slide.tag}</span>
              <span className="mt-1 line-clamp-1 block text-sm font-medium text-deep-foreground">{slide.title}</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10" aria-hidden="true">
                {i === index ? (
                  <span
                    key={index}
                    onAnimationEnd={() => go(index + 1)}
                    style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                    className="block h-full origin-left animate-progress bg-accent"
                  />
                ) : null}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-28 flex justify-center gap-2 md:hidden">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.href}
            type="button"
            onClick={() => go(i)}
            className="relative h-1.5 w-10 overflow-hidden rounded-full bg-white/25"
          >
            <span className="sr-only">Go to slide {i + 1}</span>
            {i === index ? (
              <span
                key={index}
                onAnimationEnd={() => go(index + 1)}
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
                className="absolute inset-0 origin-left animate-progress bg-accent"
              />
            ) : null}
          </button>
        ))}
      </div>
    </section>
  )
}   
import { useCallback, useEffect, useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Link } from 'react-router'
import { heroSlides, newsHref } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function HeroCarousel() {
  const slides = heroSlides
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovering, setHovering] = useState(false)
  const total = slides.length
  const go = useCallback((next: number) => setIndex((next + total) % total), [total])
  const isPaused = paused || hovering

  useEffect(() => {
    if (isPaused) return
    const timer = window.setInterval(() => go(index + 1), 7000)
    return () => window.clearInterval(timer)
  }, [go, index, isPaused])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured news"
      className="featured-hero relative overflow-hidden bg-primary text-primary-foreground"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="featured-hero-inner mx-auto grid max-w-7xl gap-5 px-6 py-6 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:py-8">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Kenya&apos;s Science, Technology &amp; Innovation Regulator
          </p>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Advancing Kenya Through Research, Science &amp; Innovation
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
            NACOSTI regulates, advises, coordinates and promotes the STI and research sector, from research licensing to ethics review and accreditation.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/app/resource/mandate-functions/" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-semibold transition-colors hover:bg-white/10">
              Our Mandate <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="featured-news-card relative min-h-[16rem] overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-sm" aria-live={isPaused ? 'polite' : 'off'}>
          {slides.map((slide, i) => (
            <div key={slide.href} aria-hidden={i !== index} className={cn('absolute inset-0 transition-opacity duration-700', i === index ? 'opacity-100' : 'pointer-events-none opacity-0')}>
              <img src={slide.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/65 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-accent">
                  <span>{slide.tag}</span><span className="text-primary-foreground/60">{slide.date}</span>
                </div>
                <h2 className="mt-2 max-w-2xl text-xl font-bold leading-tight text-deep-foreground md:text-2xl">{slide.title}</h2>
                <p className="mt-2 max-w-2xl text-xs leading-relaxed text-deep-foreground/80 md:text-sm">{slide.excerpt}</p>
                <Link to={newsHref} className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-accent hover:underline md:text-sm">
                  Read more <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="text-sm font-semibold text-deep-foreground">Latest news</span>
            <Link to={newsHref} className="text-xs font-semibold text-accent hover:underline">Other news</Link>
          </div>
          <div className="absolute bottom-5 right-6 flex items-center gap-2">
            <button type="button" onClick={() => go(index - 1)} className="flex size-9 items-center justify-center rounded-full border border-white/40 text-deep-foreground hover:bg-white/20" aria-label="Previous story"><ChevronLeft className="size-4" /></button>
            <button type="button" onClick={() => go(index + 1)} className="flex size-9 items-center justify-center rounded-full border border-white/40 text-deep-foreground hover:bg-white/20" aria-label="Next story"><ChevronRight className="size-4" /></button>
            <button type="button" onClick={() => setPaused((p) => !p)} className="flex size-9 items-center justify-center rounded-full text-deep-foreground/80 hover:text-white" aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>
              {paused ? <Play className="size-4" /> : <Pause className="size-4" />}
            </button>
            <span className="ml-1 text-xs font-semibold text-deep-foreground/80">{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 2013, label: 'Established under STI Act No. 28', prefix: 'Since ' },
  { value: 12, label: 'National STI priority areas' },
  { value: 4, label: 'Core mandates: regulate, advise, coordinate & promote' },
  { value: 4, label: 'Editions of the Multi-Sectoral STI Conference' },
]

function Counter({ value, start }: { value: number; start: boolean }) {
  const [display, setDisplay] = useState(value > 1000 ? value - 40 : 0)

  useEffect(() => {
    if (!start) return
    const from = value > 1000 ? value - 40 : 0
    const duration = 1400
    let frame = 0
    const begin = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - begin) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from + (value - from) * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, value])

  return <>{display}</>
}

export function StatsBand() {
  const ref = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section aria-label="NACOSTI at a glance" className="px-6">
      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-accent sm:grid-cols-2 lg:grid-cols-4"
      >
        <div
          className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-white/25 blur-3xl"
          aria-hidden="true"
        />
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative border-accent-foreground/10 p-8 md:p-10 [&:not(:last-child)]:border-b sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r"
          >
            <p className="font-display text-5xl font-extrabold tracking-tight text-accent-foreground tabular-nums md:text-6xl">
              {stat.prefix ? <span className="mr-1 text-base font-semibold align-middle">{stat.prefix}</span> : null}
              <Counter value={stat.value} start={start} />
            </p>
            <p className="mt-3 max-w-[16rem] text-sm font-medium leading-relaxed text-accent-foreground/75">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}   
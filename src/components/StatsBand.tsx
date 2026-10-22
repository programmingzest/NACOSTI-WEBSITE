import { useEffect, useRef, useState } from 'react'


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
        
      </div>
    </section>
  )
}   

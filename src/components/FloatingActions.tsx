import { useEffect, useRef, useState } from 'react'
import { ArrowUp, ArrowUpRight, Dna, X } from 'lucide-react'
import { icgebLinks } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <div ref={panelRef} className="relative">
        {open ? (
          <div
            id="icgeb-panel"
            className="absolute bottom-full right-0 mb-3 w-64 rounded-2xl border bg-popover p-3 shadow-2xl animate-in fade-in slide-in-from-bottom-2"
          >
            <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-primary">
              ICGEB Opportunities
            </p>
            <ul>
              {icgebLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="icgeb-panel"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded-full bg-primary py-3 pl-4 pr-5 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/30 ring-4 ring-primary/15 transition-transform hover:-translate-y-0.5"
        >
          {open ? <X className="size-4" aria-hidden="true" /> : <Dna className="size-4 text-accent" aria-hidden="true" />}
          <span className="hidden sm:inline">ICGEB Opportunities</span>
          <span className="sm:hidden">ICGEB</span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          'flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl transition-all duration-300 hover:-translate-y-0.5',
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <ArrowUp className="size-5" aria-hidden="true" />
        <span className="sr-only">Back to top</span>
      </button>
    </div>
  )
}   
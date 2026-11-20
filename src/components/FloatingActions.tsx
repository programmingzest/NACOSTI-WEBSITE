import { useEffect, useRef, useState } from 'react'
import { Accessibility, ArrowUp, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const [settings, setSettings] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nacosti-a11y') ?? '{}') as Record<string, boolean> } catch { return {} }
  })

  useEffect(() => {
    Object.entries(settings).forEach(([key, enabled]) => document.documentElement.toggleAttribute(`data-a11y-${key}`, enabled))
    localStorage.setItem('nacosti-a11y', JSON.stringify(settings))
  }, [settings])

  const toggleSetting = (key: string) => setSettings((current) => ({ ...current, [key]: !current[key] }))
  const resetSettings = () => setSettings({})
  const resetFontSize = () => setSettings((current) => ({ ...current, 'large-text': false, 'small-text': false }))
  const accessibilitySettings = [
    ['large-text', 'Increase font size'], ['small-text', 'Decrease font size'], ['high-contrast', 'High contrast'],
    ['dark-mode', 'Dark mode'], ['grayscale', 'Grayscale'], ['dyslexia', 'Dyslexia-friendly font'],
    ['highlight-links', 'Highlight links'], ['highlight-headings', 'Highlight headings'],
    ['reading-guide', 'Reading guide'], ['reduced-motion', 'Reduced motion'], ['enhanced-focus', 'Enhanced focus indicators'],
  ] as const

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
            id="accessibility-panel"
            className="absolute bottom-full right-0 mb-3 w-64 rounded-2xl border bg-popover p-3 shadow-2xl animate-in fade-in slide-in-from-bottom-2"
          >
            <p className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-primary">Accessibility settings</p>
            <div className="grid gap-1 border-b pb-3">
              {accessibilitySettings.map(([key, label]) => (
                <button key={key} type="button" aria-pressed={Boolean(settings[key])} onClick={() => toggleSetting(key)} className="rounded-lg px-3 py-2 text-left text-xs hover:bg-secondary">
                  {settings[key] ? '✓ ' : ''}{label}
                </button>
              ))}
              <button type="button" onClick={resetFontSize} className="px-3 py-2 text-left text-xs font-semibold text-primary hover:underline">Reset font size</button>
              <button type="button" onClick={resetSettings} className="px-3 py-2 text-left text-xs font-semibold text-primary hover:underline">Reset accessibility settings</button>
            </div>
          </div>
        ) : null}
        <button
          type="button"
          aria-expanded={open}
          aria-label="Accessibility settings"
          aria-controls="accessibility-panel"
          onClick={() => setOpen((v) => !v)}
          className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 ring-4 ring-primary/15 transition-transform hover:-translate-y-0.5"
        >
          {open ? <X className="size-4" aria-hidden="true" /> : <Accessibility className="size-4 text-accent" aria-hidden="true" />}
        </button>
      </div>
      <button
        type="button"
        aria-label="Scroll to top"
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
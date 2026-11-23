import { useEffect, useRef, useState } from 'react'
import { Accessibility, ArrowUp, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const [settings, setSettings] = useState(() => {
    try { return JSON.parse(localStorage.getItem('nacosti-a11y') ?? '{}') as Record<string, boolean> } catch { return {} }
  })

  useEffect(() => {
    Object.entries(settings).forEach(([key, enabled]) => document.documentElement.toggleAttribute(`data-a11y-${key}`, enabled))
    try { localStorage.setItem('nacosti-a11y', JSON.stringify(settings)) } catch { /* Persistence is optional when storage is unavailable. */ }
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
    if (open) window.requestAnimationFrame(() => panelRef.current?.querySelector<HTMLButtonElement>('button')?.focus())
    const onChatOpen = () => setOpen(false)
    const onChatbotAccessibility = () => {
      setOpen(true)
      window.requestAnimationFrame(() => panelRef.current?.querySelector<HTMLButtonElement>('button')?.focus())
    }
    window.addEventListener('nacosti-chatbot-open', onChatOpen)
    window.addEventListener('nacosti-chatbot-accessibility-request', onChatbotAccessibility)
    const onDown = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('nacosti-chatbot-open', onChatOpen)
      window.removeEventListener('nacosti-chatbot-accessibility-request', onChatbotAccessibility)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="floating-a11y">
      <div ref={panelRef}>
        {open ? (
          <div
            id="accessibility-panel"
            role="dialog"
            aria-modal="false"
            aria-labelledby="accessibility-panel-title"
            className="accessibility-panel"
          >
            <p id="accessibility-panel-title" className="px-3 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-primary">Accessibility settings</p>
            <div className="grid gap-1">
              {accessibilitySettings.map(([key, label]) => (
                <button key={key} type="button" aria-pressed={Boolean(settings[key])} onClick={() => toggleSetting(key)} className="rounded-lg px-3 py-2 text-left text-xs hover:bg-secondary">
                  {settings[key] ? '✓ ' : ''}{label}
                </button>
              ))}
              <button type="button" onClick={resetFontSize} className="rounded-lg px-3 py-2 text-left text-xs font-semibold text-primary hover:bg-secondary">Reset font size</button>
              <button type="button" onClick={resetSettings} className="rounded-lg px-3 py-2 text-left text-xs font-semibold text-primary hover:bg-secondary">Reset accessibility settings</button>
            </div>
          </div>
        ) : null}
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-label="Accessibility settings"
          aria-controls="accessibility-panel"
          onClick={() => {
            if (!open) window.dispatchEvent(new CustomEvent('nacosti-accessibility-open'))
            setOpen((v) => !v)
          }}
          className="floating-a11y-trigger"
        >
          {open ? <X className="size-4" aria-hidden="true" /> : <Accessibility className="size-4 text-accent" aria-hidden="true" />}
        </button>
      </div>
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={cn(
          'floating-scroll-top',
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
        )}
      >
        <ArrowUp className="size-5" aria-hidden="true" />
        <span className="sr-only">Back to top</span>
      </button>
    </div>
  )
}   
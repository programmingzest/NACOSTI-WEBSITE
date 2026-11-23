import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ExternalLink, MessageCircle, X } from 'lucide-react'
import { useNavigate } from 'react-router'
import chatbotMenu from '@/content/chatbot-menu.json'
import { routeHref } from '@/lib/routes'
import { trackEvent } from '@/lib/analytics'

type ChatAction = { type: 'route' | 'external' | 'tel' | 'email' | 'accessibility'; href?: string }
type ChatOption = { id: string; label: string; action?: ChatAction; children?: ChatOption[] }

export function NacostiChatbot() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<ChatOption | null>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const close = () => {
    setOpen(false)
    setActive(null)
    trackEvent('chatbot-close')
    window.requestAnimationFrame(() => triggerRef.current?.focus())
  }

  useEffect(() => {
    if (!open) return
    headingRef.current?.focus()
    const onA11yOpen = () => setOpen(false)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    const onOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      ) close()
    }
    window.addEventListener('nacosti-accessibility-open', onA11yOpen)
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOutside)
    return () => {
      window.removeEventListener('nacosti-accessibility-open', onA11yOpen)
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [open])

  const openPanel = () => {
    window.dispatchEvent(new CustomEvent('nacosti-chatbot-open'))
    setOpen(true)
    trackEvent('chatbot-open')
  }

  const selectOption = (option: ChatOption) => {
    const path = active ? `${active.id}/${option.id}` : option.id
    trackEvent(`chatbot-menu-selection:${path}`)
    if (option.children?.length) {
      setActive(option)
      window.requestAnimationFrame(() => headingRef.current?.focus())
      return
    }
    const action = option.action
    if (!action) return
    if (action.type === 'route' && action.href) {
      navigate(routeHref(action.href))
      setOpen(false)
      setActive(null)
    } else if (action.type === 'external' && action.href) {
      window.open(action.href, '_blank', 'noopener,noreferrer')
    } else if ((action.type === 'tel' || action.type === 'email') && action.href) {
      window.location.assign(action.href)
    } else if (action.type === 'accessibility') {
      window.dispatchEvent(new CustomEvent('nacosti-chatbot-accessibility-request'))
      setOpen(false)
    }
  }

  const options = (active?.children ?? chatbotMenu.options) as ChatOption[]

  return (
    <div className="floating-chatbot">
      {open ? (
        <div ref={panelRef} id="nacosti-chatbot-panel" role="dialog" aria-modal="false" aria-labelledby="chatbot-title" className="chatbot-panel">
          <div className="chatbot-header">
            {active ? (
              <button type="button" className="chatbot-back" onClick={() => setActive(null)} aria-label="Back to main chatbot menu">
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
            ) : <span className="chatbot-mark" aria-hidden="true">N</span>}
            <h2 ref={headingRef} id="chatbot-title" tabIndex={-1} className="chatbot-title">
              {active?.label ?? chatbotMenu.title}
            </h2>
            <button type="button" className="chatbot-close" onClick={close} aria-label="Close NACOSTI Virtual Assistant">
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="chatbot-content">
            {!active ? (
              <>
                <p className="chatbot-welcome">{chatbotMenu.welcome}</p>
                <p className="chatbot-prompt">{chatbotMenu.prompt}</p>
              </>
            ) : null}
            <nav aria-label={active ? `${active.label} options` : 'NACOSTI Virtual Assistant menu'}>
              <ul className="chatbot-options">
                {options.map((option) => (
                  <li key={option.id}>
                    <button type="button" onClick={() => selectOption(option)} className="chatbot-option">
                      <span>{option.label}</span>
                      {option.children?.length ? <span aria-hidden="true">›</span> : option.action?.type === 'external' ? <ExternalLink className="size-4" aria-hidden="true" /> : null}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
      <button
        ref={triggerRef}
        type="button"
        className="floating-chatbot-trigger"
        aria-label={open ? 'Close NACOSTI Virtual Assistant' : 'Open NACOSTI Virtual Assistant'}
        aria-expanded={open}
        aria-controls="nacosti-chatbot-panel"
        onClick={() => open ? close() : openPanel()}
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <MessageCircle className="size-5" aria-hidden="true" />}
      </button>
    </div>
  )
}

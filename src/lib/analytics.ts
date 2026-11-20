type Clarity = ((command: string, ...args: string[]) => void) & { q?: unknown[][] }

let initialized = false

function clarityClient() {
  return (window as Window & { clarity?: Clarity }).clarity
}

export function initializeAnalytics() {
  const projectId = import.meta.env.VITE_CLARITY_PROJECT_ID?.trim()
  if (!projectId || !/^[A-Za-z0-9_-]+$/.test(projectId) || initialized || typeof document === 'undefined') return

  const win = window as Window & { clarity?: Clarity }
  const clarity = ((...args: string[]) => {
    clarity.q = clarity.q ?? []
    clarity.q.push(args)
  }) as Clarity
  win.clarity = clarity
  initialized = true

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`
  script.dataset.clarityProjectId = projectId
  document.head.appendChild(script)
}

export function trackEvent(event: string, path?: string) {
  const clarity = clarityClient()
  if (!clarity) return
  clarity('event', event)
  if (path) clarity('set', 'page_path', path)
}

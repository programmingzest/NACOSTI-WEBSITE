export const appRoutes = {
  home: '/app',
  news: '/app/news',
  downloads: '/app/resource/resources-downloads/',
  contact: '/app/contact/',
} as const

const knownExactRoutes = new Set([appRoutes.home, appRoutes.news, appRoutes.downloads, appRoutes.contact, '/'])

export function isInternalRoute(path: string) {
  return isKnownRoute(path)
}

export function isKnownRoute(path: string) {
  const cleanPath = path.split('#')[0].replace(/\/+$/, '') || '/'
  return knownExactRoutes.has(cleanPath) || cleanPath.startsWith('/app/resource/')
}

export function routeHref(path: string) {
  return path.trim()
}

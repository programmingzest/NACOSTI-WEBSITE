import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowUpRight, ChevronDown, Mail, MapPin, Menu, Phone, Search, X } from 'lucide-react'
import { contact, navigation, type NavItem, type NavLink } from '@/lib/site-data'
import { SocialIcons } from '@/components/SocialIcons'
import { cn } from '@/lib/utils'

const allLinks: NavLink[] = navigation.flatMap((item) =>
  item.groups
    ? item.groups.flatMap((group) => group.links)
    : item.href
      ? [{ label: item.label, href: item.href }]
      : [],
)

function isExternal(href: string) {
  return href.startsWith('http')
}

function TopBar() {
  return (
    <div className="hidden bg-deep text-deep-foreground md:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-xs">
        <div className="flex items-center gap-6">
          <a href={contact.phoneHref} className="flex items-center gap-2 transition-colors hover:text-accent">
            <Phone className="size-3.5 text-accent" aria-hidden="true" />
            {contact.phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 text-accent" aria-hidden="true" />
            {contact.address}
          </span>
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition-colors hover:text-accent">
            <Mail className="size-3.5 text-accent" aria-hidden="true" />
            {contact.email}
          </a>
        </div>
        <SocialIcons
          className="gap-1"
          itemClassName="size-7 text-deep-foreground/80 hover:bg-white/10 hover:text-accent"
        />
      </div>
    </div>
  )
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const groups = item.groups ?? []
  const wide = groups.length > 1
  return (
    <li className="group/nav relative">
      <button
        type="button"
        aria-haspopup="true"
        className="flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary group-focus-within/nav:bg-secondary group-focus-within/nav:text-primary"
      >
        {item.label}
        <ChevronDown
          className="size-3.5 transition-transform duration-300 group-hover/nav:rotate-180 group-focus-within/nav:rotate-180"
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          'invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100',
        )}
      >
        <div
          className={cn(
            'grid gap-6 rounded-2xl border bg-popover p-5 shadow-2xl shadow-deep/10',
            wide ? 'w-[min(90vw,46rem)]' : 'w-80',
            wide && groups.length === 3 && 'grid-cols-3',
            wide && groups.length === 2 && 'w-[34rem] grid-cols-2',
          )}
        >
          {groups.map((group, i) => (
            <div key={group.title ?? i}>
              {group.title ? (
                <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  {group.title}
                </p>
              ) : null}
              <ul className="flex flex-col gap-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={isExternal(link.href) ? '_blank' : undefined}
                      rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                      className="group/link flex items-start justify-between gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-secondary"
                    >
                      <span>
                        <span className="block text-sm font-medium text-foreground group-hover/link:text-primary">
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="mt-0.5 block text-xs text-muted-foreground">{link.description}</span>
                        ) : null}
                      </span>
                      <ArrowUpRight
                        className="mt-0.5 size-3.5 shrink-0 text-primary opacity-0 transition-opacity group-hover/link:opacity-100"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  )
}

function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return allLinks.slice(0, 8)
    return allLinks.filter((link) => link.label.toLowerCase().includes(q)).slice(0, 10)
  }, [query])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search NACOSTI"
      className="fixed inset-0 z-[60] flex items-start justify-center bg-deep/60 p-4 pt-[12vh] backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl bg-popover shadow-2xl animate-in zoom-in-95 slide-in-from-top-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b px-5">
          <Search className="size-5 text-primary" aria-hidden="true" />
          <label htmlFor="site-search" className="sr-only">
            Search services and pages
          </label>
          <input
            ref={inputRef}
            id="site-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== 'Enter' || e.nativeEvent.isComposing || e.keyCode === 229) return
              const first = results[0]
              if (first) window.open(first.href, isExternal(first.href) ? '_blank' : '_self')
            }}
            placeholder="Search services, pages, conferences..."
            className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
          >
            Esc
          </button>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-muted-foreground">
              No results for &ldquo;{query}&rdquo;
            </li>
          ) : (
            results.map((link) => (
              <li key={link.href + link.label}>
                <a
                  href={link.href}
                  target={isExternal(link.href) ? '_blank' : undefined}
                  rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                  <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-background transition-all duration-300 xl:hidden',
        open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0',
      )}
    >
      <nav aria-label="Mobile" className="px-6 py-6">
        <ul className="flex flex-col divide-y">
          {navigation.map((item) =>
            item.groups ? (
              <li key={item.label}>
                <button
                  type="button"
                  aria-expanded={expanded === item.label}
                  onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold"
                >
                  {item.label}
                  <ChevronDown
                    className={cn('size-5 text-primary transition-transform', expanded === item.label && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300',
                    expanded === item.label ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr]',
                  )}
                >
                  <ul className="overflow-hidden">
                    {item.groups.flatMap((g) => g.links).map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          onClick={onClose}
                          target={isExternal(link.href) ? '_blank' : undefined}
                          rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
                          className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={item.label}>
                <a href={item.href} onClick={onClose} className="block py-4 text-lg font-semibold">
                  {item.label}
                </a>
              </li>
            ),
          )}
        </ul>
        <a
          href="https://research-portal.nacosti.go.ke/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground"
        >
          Apply for Research License
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
        <div className="mt-8 flex flex-col gap-2 text-sm text-muted-foreground">
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <SocialIcons className="mt-3" itemClassName="bg-secondary text-primary hover:bg-primary hover:text-primary-foreground" />
        </div>
      </nav>
    </div>
  )
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeSearch = useCallback(() => setSearchOpen(false), [])
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <>
      <TopBar />
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled || menuOpen
            ? 'border-b bg-background/90 shadow-lg shadow-deep/5 backdrop-blur-xl'
            : 'bg-background',
        )}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-6">
          <a href="#top" className="flex shrink-0 items-center" aria-label="NACOSTI home">
            <img
              src="/nacosti-logo.jpg"
              alt="NACOSTI - National Commission for Science, Technology and Innovation"
              className="h-11 w-auto md:h-12"
            />
          </a>

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-0.5">
              {navigation.map((item) =>
                item.groups ? (
                  <DesktopDropdown key={item.label} item={item} />
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href && isExternal(item.href) ? '_blank' : undefined}
                      rel={item.href && isExternal(item.href) ? 'noopener noreferrer' : undefined}
                      className="whitespace-nowrap rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex size-10 items-center justify-center rounded-full border text-foreground/70 transition-colors hover:border-primary hover:text-primary"
            >
              <Search className="size-4" aria-hidden="true" />
              <span className="sr-only">Search</span>
            </button>
            <a
              href="https://research-portal.nacosti.go.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-deep sm:flex"
            >
              Apply Now
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-full bg-secondary text-primary xl:hidden"
            >
              {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
              <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>
        <MobileMenu open={menuOpen} onClose={closeMenu} />
      </header>
      <SearchDialog open={searchOpen} onClose={closeSearch} />
    </>
  )
}   
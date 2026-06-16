'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-chrome-950/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="w-2 h-2 bg-orange rounded-full group-hover:shadow-[0_0_8px_#FF6A00] transition-shadow" />
          <span className="font-mono text-sm font-bold tracking-[0.15em] text-chrome-100 group-hover:text-white transition-colors">
            ACOOLNERD
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map(({ href, label }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    'relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-150',
                    active
                      ? 'text-orange'
                      : 'text-chrome-400 hover:text-chrome-100',
                  ].join(' ')}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-orange" />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex btn-primary text-xs"
        >
          Start a Project
        </Link>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-chrome-400 hover:text-white transition-colors"
        >
          <span className="sr-only">Menu</span>
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`h-px bg-current transition-transform duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
              className={`h-px bg-current transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-px bg-current transition-transform duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-chrome-950/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-1" role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={[
                    'block px-2 py-3 text-sm font-medium tracking-wide border-b border-white/5 last:border-0 transition-colors',
                    pathname === href
                      ? 'text-orange'
                      : 'text-chrome-400 hover:text-white',
                  ].join(' ')}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary w-full justify-center text-xs"
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

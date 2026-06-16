import Link from 'next/link'

const nav = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const social = [
  { href: 'https://github.com/acoolnerd', label: 'GitHub' },
  { href: 'https://linkedin.com/in/acoolnerd', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-chrome-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="font-mono text-sm font-bold tracking-[0.15em] text-chrome-100">
                ACOOLNERD
              </span>
            </div>
            <p className="text-sm text-chrome-400 leading-relaxed max-w-xs">
              Enterprise technology consulting and digital architecture for mission-driven organizations in LA and beyond.
            </p>
            <p className="text-xs text-chrome-600 font-mono">Butler and Sons · ACool Ecosystem</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-4">Navigation</p>
            <ul className="space-y-2" role="list">
              {nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-chrome-400 hover:text-orange transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-4">Connect</p>
            <ul className="space-y-2" role="list">
              {social.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-chrome-400 hover:text-orange transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-chrome-400 hover:text-orange transition-colors duration-150"
                >
                  hello@acoolnerd.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="orange-rule mt-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <p className="text-xs text-chrome-600 font-mono">
            &copy; {new Date().getFullYear()} ACoolNERD · Keith Z. C. McPherson
          </p>
          <p className="text-xs text-chrome-600 font-mono">
            Los Angeles, CA
          </p>
        </div>
      </div>
    </footer>
  )
}

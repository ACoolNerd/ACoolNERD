import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Keith Z. C. McPherson — enterprise architect, technologist, and founder of the ACool Ecosystem.',
}

const pillars = [
  {
    title: 'Governance First',
    body: 'Every system I build starts with access control, audit trails, and data separation — not as an afterthought, but as the foundation.',
  },
  {
    title: 'Multi-Entity Thinking',
    body: 'I architect for ecosystems, not just apps. Each entity in the ACool umbrella operates under strict firewall protocols — code, branding, data, and governance fully compartmentalized.',
  },
  {
    title: 'Community Impact',
    body: 'The technology I build is oriented toward Los Angeles — its residents, businesses, nonprofits, and civic institutions. Especially the San Fernando Valley.',
  },
  {
    title: 'AI as Infrastructure',
    body: 'I treat AI agents as first-class infrastructure components — designed, governed, and maintained like any other mission-critical system.',
  },
]

const timeline = [
  { year: '2024', event: 'Founded ACoolTRUST → ACoolHOLDINGS enterprise umbrella under Butler and Sons.' },
  { year: '2024', event: 'Launched ACoolai — multi-agent AI platform with 6 specialized agents and 9,875-node knowledge graph.' },
  { year: '2025', event: 'Defined ACoolVERTICAL Infrastructure layer — shared pnpm monorepo powering 22 ecosystem entities.' },
  { year: '2025', event: 'Integrated graphify + Claude for semantic codebase analysis across 100+ GitHub repositories.' },
  { year: '2026', event: 'Expanding ACoolCITY civic suite: CITYHALLConnect, CHAMBERConnect, COUNCILConnect, VALLEYAlliance.' },
  { year: '2026', event: 'ACoolNERD.com launched — enterprise consulting brand live and taking engagements.' },
]

export default function AboutPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-16">
          <p className="section-label mb-3">The Architect</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About</h1>
          <div className="orange-rule max-w-xs" />
        </header>

        {/* Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-5 text-chrome-400 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Keith Z. C. McPherson</span> is an enterprise technology architect and the founder of the ACool Ecosystem — a 22-entity, 9-cluster portfolio of technology, media, health, and civic products operating under Butler and Sons.
            </p>
            <p>
              Based in Los Angeles, Keith builds the kind of infrastructure that mission-driven organizations actually need: governed, auditable, scalable, and designed to last beyond the next funding cycle.
            </p>
            <p>
              His consulting brand, ACoolNERD, merges deep technical execution with strategic product thinking — bringing enterprise-grade architecture to civic institutions, nonprofits, and emerging brands across the San Fernando Valley and beyond.
            </p>
            <p>
              When ProcessARC capabilities were integrated into ACoolNERD, they brought with them a systems-design methodology that treats governance, compliance, and automation as core features — not optional add-ons.
            </p>
          </div>

          {/* Identity card */}
          <div className="card-surface p-8 space-y-6">
            <p className="section-label">Identity</p>
            <dl className="space-y-4">
              {[
                ['Brand', 'ACoolNERD'],
                ['Entity', 'Butler and Sons · ACool Ecosystem'],
                ['Role', 'Enterprise Architect · Founder · Technologist'],
                ['Location', 'Los Angeles, California'],
                ['Focus', 'AI Systems · Civic Tech · Digital Governance'],
                ['GitHub', '@acoolnerd'],
              ].map(([key, val]) => (
                <div key={key} className="flex gap-4">
                  <dt className="text-xs font-mono text-chrome-600 w-20 shrink-0 pt-0.5">{key}</dt>
                  <dd className="text-sm text-chrome-200">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Pillars */}
        <section aria-labelledby="pillars-heading" className="mb-20">
          <p className="section-label mb-3">How I Work</p>
          <h2 id="pillars-heading" className="text-2xl font-bold text-white mb-8">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {pillars.map(({ title, body }) => (
              <div key={title} className="card-surface p-7">
                <div className="w-6 h-px bg-orange mb-5" aria-hidden="true" />
                <h3 className="text-base font-semibold text-white mb-3">{title}</h3>
                <p className="text-sm text-chrome-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section aria-labelledby="timeline-heading" className="mb-16">
          <p className="section-label mb-3">Journey</p>
          <h2 id="timeline-heading" className="text-2xl font-bold text-white mb-8">Milestones</h2>
          <ol className="relative border-l border-white/10 space-y-8 pl-6" role="list">
            {timeline.map(({ year, event }) => (
              <li key={event} className="relative">
                <span
                  className="absolute -left-[29px] top-1 w-3 h-3 rounded-full border-2 border-orange bg-chrome-900"
                  aria-hidden="true"
                />
                <time className="text-xs font-mono text-orange">{year}</time>
                <p className="mt-1 text-sm text-chrome-400 leading-relaxed">{event}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link href="/contact" className="btn-primary">
            Work With Me
          </Link>
          <Link href="/projects" className="btn-ghost">
            See the Work
          </Link>
        </div>
      </div>
    </div>
  )
}

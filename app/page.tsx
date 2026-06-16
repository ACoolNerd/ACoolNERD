import Link from 'next/link'

const capabilities = [
  {
    label: 'Digital Architecture',
    description: 'Full-stack systems design — from data models to deployment pipelines — built for scale and longevity.',
  },
  {
    label: 'AI & Automation',
    description: 'Multi-agent orchestration, RAG pipelines, and LLM integrations that move organizations from reactive to proactive.',
  },
  {
    label: 'Civic Technology',
    description: 'Purpose-built platforms connecting residents, chambers, councils, and city infrastructure across the San Fernando Valley.',
  },
  {
    label: 'Enterprise Governance',
    description: 'RBAC, audit trails, compliance frameworks, and entity firewalls across multi-brand ecosystems.',
  },
]

const metrics = [
  { value: '22+', label: 'Active Projects' },
  { value: '9', label: 'Ecosystem Clusters' },
  { value: '100+', label: 'GitHub Repos' },
  { value: 'LA', label: 'Home Base' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden px-6 py-24"
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,106,0,0.08) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl w-full">
          <p className="section-label mb-6 animate-fade-in">
            Enterprise Technology Consulting
          </p>

          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-white animate-fade-up"
          >
            Building the
            <br />
            <span className="text-gradient-orange">infrastructure</span>
            <br />
            LA deserves.
          </h1>

          <p className="mt-8 max-w-xl text-base md:text-lg text-chrome-400 leading-relaxed animate-fade-up [animation-delay:100ms]">
            ACoolNERD is Keith Z. C. McPherson&apos;s consulting brand — architecting enterprise AI systems, civic platforms, and multi-entity governance frameworks across the ACool Ecosystem.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up [animation-delay:200ms]">
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-ghost">
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-0 right-0 orange-rule" aria-hidden="true" />
      </section>

      {/* Metrics band */}
      <section aria-label="Key metrics" className="border-y border-white/5 bg-chrome-900/40">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map(({ value, label }) => (
              <div key={label} className="text-center">
                <dt className="text-3xl md:text-4xl font-bold text-orange font-mono">{value}</dt>
                <dd className="mt-1 text-xs text-chrome-400 tracking-widest uppercase">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Capabilities */}
      <section aria-labelledby="capabilities-heading" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="section-label mb-3">What I Build</p>
          <h2
            id="capabilities-heading"
            className="text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Core Capabilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
            {capabilities.map(({ label, description }) => (
              <article
                key={label}
                className="card-surface p-8 group hover:border-orange/30 transition-colors duration-300"
              >
                <div className="w-8 h-px bg-orange mb-6 group-hover:w-16 transition-all duration-300" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-white mb-3">{label}</h3>
                <p className="text-sm text-chrome-400 leading-relaxed">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section aria-labelledby="cta-heading" className="px-6 py-20 border-t border-white/5">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 id="cta-heading" className="text-2xl md:text-3xl font-bold text-white">
              Ready to build something real?
            </h2>
            <p className="mt-2 text-chrome-400 text-sm">
              From concept to deployed infrastructure — let&apos;s map it out.
            </p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  )
}

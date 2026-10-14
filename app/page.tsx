import type { Metadata } from 'next'
import Link from 'next/link'
import CapabilityConstellation from '@/components/home/CapabilityConstellation'

export const metadata: Metadata = {
  title: 'ACoolNERD — Digital Architecture and Technology Strategy',
  description:
    'ACoolNERD is Keith Z. C. McPherson’s consulting practice for digital architecture, AI workflows, civic technology, and governance.',
}

const focusAreas = ['Digital architecture', 'AI and automation', 'Civic technology', 'Technology governance']

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-heading" className="relative overflow-hidden px-6 py-24 md:py-32">
        <div className="hero-grid" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="section-label mb-6">Independent technology practice · Los Angeles</p>
            <h1 id="hero-heading" className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-white md:text-7xl">
              Make complex systems <span className="text-gradient-chrome">work together.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-chrome-400 md:text-lg">
              ACoolNERD is Keith Z. C. McPherson’s consulting practice for digital architecture, AI workflows, civic technology, and governance.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">Discuss a project <span aria-hidden="true">↗</span></Link>
              <Link href="/services" className="btn-ghost">Explore areas of practice</Link>
            </div>
            <p className="mt-5 text-xs text-chrome-600">Availability and engagement details are confirmed directly.</p>
          </div>
          <CapabilityConstellation />
        </div>
        <div className="chrome-rule absolute bottom-0 left-0 right-0" aria-hidden="true" />
      </section>

      <section aria-label="Areas of practice" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-white/10 px-6 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {focusAreas.map((area, index) => (
            <div className="flex items-center gap-4 py-5 md:px-5 first:md:pl-0 last:md:pr-0" key={area}>
              <span className="font-mono text-xs text-chrome-600">0{index + 1}</span>
              <span className="text-sm text-chrome-200">{area}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="approach-heading" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="section-label mb-3">A practical approach</p>
            <h2 id="approach-heading" className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Clarity before complexity.</h2>
          </div>
          <div className="max-w-2xl space-y-5 text-base leading-7 text-chrome-400">
            <p>Start with the people, the task, and the constraints. Then map the systems and decisions needed to make the work dependable.</p>
            <p>Bring access, accountability, and review into the design early. Add automation and immersive interfaces where they help people complete the task.</p>
            <div className="pt-3">
              <Link href="/about" className="text-sm font-medium text-white underline decoration-chrome-600 underline-offset-4 hover:decoration-white">How I work <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

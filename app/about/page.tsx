import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'About Keith Z. C. McPherson and the ACoolNERD consulting practice.',
}

const principles = [
  ['Understand the work', 'Start with the people, their task, and the conditions the system has to meet.'],
  ['Design the boundaries', 'Make data ownership, access, and responsibility clear before adding integrations.'],
  ['Build for real use', 'Prioritize useful flows, clear feedback, and accessible ways to complete each task.'],
  ['Keep claims honest', 'Document what is implemented, what is proposed, and what still needs evidence.'],
]

export default function AboutPage() {
  return (
    <div className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="section-label mb-3">About the practice</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Thoughtful systems, made useful.</h1>
          <div className="chrome-rule mt-6 max-w-xs" aria-hidden="true" />
        </header>

        <section className="mt-14 grid gap-10 lg:grid-cols-[1fr_.8fr]" aria-labelledby="about-keith">
          <div className="max-w-2xl space-y-5 text-base leading-7 text-chrome-400">
            <h2 id="about-keith" className="text-xl font-medium text-white">Keith Z. C. McPherson</h2>
            <p>ACoolNERD is Keith’s technology consulting practice. Its focus includes digital architecture, AI workflows, civic technology, and governance.</p>
            <p>The work begins by making the problem, users, responsibilities, and constraints clear. From there, technology choices can be made to fit the need instead of driving it.</p>
            <Link href="/contact" className="inline-flex text-sm font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">Discuss a project <span className="ml-2" aria-hidden="true">→</span></Link>
          </div>
          <aside className="card-surface p-7 md:p-9">
            <p className="section-label">Working principles</p>
            <ol className="mt-6 space-y-6">
              {principles.map(([title, description], index) => (
                <li key={title} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="font-mono text-xs text-chrome-600">0{index + 1}</span>
                  <div>
                    <h3 className="text-sm font-medium text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-chrome-400">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </section>
      </div>
    </div>
  )
}

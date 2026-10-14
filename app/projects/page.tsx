import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'A curated portfolio of ACoolNERD digital architecture, technology strategy, and systems work.',
}

const reviewSteps = [
  ['01', 'Choose the work', 'Select projects that belong in the ACoolNERD portfolio.'],
  ['02', 'Verify the details', 'Confirm the contribution, current status, collaborators, and results for each case study.'],
  ['03', 'Publish with context', 'Explain the problem, decisions, and outcome without exposing private or unsupported information.'],
]

export default function ProjectsPage() {
  return (
    <div className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="section-label mb-3">Selected work</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">A portfolio built on evidence.</h1>
          <div className="chrome-rule mt-6 max-w-xs" aria-hidden="true" />
          <p className="mt-6 max-w-2xl leading-relaxed text-chrome-400">
            Project summaries are being reviewed before publication. This page will identify the work, Keith’s role, and the evidence behind each outcome. No project count or live-status claim is implied here.
          </p>
        </header>

        <ol className="mt-16 grid grid-cols-1 gap-px border border-white/10 bg-white/10 md:grid-cols-3" aria-label="Portfolio publishing process">
          {reviewSteps.map(([number, title, description]) => (
            <li key={number} className="bg-[#0d0d0d] p-7 md:p-8">
              <span className="font-mono text-xs text-chrome-600">{number}</span>
              <h2 className="mt-8 text-lg font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-chrome-400">{description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-chrome-400">Have a system or service challenge to discuss?</p>
          <Link href="/contact" className="btn-ghost">Start a conversation <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </div>
  )
}

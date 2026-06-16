import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Enterprise technology services from ACoolNERD — AI systems, digital architecture, civic tech, and governance frameworks.',
}

const services = [
  {
    id: '01',
    title: 'AI Systems & Agent Orchestration',
    summary: 'Multi-agent frameworks, RAG pipelines, and LLM integrations that transform how organizations operate.',
    items: [
      'Multi-agent system design (Commander, Scholar, CFO, Marketer, Analyst, Messenger)',
      'Knowledge graph construction and semantic search (graphify + Claude)',
      'Claude API integration and prompt engineering',
      'Automated reporting and decision-support pipelines',
      'LLM cost governance and token budgeting',
    ],
  },
  {
    id: '02',
    title: 'Digital Architecture & Full-Stack Engineering',
    summary: 'End-to-end platform design — from data schema through deployment — on the ACool default stack.',
    items: [
      'Next.js · React · TypeScript · Tailwind · Firebase architecture',
      '7-Field Schema Law compliance across all data models',
      'RBAC and multi-tenant access control systems',
      'REST / GraphQL API design and governance',
      'CI/CD pipelines and Vercel deployment',
    ],
  },
  {
    id: '03',
    title: 'Civic Technology & Community Platforms',
    summary: 'Purpose-built apps connecting government, chambers of commerce, nonprofits, and residents across LA.',
    items: [
      'CITYHALLConnect — resident portal and permit tracking',
      'CHAMBERConnect — business resource and member management',
      'COUNCILConnect — district engagement and policy mapping',
      'VALLEYAlliance — San Fernando Valley coalition platform',
      'BUSINESSSourceLA — GCP-powered business development tools',
    ],
  },
  {
    id: '04',
    title: 'Enterprise Governance & Compliance',
    summary: 'Multi-entity governance frameworks with audit trails, role separation, and compliance controls.',
    items: [
      'Entity Firewall Protocol — cross-entity isolation and access control',
      'MEAP governance runtime (BLOCK / ADVISE / LOG levels)',
      'Audit event capture: create, update, delete, approve, publish, retire',
      'RBAC with requester / approver / deployer / auditor separation',
      'Delivery manifests, BRDs, RACI matrices, and handoff documentation',
    ],
  },
  {
    id: '05',
    title: 'Infrastructure & Platform Engineering',
    summary: 'ACoolVERTICAL infrastructure layer — shared services powering the entire ecosystem.',
    items: [
      'pnpm monorepo architecture for multi-product platforms',
      'Google Cloud Platform — 17 project orchestration and consolidation',
      'Firebase (Auth, Firestore, Functions, Storage) at scale',
      'Container strategy and Docker/ECR management',
      'Environment governance and secret management',
    ],
  },
  {
    id: '06',
    title: 'Innovation Research & AR/XR',
    summary: 'Emerging technology applied to real-world civic and sports infrastructure challenges.',
    items: [
      'LA84 ACoolLENS — AR digital twin of LA84 Foundation facilities',
      'WebXR and Autodesk Forge integration',
      'NIL and trading card platform for student-athlete economic empowerment',
      'Knowledge base and semantic search systems',
      'Strategic partnership development (CSUN, LA84, city agencies)',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-16">
          <p className="section-label mb-3">What I Do</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Services</h1>
          <div className="orange-rule max-w-xs" />
          <p className="mt-6 text-chrome-400 max-w-2xl leading-relaxed">
            From greenfield architecture to production deployment — I design, build, and govern technology systems for enterprises, nonprofits, and civic institutions.
          </p>
        </header>

        {/* Service list */}
        <div className="space-y-px bg-white/5">
          {services.map(({ id, title, summary, items }) => (
            <article key={id} className="card-surface p-8 md:p-10 group">
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                <span className="font-mono text-xs text-orange opacity-60 shrink-0 md:pt-1">{id}</span>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange transition-colors duration-200">
                    {title}
                  </h2>
                  <p className="text-chrome-400 text-sm mb-6 leading-relaxed">{summary}</p>
                  <ul className="space-y-2" role="list">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-chrome-400">
                        <span className="w-1 h-1 rounded-full bg-orange mt-2 shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 p-8 border border-orange/20 bg-orange/5">
          <div>
            <h2 className="text-xl font-bold text-white">Have a project in mind?</h2>
            <p className="text-sm text-chrome-400 mt-1">Let&apos;s scope it out and build a plan.</p>
          </div>
          <Link href="/contact" className="btn-primary shrink-0">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}

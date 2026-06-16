import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Active projects across the ACool Ecosystem — civic tech, AI agents, enterprise platforms, and more.',
}

type Status = 'Active' | 'Building' | 'Planning' | 'Research'

interface Project {
  name: string
  cluster: string
  status: Status
  description: string
  stack: string[]
  href?: string
}

const projects: Project[] = [
  {
    name: 'ACoolai',
    cluster: 'AI Infrastructure',
    status: 'Active',
    description: 'Multi-agent AI platform powering the ACool Ecosystem — 6 specialized agents, 9,875-node knowledge graph, and Claude-backed orchestration.',
    stack: ['Python', 'Claude API', 'graphify', 'Firebase'],
    href: 'https://github.com/acoolnerd/acool_ai',
  },
  {
    name: 'CITYHALLConnect',
    cluster: 'ACoolCITY',
    status: 'Building',
    description: 'Resident-facing portal for LA city services — permit tracking, department directory, and service request routing.',
    stack: ['Next.js', 'Firebase', 'TypeScript'],
  },
  {
    name: 'CHAMBERConnect',
    cluster: 'ACoolCITY',
    status: 'Building',
    description: 'Business member portal and resource hub for chamber of commerce organizations across the San Fernando Valley.',
    stack: ['Next.js', 'Firebase', 'Node.js'],
  },
  {
    name: 'COUNCILConnect',
    cluster: 'ACoolCITY',
    status: 'Planning',
    description: 'District engagement platform connecting city council offices with constituents — policy tracking, events, and feedback channels.',
    stack: ['Next.js', 'Firebase', 'TypeScript'],
  },
  {
    name: 'VALLEYAlliance',
    cluster: 'ACoolCITY',
    status: 'Planning',
    description: 'Coalition platform for San Fernando Valley organizations — resource sharing, event coordination, and cross-agency collaboration.',
    stack: ['Next.js', 'Firebase', 'Tailwind'],
  },
  {
    name: 'BUSINESSSourceLA',
    cluster: 'Business Development',
    status: 'Building',
    description: 'GCP-powered business development platform mapped to la-county-biz-path infrastructure — tools, resources, and connectivity for LA businesses.',
    stack: ['GCP', 'Firebase', 'Next.js'],
  },
  {
    name: 'LA84 ACoolLENS',
    cluster: 'Innovation & AR',
    status: 'Research',
    description: 'Augmented reality digital twin of LA84 Foundation facilities — AR overlays, spatial data, and Autodesk Forge integration for WebXR.',
    stack: ['WebXR', 'Autodesk Forge', 'Three.js', 'Next.js'],
  },
  {
    name: 'ValleyNonprofit Resource',
    cluster: 'Civic Impact',
    status: 'Planning',
    description: 'Mobile-first app connecting San Fernando Valley nonprofits with volunteers, funding sources, and shared infrastructure.',
    stack: ['React Native', 'Firebase', 'Node.js'],
  },
  {
    name: 'ACoolCLINIC',
    cluster: 'Health',
    status: 'Planning',
    description: 'HIPAA-compliant health platform — patient management, provider directory, and intake flows with full audit trail.',
    stack: ['Next.js', 'Firebase', 'TypeScript'],
  },
  {
    name: 'ACoolNERD.com',
    cluster: 'Brand',
    status: 'Building',
    description: 'This site — enterprise consulting brand for Keith Z. C. McPherson. Next.js · Tailwind · Vercel · dark mode · ACool Orange.',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    href: 'https://github.com/acoolnerd/ACoolNERD',
  },
]

const statusColor: Record<Status, string> = {
  Active: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Building: 'text-orange bg-orange/10 border-orange/20',
  Planning: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Research: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
}

export default function ProjectsPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-16">
          <p className="section-label mb-3">ACool Ecosystem</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h1>
          <div className="orange-rule max-w-xs" />
          <p className="mt-6 text-chrome-400 max-w-2xl leading-relaxed">
            22 active entities across 9 clusters — from AI infrastructure and civic tech to health platforms and AR innovation. All governed under the ACoolTRUST framework.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mt-6" aria-label="Status legend">
            {(Object.keys(statusColor) as Status[]).map((s) => (
              <span
                key={s}
                className={`inline-flex items-center px-2.5 py-1 text-xs font-mono border rounded-full ${statusColor[s]}`}
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {projects.map(({ name, cluster, status, description, stack, href }) => (
            <article key={name} className="card-surface p-7 flex flex-col gap-4 group hover:border-orange/25 transition-colors duration-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-chrome-600 font-mono mb-1">{cluster}</p>
                  <h2 className="text-lg font-bold text-white group-hover:text-orange transition-colors duration-200">
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">
                        {name}
                      </a>
                    ) : name}
                  </h2>
                </div>
                <span
                  className={`shrink-0 inline-flex items-center px-2 py-0.5 text-xs font-mono border rounded-full ${statusColor[status]}`}
                  aria-label={`Status: ${status}`}
                >
                  {status}
                </span>
              </div>

              <p className="text-sm text-chrome-400 leading-relaxed flex-1">{description}</p>

              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/5">
                {stack.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-chrome-600 px-2 py-0.5 bg-white/5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-chrome-400 text-sm mb-6">
            Have a project that fits one of these clusters?
          </p>
          <Link href="/contact" className="btn-primary">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  )
}

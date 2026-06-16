'use client'

import { useState, type FormEvent } from 'react'

const projectTypes = [
  'AI Systems & Automation',
  'Digital Architecture',
  'Civic Technology',
  'Enterprise Governance',
  'Infrastructure & Platform',
  'Innovation / AR / XR',
  'Other',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    // Formspree / Netlify / server action can replace this stub
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-16">
          <p className="section-label mb-3">Let&apos;s Build</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact</h1>
          <div className="orange-rule max-w-xs" />
          <p className="mt-6 text-chrome-400 max-w-xl leading-relaxed">
            Whether you have a fully scoped project or just an idea — reach out. I respond within one business day.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="card-surface p-10 text-center space-y-4">
                <div className="w-10 h-10 rounded-full border-2 border-orange flex items-center justify-center mx-auto">
                  <span className="text-orange text-lg" aria-hidden="true">&#10003;</span>
                </div>
                <h2 className="text-xl font-bold text-white">Message received.</h2>
                <p className="text-sm text-chrome-400">
                  I&apos;ll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Contact form"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-chrome-400 mb-2 tracking-wider uppercase">
                      Name <span aria-hidden="true" className="text-orange">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full bg-chrome-900/50 border border-white/10 focus:border-orange/50 text-chrome-100 text-sm px-4 py-3 outline-none transition-colors duration-150 placeholder:text-chrome-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-chrome-400 mb-2 tracking-wider uppercase">
                      Email <span aria-hidden="true" className="text-orange">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full bg-chrome-900/50 border border-white/10 focus:border-orange/50 text-chrome-100 text-sm px-4 py-3 outline-none transition-colors duration-150 placeholder:text-chrome-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="org" className="block text-xs font-mono text-chrome-400 mb-2 tracking-wider uppercase">
                    Organization
                  </label>
                  <input
                    id="org"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    className="w-full bg-chrome-900/50 border border-white/10 focus:border-orange/50 text-chrome-100 text-sm px-4 py-3 outline-none transition-colors duration-150 placeholder:text-chrome-600"
                    placeholder="Company or org (optional)"
                  />
                </div>

                <fieldset>
                  <legend className="block text-xs font-mono text-chrome-400 mb-3 tracking-wider uppercase">
                    Project Type
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <label key={type} className="cursor-pointer">
                        <input type="radio" name="projectType" value={type} className="sr-only peer" />
                        <span className="inline-block px-3 py-1.5 text-xs font-mono border border-white/10 text-chrome-400 peer-checked:border-orange peer-checked:text-orange hover:border-white/30 transition-colors duration-150">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-chrome-400 mb-2 tracking-wider uppercase">
                    Message <span aria-hidden="true" className="text-orange">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-chrome-900/50 border border-white/10 focus:border-orange/50 text-chrome-100 text-sm px-4 py-3 outline-none transition-colors duration-150 placeholder:text-chrome-600 resize-y"
                    placeholder="Tell me about your project, timeline, and goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-red-400">
                    Something went wrong. Try emailing directly at hello@acoolnerd.com
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-8">
            <div className="card-surface p-7 space-y-5">
              <p className="section-label">Direct Contact</p>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-mono text-chrome-600 mb-1">Email</dt>
                  <dd>
                    <a
                      href="mailto:hello@acoolnerd.com"
                      className="text-sm text-chrome-200 hover:text-orange transition-colors"
                    >
                      hello@acoolnerd.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-mono text-chrome-600 mb-1">GitHub</dt>
                  <dd>
                    <a
                      href="https://github.com/acoolnerd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-chrome-200 hover:text-orange transition-colors"
                    >
                      @acoolnerd
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-mono text-chrome-600 mb-1">Location</dt>
                  <dd className="text-sm text-chrome-200">Los Angeles, California</dd>
                </div>
                <div>
                  <dt className="text-xs font-mono text-chrome-600 mb-1">Response Time</dt>
                  <dd className="text-sm text-chrome-200">Within 1 business day</dd>
                </div>
              </dl>
            </div>

            <div className="card-surface p-7 space-y-4">
              <p className="section-label">Good Fit For</p>
              <ul className="space-y-2 text-sm text-chrome-400" role="list">
                {[
                  'Enterprise technology audits',
                  'AI system design and integration',
                  'Civic and nonprofit platforms',
                  'Multi-entity governance frameworks',
                  'GCP / Firebase architecture',
                  'Strategic tech partnerships (CSUN, LA84, city agencies)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-orange mt-2 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

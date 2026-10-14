'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

const projectTypes = [
  'AI Systems & Automation',
  'Digital Architecture',
  'Civic Technology',
  'Technology Governance',
  'Infrastructure & Platform',
  'Other',
]

export default function ContactPage() {
  const [draftOpened, setDraftOpened] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const organization = String(form.get('organization') ?? '').trim()
    const type = String(form.get('projectType') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, organization && `Organization: ${organization}`, type && `Project type: ${type}`, '', message]
        .filter(Boolean)
        .join('\n'),
    )

    setDraftOpened(true)
    window.location.href = `mailto:hello@acoolnerd.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mb-14">
          <p className="section-label mb-3">Start a conversation</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Contact</h1>
          <div className="chrome-rule mt-6 max-w-xs" aria-hidden="true" />
          <p className="mt-6 max-w-xl leading-relaxed text-chrome-400">
            Share a little about the work you have in mind. Your email app will open a draft that you can review and send.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Prepare an email inquiry">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-mono uppercase tracking-wider text-chrome-400">Name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" className="contact-input" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-mono uppercase tracking-wider text-chrome-400">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="contact-input" />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="mb-2 block text-xs font-mono uppercase tracking-wider text-chrome-400">Organization <span className="normal-case tracking-normal text-chrome-600">(optional)</span></label>
                <input id="organization" name="organization" type="text" autoComplete="organization" className="contact-input" />
              </div>

              <fieldset>
                <legend className="mb-3 block text-xs font-mono uppercase tracking-wider text-chrome-400">Area of interest <span className="normal-case tracking-normal text-chrome-600">(optional)</span></legend>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <label key={type} className="cursor-pointer">
                      <input type="radio" name="projectType" value={type} className="peer sr-only" />
                      <span className="inline-block border border-white/15 px-3 py-2 text-xs text-chrome-400 transition-colors hover:border-white/40 peer-checked:border-white/70 peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white">{type}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-wider text-chrome-400">What would you like to work on?</label>
                <textarea id="message" name="message" required rows={6} className="contact-input resize-y" />
              </div>

              <button type="submit" className="btn-primary">Prepare email <span aria-hidden="true">↗</span></button>
              {draftOpened && <p role="status" className="text-sm text-chrome-300">Your email app should open a draft. The message has not been sent; review it and press Send in your email app.</p>}
            </form>
          </div>

          <aside className="space-y-7 lg:col-span-2">
            <div className="card-surface p-7">
              <p className="section-label">Direct contact</p>
              <a href="mailto:hello@acoolnerd.com" className="mt-4 inline-block text-lg text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">hello@acoolnerd.com</a>
              <p className="mt-4 text-sm leading-relaxed text-chrome-400">Or write directly from your email app. Engagement availability and timing can be confirmed in the reply.</p>
            </div>
            <div className="card-surface p-7">
              <p className="section-label">A useful first note</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-chrome-400">
                <li>What are you trying to make easier or possible?</li>
                <li>Who needs to use the system?</li>
                <li>What is already in place?</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'

const capabilities = [
  {
    id: 'architecture',
    label: 'Digital architecture',
    detail: 'Map the system before choosing the tools: boundaries, data flows, responsibilities, and the path to delivery.',
    position: 'node--north',
  },
  {
    id: 'ai',
    label: 'AI and automation',
    detail: 'Identify a bounded workflow where AI can help, then define the human review and operational controls around it.',
    position: 'node--east',
  },
  {
    id: 'civic',
    label: 'Civic technology',
    detail: 'Design digital services around the people and organizations that need to use them.',
    position: 'node--south',
  },
  {
    id: 'governance',
    label: 'Technology governance',
    detail: 'Make ownership, access, approvals, and evidence part of the architecture from the start.',
    position: 'node--west',
  },
]

export default function CapabilityConstellation() {
  const [selected, setSelected] = useState(capabilities[0])

  return (
    <section className="capability-map" aria-labelledby="capability-map-title">
      <div className="capability-map__heading">
        <span className="section-label">A connected practice</span>
        <h2 id="capability-map-title">Start with the system.</h2>
      </div>

      <div className="capability-map__layout">
        <div className="capability-scene" aria-hidden="true">
          <div className="capability-scene__rings" />
          <div className="capability-scene__core">ACN</div>
          {capabilities.map((capability) => (
            <span key={capability.id} className={`capability-scene__node ${capability.position}`} />
          ))}
        </div>

        <div className="capability-map__content">
          <div className="capability-map__choices" aria-label="Areas of practice">
            {capabilities.map((capability) => (
              <button
                key={capability.id}
                type="button"
                className="capability-map__choice"
                aria-pressed={selected.id === capability.id}
                onClick={() => setSelected(capability)}
              >
                <span className="capability-map__index" aria-hidden="true">
                  {String(capabilities.indexOf(capability) + 1).padStart(2, '0')}
                </span>
                {capability.label}
                <span aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <p className="capability-map__detail" aria-live="polite">{selected.detail}</p>
          <p className="capability-map__note">The map is visual context. Every area and explanation is available as text.</p>
        </div>
      </div>
    </section>
  )
}

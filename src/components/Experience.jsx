import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const experience = [
  {
    number: '01',
    company: 'UBER',
    role: 'INTERN — UI/UX & MARKETING',
    period: 'JUN 2024 — AUG 2024',
    location: 'CHENNAI, INDIA · REMOTE',
    tags: ['FIGMA', 'UI/UX', 'PRODUCT RESEARCH', 'MARKETING'],
    bullets: [
      'Designed wireframes and interactive prototypes in Figma for Uber\'s local rider experience.',
      'Analyzed user feedback and app analytics to identify pain points and recommend design enhancements.',
      'Collaborated with cross-functional teams across design, marketing, and analytics.',
      'Supported marketing team in crafting content strategies for local engagement campaigns.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 py-24"
      style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Column grid */}
      <div className="col-grid">
        <div /><div /><div /><div />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="section-label mb-3 flex items-center gap-2">
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span> EXPERIENCE
            </div>
            <h2
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: '#fff',
                lineHeight: 0.9,
              }}
            >
              WHERE<br />I'VE WORKED
            </h2>
          </div>
          <p
            style={{
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.25)',
              maxWidth: '180px',
              textAlign: 'right',
              lineHeight: 1.7,
            }}
          >
            HANDS-ON EXPERIENCE<br />IN DESIGN & PRODUCT
          </p>
        </div>

        <div className="thin-line mb-0" />

        {experience.map((e, i) => (
          <motion.div
            key={e.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.1 }}
            className="work-card"
            style={{ borderTop: 'none', marginTop: '-1px' }}
          >
            <div className="px-0 py-8 grid md:grid-cols-12 gap-6 items-start">

              {/* Number */}
              <div className="md:col-span-1">
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'rgba(255,255,255,0.2)',
                    fontFamily: 'monospace',
                  }}
                >
                  {e.number}
                </span>
              </div>

              {/* Company + tags */}
              <div className="md:col-span-4">
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 800,
                    fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: '4px',
                    lineHeight: 1.1,
                  }}
                >
                  {e.company}
                </h3>
                <p
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: '4px',
                  }}
                >
                  {e.role}
                </p>
                <p
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.2)',
                    marginBottom: '14px',
                  }}
                >
                  {e.period} · {e.location}
                </p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: '8px',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.4)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '3px 8px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullet points */}
              <div className="md:col-span-6">
                <div className="space-y-3">
                  {e.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', marginTop: '1px', flexShrink: 0 }}>—</span>
                      <p
                        style={{
                          fontSize: '11px',
                          lineHeight: 1.75,
                          color: 'rgba(255,255,255,0.38)',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex justify-end">
                <ArrowUpRight size={14} color="rgba(255,255,255,0.25)" />
              </div>

            </div>
            <div className="thin-line" />
          </motion.div>
        ))}

      </div>
    </section>
  )
}

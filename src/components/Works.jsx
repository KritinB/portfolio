import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const works = [
  {
    number: '01',
    title: 'INVESTPRO',
    subtitle: 'AI-ASSISTED INVESTMENT ANALYSIS WEB PROTOTYPE',
    tags: ['HTML', 'CSS', 'GENERATIVE AI', 'GITHUB'],
    desc: 'Designed and developed a functional prototype using AI-assisted development tools. Integrated generative AI for simulated financial analysis and insight generation.',
    year: '2024',
  },
  {
    number: '02',
    title: 'PYTHON PROJECTS',
    subtitle: 'LOGIC-BASED PRACTICE PROGRAMS',
    tags: ['PYTHON', 'FUNCTIONS', 'DATA STRUCTURES'],
    desc: 'Built small programs using functions, loops, and basic data structures to develop logic-based thinking and strengthen programming fundamentals.',
    year: '2024',
  },
]

function WorkCard({ w, i }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      key={w.number}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: i * 0.1 }}
      className="work-card"
      style={{ borderTop: 'none', marginTop: '-1px', background: hovered ? 'rgba(255,255,255,0.02)' : 'transparent', transition: 'background 0.3s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="px-0 py-8 grid md:grid-cols-12 gap-6 items-start">

        {/* Number */}
        <div className="md:col-span-1">
          <motion.span
            animate={{ x: hovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: 'block',
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.15em',
              color: hovered ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.2)',
              fontFamily: 'monospace',
              transition: 'color 0.2s',
            }}
          >
            {w.number}
          </motion.span>
        </div>

        {/* Title + tags */}
        <div className="md:col-span-5">
          <h3
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.1rem, 2vw, 1.6rem)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#fff',
              marginBottom: '6px',
              lineHeight: 1.1,
            }}
          >
            {w.title}
          </h3>
          <p
            style={{
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '14px',
            }}
          >
            {w.subtitle}
          </p>
          <div className="flex flex-wrap gap-2">
            {w.tags.map(t => (
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

        {/* Description */}
        <div className="md:col-span-5">
          <p
            style={{
              fontSize: '11px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.38)',
              letterSpacing: '0.03em',
            }}
          >
            {w.desc}
          </p>
        </div>

        {/* Year + arrow */}
        <div className="md:col-span-1 flex flex-col items-end gap-3">
          <span style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>
            {w.year}
          </span>
          <motion.div animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }} transition={{ duration: 0.2 }}>
            <ArrowUpRight size={14} color={hovered ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.25)'} />
          </motion.div>
        </div>

      </div>
      <div className="thin-line" />
    </motion.div>
  )
}

export default function Works() {
  return (
    <section
      id="works"
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
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span> WORKS
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
              SELECTED<br />PROJECTS
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
            REAL PROJECTS BUILT<br />WITH AI-ASSISTED TOOLS
          </p>
        </div>

        <div className="thin-line mb-0" />

        {works.map((w, i) => (
          <WorkCard key={w.number} w={w} i={i} />
        ))}

      </div>
    </section>
  )
}

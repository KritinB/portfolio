import { motion } from 'framer-motion'

const education = [
  {
    institution: 'Woxsen University',
    degree: 'BSc Computer Science — Data Science & AI',
    period: '2026 — 2030',
  },
  {
    institution: 'APL Global School',
    degree: 'AS & A Levels — Math, CS, Business',
    period: '2024 — 2026',
  },
]

export default function Education() {
  return (
    <motion.div
      id="education"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-6 py-8"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <span className="section-label flex items-center gap-2 flex-shrink-0">
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span> EDUCATION
          </span>
          {education.map((e, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <span style={{ color: 'rgba(255,255,255,0.1)', fontSize: '12px' }}>|</span>}
              <div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.03em' }}>
                  {e.institution}
                </span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', margin: '0 8px' }}>—</span>
                <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.03em' }}>
                  {e.degree}
                </span>
                <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.2)', margin: '0 8px', letterSpacing: '0.06em' }}>
                  {e.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

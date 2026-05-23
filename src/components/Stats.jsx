import { motion } from 'framer-motion'

const stats = [
  { label: 'LOCATION', value: 'CHENNAI, INDIA' },
  { label: 'FIELD', value: 'DEVELOPMENT' },
  { label: 'APPROACH', value: 'BUILD & LEARN' },
  { label: 'FOCUS', value: 'WEB & AI APPS' },
]

export default function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="px-6 py-5"
            style={{
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}
          >
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">{s.value}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

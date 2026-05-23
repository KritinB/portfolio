import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-24"
      style={{ background: '#0A0A0A' }}
    >
      {/* Column grid */}
      <div className="col-grid">
        <div /><div /><div /><div />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="section-label mb-10 flex items-center gap-2">
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span> CONTACT
        </div>

        {/* Big CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 4rem)',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 0.9,
            }}
          >
            LET'S<br />
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>CONNECT.</span>
          </h2>
        </motion.div>

        <div className="thin-line mb-10" />

        {/* Links row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-0"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {[
            {
              icon: Mail,
              label: 'EMAIL',
              value: 'kritinbysani555@gmail.com',
              href: 'mailto:kritinbysani555@gmail.com',
            },
            {
              icon: Linkedin,
              label: 'LINKEDIN',
              value: 'kritin-bysani',
              href: 'https://linkedin.com/in/kritin-bysani',
            },
            {
              icon: Github,
              label: 'GITHUB',
              value: 'KritinB',
              href: 'https://github.com/KritinB',
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6"
                style={{
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                <div className="flex items-center gap-3">
                  <Icon size={14} color="rgba(255,255,255,0.25)" />
                  <div>
                    <div className="stat-label" style={{ marginBottom: '3px' }}>{item.label}</div>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: 500,
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.03em',
                        transition: 'color 0.2s',
                      }}
                      className="group-hover:text-white"
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={12} color="rgba(255,255,255,0.2)" />
              </a>
            )
          })}
        </motion.div>

        {/* Footer bottom bar */}
        <div className="thin-line mt-16 mb-6" />
        <div className="flex items-center justify-between">
          <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
            KRITIN BYSANI
          </span>
          <p style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>
            © 2025 — CHENNAI, INDIA
          </p>
          <p style={{ fontSize: '9px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.15)' }}>
            ASPIRING DEVELOPER
          </p>
        </div>

      </div>
    </section>
  )
}

import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 80])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: '100vh', background: '#0A0A0A' }}
    >
      {/* Column grid overlay */}
      <div className="col-grid">
        <div /><div /><div /><div />
      </div>

      {/* Warm spotlight background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 55% 60% at 50% 38%,
              #6B1212 0%,
              #3A0808 30%,
              #1A0404 55%,
              #0A0A0A 80%
            )
          `,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, transparent 35%, transparent 60%, rgba(10,10,10,0.7) 100%)',
        }}
      />

      {/* Crosshairs */}
      <span className="crosshair absolute" style={{ top: '44px', left: '25%' }} />
      <span className="crosshair absolute" style={{ top: '44px', right: '25%' }} />
      <span className="crosshair absolute" style={{ bottom: '80px', left: '25%' }} />
      <span className="crosshair absolute" style={{ bottom: '80px', right: '25%' }} />

      {/* Description text — upper right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{ opacity, position: 'absolute', zIndex: 20, top: '80px', right: '28px', maxWidth: '220px', textAlign: 'right' }}
      >
        <p
          style={{
            fontSize: '9.5px',
            lineHeight: 1.8,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.38)',
          }}
        >
          BUILDING, LEARNING, AND<br />
          EXPERIMENTING WITH AI-POWERED<br />
          PRODUCTS, MODERN SOFTWARE,<br />
          AND DIGITAL EXPERIENCES<br />
          DESIGNED FOR REAL-WORLD IMPACT.
        </p>
      </motion.div>

      {/* KRITIN'S / PORTFOLIO — parallax on scroll */}
      <motion.div
        className="absolute z-20 w-full"
        style={{ bottom: '18%', paddingLeft: '8%', y }}
      >
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-name" style={{ display: 'block', textAlign: 'left' }}>
            KRITIN'S
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-name" style={{ display: 'block', textAlign: 'left' }}>
            PORTFOLIO
          </span>
        </motion.div>
      </motion.div>

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ opacity, position: 'absolute', zIndex: 20, left: '24px', bottom: '24px' }}
      >
        <motion.div
          whileHover={{ borderColor: 'rgba(255,255,255,0.5)' }}
          className="inline-flex items-center gap-2 px-3 py-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.18)', transition: 'border-color 0.3s' }}
        >
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px' }}>✦</span>
          <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
            ASPIRING DEVELOPER
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}

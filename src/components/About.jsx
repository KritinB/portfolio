import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="relative px-6 py-24"
      style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Column grid */}
      <div className="col-grid">
        <div /><div /><div /><div />
      </div>

      {/* Crosshairs */}
      <span className="crosshair absolute" style={{ top: '0', left: '25%', transform: 'translateY(-50%)' }} />
      <span className="crosshair absolute" style={{ top: '0', right: '25%', transform: 'translateY(-50%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section label */}
        <div className="section-label mb-10 flex items-center gap-2">
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>•</span> ABOUT
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* Left: big text */}
          <div className="md:col-span-2">
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
            >
              I'M AN ASPIRING DEVELOPER FROM CHENNAI, BUILDING REAL PROJECTS WITH AI-ASSISTED TOOLS. I TURN MESSY IDEAS INTO CLEAN, FUNCTIONAL THINGS THAT ACTUALLY WORK.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-12"
            >
              <div className="thin-line mb-8" />
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)',
                }}
              >
                THE PROCESS SO FAR
              </p>
            </motion.div>

            {/* Skills grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              {[
                ['Python', 'Functions, loops, data structures'],
                ['HTML & CSS', 'Functional interfaces'],
                ['AI-Assisted Dev', 'Generative AI & LLM workflows'],
                ['GitHub', 'Version control & repos'],
                ['Figma', 'Wireframes & prototypes'],
                ['Blender', 'Basic 3D modelling'],
              ].map(([skill, desc], i) => (
                <div
                  key={skill}
                  className="py-3 px-4"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      marginBottom: '3px',
                    }}
                  >
                    {skill}
                  </div>
                  <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.06em' }}>
                    {desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: styled card (photo placeholder) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="md:col-span-1"
          >
            <div
              className="w-full aspect-[3/4]"
              style={{
                background: 'radial-gradient(ellipse 80% 70% at 50% 40%, #6B1212 0%, #2D0808 50%, #0A0A0A 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle grid inside card */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                  backgroundSize: '30px 30px',
                }}
              />
              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 900,
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    color: 'rgba(255,255,255,0.08)',
                    letterSpacing: '-0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  KB
                </span>
              </div>
            </div>

            {/* Caption below card */}
            <p
              className="mt-3"
              style={{
                fontSize: '11px',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              Hi, I'm Kritin — currently learning and building in AI and software development.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

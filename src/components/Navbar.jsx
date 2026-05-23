import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = ['HOME', 'ABOUT', 'EXPERIENCE', 'WORKS', 'CONTACT']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.97)' : '#0A0A0A',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{
          scaleX,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255,255,255,0.4)',
          transformOrigin: '0%',
        }}
      />

      <div className="flex items-center justify-between px-6 h-11">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="flex items-center"
        >
          <div
            className="w-5 h-5 flex items-center justify-center"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}
          >
            <span style={{ fontSize: '8px', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>KB</span>
          </div>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="relative group"
              style={{ textDecoration: 'none' }}
            >
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.target.style.color = '#fff' }}
                onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.45)' }}
              >
                {l}
              </span>
              {/* Animated underline */}
              <span
                className="absolute left-0 bottom-[-2px] h-px bg-white"
                style={{
                  width: '0%',
                  transition: 'width 0.25s ease',
                }}
                onMouseEnter={e => { e.target.style.width = '100%' }}
                onMouseLeave={e => { e.target.style.width = '0%' }}
              />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center gap-2"
          style={{
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '6px 14px',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000'; e.currentTarget.style.borderColor = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
        >
          GET IN TOUCH <ArrowRight size={11} />
        </motion.a>

        {/* Mobile burger */}
        <button className="md:hidden p-1" onClick={() => setOpen(!open)} style={{ color: '#fff' }}>
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', background: '#0A0A0A' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" onClick={() => setOpen(false)}>{l}</a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'

const links = ['HOME', 'ABOUT', 'EXPERIENCE', 'WORKS', 'CONTACT']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
      <div className="flex items-center justify-between px-6 h-11">

        {/* Logo */}
        <div className="flex items-center">
          <div
            className="w-5 h-5 flex items-center justify-center"
            style={{ border: '1px solid rgba(255,255,255,0.25)' }}
          >
            <span style={{ fontSize: '8px', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>KB</span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
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
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#000' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff' }}
        >
          GET IN TOUCH <ArrowRight size={11} />
        </a>

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

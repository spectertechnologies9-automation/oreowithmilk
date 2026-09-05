import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { scrollToTarget } from '../hooks/useLenis'
import './Navbar.css'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    if (href === '#top') {
      scrollToTarget(0)
    } else {
      scrollToTarget(href)
    }
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="navbar-inner container">
          <a href="#top" className="navbar-logo" data-cursor="hover" onClick={(e) => handleLinkClick(e, '#top')}>
            SPECTER <span className="navbar-logo-thin">AUTOMATIONS</span>
          </a>

          <nav className="navbar-links hide-on-touch">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="navbar-link"
                data-cursor="hover"
                onClick={(e) => handleLinkClick(e, l.href)}
              >
                <span>{l.label}</span>
              </a>
            ))}
          </nav>

          <button
            className={`navbar-burger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="mobile-menu-links">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleLinkClick(e, l.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="mobile-menu-index">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mobile-menu-footer">
              <span>hello@specterautomations.ai</span>
              <span>Based in — Remote / Worldwide</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

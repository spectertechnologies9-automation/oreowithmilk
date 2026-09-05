import { scrollToTarget } from '../hooks/useLenis'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = (e) => {
    e.preventDefault()
    scrollToTarget(0)
  }

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">© {year} Specter Automations. All systems operational.</p>

        <button className="footer-top" onClick={scrollTop} data-cursor="hover">
          Back to top
          <span className="footer-top-arrow">↑</span>
        </button>
      </div>
    </footer>
  )
}

import { scrollToTarget } from '../hooks/useLenis'
import './SideBadge.css'

export default function SideBadge() {
  return (
    <a
      href="#contact"
      className="side-badge hide-on-touch"
      data-cursor="hover"
      onClick={(e) => {
        e.preventDefault()
        scrollToTarget('#contact')
      }}
    >
      <span className="side-badge-dot" />
      <span className="side-badge-text">Open for new builds</span>
    </a>
  )
}

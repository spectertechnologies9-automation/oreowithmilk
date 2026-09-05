import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import SectionHead from './SectionHead'
import ProjectItem from './ProjectItem'
import './Projects.css'

const PROJECTS = [
  {
    n: '01',
    name: 'Retail Business Chatbot with Active Alerts',
    tagline: 'WhatsApp-based business automation and intelligent inventory workflows.',
    meta: 'Retail · WhatsApp Commerce',
    year: '2026',
    swatch: 'swatch-1',
  },
  {
    n: '02',
    name: 'AI Healthcare Assistant',
    tagline: 'An AI conversational system designed for healthcare businesses.',
    meta: 'Healthcare · Conversational AI',
    year: '2025',
    swatch: 'swatch-2',
  },
  {
    n: '03',
    name: 'NFC Loyalty System',
    tagline: 'A modern NFC-powered loyalty and customer engagement platform.',
    meta: 'Retail · NFC / Mobile',
    year: '2025',
    swatch: 'swatch-3',
  },
  {
    n: '04',
    name: 'Specter AI',
    tagline: 'Intelligent automation infrastructure for modern businesses.',
    meta: 'Platform · Infrastructure',
    year: '2026',
    swatch: 'swatch-4',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)
  const listRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 28, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 260, damping: 28, mass: 0.5 })

  const onMouseMove = (e) => {
    const rect = listRef.current.getBoundingClientRect()
    x.set(e.clientX - rect.left)
    y.set(e.clientY - rect.top)
  }

  return (
    <section className="projects" id="work">
      <div className="container">
        <SectionHead label="Selected Work" count={`(0${PROJECTS.length})`} />
      </div>

      <div
        className="projects-list container"
        ref={listRef}
        onMouseMove={onMouseMove}
        onMouseLeave={() => setHovered(null)}
      >
        {PROJECTS.map((p, i) => (
          <ProjectItem key={p.n} project={p} index={i} onHover={setHovered} />
        ))}

        <motion.div
          className="project-preview"
          style={{ x: springX, y: springY }}
          animate={{
            opacity: hovered !== null ? 1 : 0,
            scale: hovered !== null ? 1 : 0.9,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {PROJECTS.map((p, i) => (
            <div
              key={p.n}
              className={`project-preview-face ${p.swatch}`}
              style={{ opacity: hovered === i ? 1 : 0 }}
            >
              <span className="project-preview-index">{p.n}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

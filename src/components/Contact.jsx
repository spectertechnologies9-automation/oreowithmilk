import { motion } from 'framer-motion'
import SectionHead from './SectionHead'
import './Contact.css'

const easeOut = [0.16, 1, 0.3, 1]

function Line({ children, delay }) {
  return (
    <motion.span
      className="contact-title-line"
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.span>
  )
}

const LINKS = [
  { label: 'hello@specterautomations.ai', href: 'mailto:hello@specterautomations.ai' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X / Twitter', href: 'https://x.com' },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHead label="Contact" />

        <h2 className="contact-title">
          <Line delay={0}>Let&apos;s build</Line>
          <Line delay={0.1}>
            <em className="accent-italic">something.</em>
          </Line>
        </h2>

        <div className="contact-links">
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} className="contact-link" data-cursor="hover" target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import './Hero.css'

const easeOut = [0.16, 1, 0.3, 1]

function Line({ children, delay }) {
  return (
    <span className="reveal-mask">
      <motion.span
        className="reveal-mask-inner"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.9, delay, ease: easeOut }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <motion.div
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease: easeOut }}
        >
          <span className="dot" />
          AI AUTOMATION STUDIO — REMOTE
        </motion.div>

        <h1 className="hero-title">
          <Line delay={1.3}>We build systems</Line>
          <Line delay={1.4}>
            that work for <em className="accent-italic">you.</em>
          </Line>
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.75, ease: easeOut }}
        >
          Specter Automations designs and builds intelligent systems that automate
          repetitive work, connect business tools, and create better customer
          experiences.
        </motion.p>
      </div>

      <motion.div
        className="hero-scroll hide-on-touch"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.1 }}
      >
        SCROLL
        <span className="hero-scroll-arrow">↓</span>
      </motion.div>
    </section>
  )
}

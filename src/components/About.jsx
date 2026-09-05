import { Reveal } from './Reveal'
import './About.css'

const FOCUS = ['AI', 'Automation', 'Software', 'Business Systems', 'Customer Experiences']

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-label">
          <span className="eyebrow">
            <span className="dot" />
            About
          </span>
        </div>

        <div className="about-content">
          <Reveal as="h2" className="about-statement">
            Specter Automations is a technology and automation studio building the
            infrastructure behind modern, always-on businesses.
          </Reveal>

          <Reveal as="p" delay={0.1} className="about-paragraph">
            We work at the intersection of AI, automation, and software — designing
            systems that remove repetitive work, connect the tools a business
            already relies on, and give customers a faster, more human way to get
            help. Every engagement starts the same way: understand the workflow,
            find where time is lost, and build something that quietly keeps
            working long after we ship it.
          </Reveal>

          <Reveal as="div" delay={0.2} className="about-focus">
            {FOCUS.map((f, i) => (
              <span className="about-focus-item" key={f}>
                {f}
                {i < FOCUS.length - 1 && <span className="about-focus-sep">·</span>}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

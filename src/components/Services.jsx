import { Reveal } from './Reveal'
import SectionHead from './SectionHead'
import { scrollToTarget } from '../hooks/useLenis'
import './Services.css'

const SERVICES = [
  { n: '01', name: 'AI Chatbots', detail: 'Conversational agents trained on your business.' },
  { n: '02', name: 'WhatsApp Automation', detail: 'Ordering, support & follow-ups, natively in WhatsApp.' },
  { n: '03', name: 'Business Automation', detail: 'Connecting the tools you already use.' },
  { n: '04', name: 'AI Customer Support', detail: 'Always-on support that resolves the routine.' },
  { n: '05', name: 'Workflow Automation', detail: 'Multi-step processes that run themselves.' },
  { n: '06', name: 'NFC Systems', detail: 'Tap-to-engage loyalty & access experiences.' },
  { n: '07', name: 'AI Assistants', detail: 'Internal copilots for research, ops & busywork.' },
  { n: '08', name: 'Custom Software', detail: 'Purpose-built tools, where off-the-shelf falls short.' },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <SectionHead label="Services" count={`(0${SERVICES.length})`} />

        <div className="services-list">
          {SERVICES.map((s, i) => (
            <Reveal as="a" href="#contact" key={s.n} delay={i * 0.03} y={18} amount={0.2} className="service-row" data-cursor="hover"
              onClick={(e) => {
                e.preventDefault()
                scrollToTarget('#contact')
              }}
            >
              <span className="service-n">{s.n}</span>
              <span className="service-name">{s.name}</span>
              <span className="service-detail">{s.detail}</span>
              <span className="service-arrow">→</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

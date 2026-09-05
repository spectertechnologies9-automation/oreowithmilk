import { Reveal } from './Reveal'
import { scrollToTarget } from '../hooks/useLenis'

export default function ProjectItem({ project, index, onHover }) {
  return (
    <Reveal
      as="a"
      href="#contact"
      className="project-item"
      amount={0.15}
      onClick={(e) => {
        e.preventDefault()
        scrollToTarget('#contact')
      }}
      onMouseEnter={() => onHover(index)}
      data-cursor="view"
      data-cursor-text="View"
    >
      <span className="project-item-n">{project.n}</span>

      <span className="project-item-main">
        <span className="project-item-name">{project.name}</span>
        <span className="project-item-tagline">{project.tagline}</span>
      </span>

      <span className="project-item-meta">{project.meta}</span>

      <span className="project-item-year">
        {project.year}
        <span className="project-item-arrow">→</span>
      </span>
    </Reveal>
  )
}

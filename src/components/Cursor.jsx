import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const label = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let started = false

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate(${mx}px, ${my}px)`
      if (!started) {
        started = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
        rx = mx
        ry = my
      }
    }

    let raf
    const tick = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      ring.style.transform = `translate(${rx}px, ${ry}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove)

    const setState = (state, text) => {
      ring.dataset.state = state
      if (text !== undefined && label.current) label.current.textContent = text
    }

    const onOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        setState(target.dataset.cursor || 'hover', target.dataset.cursorText || '')
      }
    }
    const onOut = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) setState('default', '')
    }

    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    const onDown = () => ring.classList.add('is-down')
    const onUp = () => ring.classList.remove('is-down')
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    document.documentElement.classList.add('has-custom-cursor')

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <div className="cursor-layer hide-on-touch" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" data-state="default">
        <span ref={label} className="cursor-ring-label" />
      </div>
    </div>
  )
}

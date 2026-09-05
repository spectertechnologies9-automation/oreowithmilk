import { useEffect } from 'react'
import Lenis from 'lenis'

export default function useLenis() {
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    })

    window.__lenis = lenis

    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      window.__lenis = null
    }
  }, [])
}

export function scrollToTarget(target) {
  const lenis = typeof window !== 'undefined' ? window.__lenis : null
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.2 })
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target
    if (target === 0 || target === '0') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

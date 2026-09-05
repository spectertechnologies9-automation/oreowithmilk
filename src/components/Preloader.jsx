import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Preloader.css'

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const start = performance.now()
    const duration = 1200
    let raf

    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      setCount(Math.round(p * 100))
      if (p < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => setVisible(false), 220)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="preloader-top">
            <span className="preloader-mark">SA</span>
          </div>
          <div className="preloader-count">
            <span>{String(count).padStart(3, '0')}</span>
          </div>
          <div className="preloader-bar">
            <motion.div
              className="preloader-bar-fill"
              animate={{ width: `${count}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { motion } from 'framer-motion'

const easeOut = [0.16, 1, 0.3, 1]

export function Reveal({
  children,
  as = 'div',
  delay = 0,
  y = 28,
  duration = 0.9,
  className,
  once = true,
  amount = 0.3,
  ...rest
}) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: easeOut }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/* Splits text into lines and fades/slides each one up into view.
   Note: keep this as a single motion element per line (not a motion
   element nested inside a separate overflow:hidden wrapper) — nesting
   a whileInView-observed node inside an overflow:hidden ancestor span
   caused the IntersectionObserver-driven animation to silently never
   fire in testing. */
export function RevealLines({ lines, className, delay = 0, stagger = 0.09, once = true }) {
  return (
    <>
      {lines.map((line, i) => (
        <motion.span
          className={`reveal-line ${className || ''}`}
          key={i}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once, amount: 0.3 }}
          transition={{ duration: 0.9, delay: delay + i * stagger, ease: easeOut }}
        >
          {line}
        </motion.span>
      ))}
    </>
  )
}

export function StaggerGroup({ children, className, stagger = 0.06, delay = 0, once = true, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
}

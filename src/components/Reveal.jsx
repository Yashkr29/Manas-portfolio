import { motion } from 'framer-motion'

/** Fade-up on scroll. Reduced motion is handled globally by <MotionConfig reducedMotion="user">. */
export default function Reveal({ children, delay = 0, y = 28, className = '', as = 'div' }) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

export function SectionHeading({ kicker, title, accent, children, className = '' }) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      {kicker && <p className="mb-4 text-[15px] font-semibold text-straw">{kicker}</p>}
      <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
        {title} {accent && <em className="text-straw">{accent}</em>}
      </h2>
      {children && <p className="mt-5 text-lg leading-relaxed text-cream-muted">{children}</p>}
    </Reveal>
  )
}

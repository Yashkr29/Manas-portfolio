import { useEffect, useState } from 'react'
import Ribbons from './Ribbons'

/**
 * Full-screen ribbon trail that follows the cursor.
 * Only on devices with a fine pointer (mouse/trackpad) and when the user hasn't asked for reduced motion.
 */
export default function CursorRibbons() {
  const [enabled, setEnabled] = useState(false)
  const [moved, setMoved] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setEnabled(fine.matches && !calm.matches)
    update()
    fine.addEventListener('change', update)
    calm.addEventListener('change', update)
    return () => {
      fine.removeEventListener('change', update)
      calm.removeEventListener('change', update)
    }
  }, [])

  // Stay invisible until the first mouse move, so no ribbon rests mid-screen on load.
  useEffect(() => {
    if (!enabled || moved) return
    const reveal = () => setMoved(true)
    window.addEventListener('pointermove', reveal, { once: true, passive: true })
    return () => window.removeEventListener('pointermove', reveal)
  }, [enabled, moved])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-[80] transition-opacity duration-500 ${moved ? 'opacity-100' : 'opacity-0'}`}>
      <Ribbons
        colors={['#8e1f24', '#b3343a', '#e3ad4f']}
        thickness={16}
        length={1.2}
        spread={8}
        shape="comet"
        fade
        opacity={0.9}
      />
    </div>
  )
}

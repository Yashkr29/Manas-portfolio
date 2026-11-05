import { useCallback, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Chevron, Close } from './Icons'

/** items: [{ src, title, client?, type? }]; index: number | null */
export default function Lightbox({ items, index, onClose, onChange }) {
  const open = index !== null
  const closeRef = useRef(null)
  const item = open ? items[index] : null

  const step = useCallback(
    (d) => onChange((index + d + items.length) % items.length),
    [index, items.length, onChange],
  )

  useEffect(() => {
    if (!open) return
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      prevFocus?.focus?.()
    }
  }, [open, onClose, step])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-ink-950/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          onClick={onClose}
        >
          <div className="wrap flex h-20 shrink-0 items-center justify-between" onClick={(e) => e.stopPropagation()}>
            <div>
              <p className="display text-xl sm:text-2xl">{item.title}</p>
              {(item.client || item.type) && (
                <p className="text-sm text-cream-muted">{[item.type, item.client].filter(Boolean).join(' · ')}</p>
              )}
            </div>
            <button ref={closeRef} className="icon-btn" onClick={onClose} aria-label="Close">
              <Close />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-8 sm:px-20">
            <AnimatePresence mode="wait">
              <motion.img
                key={item.src}
                src={item.src}
                alt={item.title}
                className="max-h-full max-w-full rounded-xl object-contain"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>
            {items.length > 1 && (
              <>
                <button
                  className="icon-btn absolute left-3 top-1/2 -translate-y-1/2 sm:left-6"
                  onClick={(e) => { e.stopPropagation(); step(-1) }}
                  aria-label="Previous design"
                >
                  <Chevron dir="left" />
                </button>
                <button
                  className="icon-btn absolute right-3 top-1/2 -translate-y-1/2 sm:right-6"
                  onClick={(e) => { e.stopPropagation(); step(1) }}
                  aria-label="Next design"
                >
                  <Chevron />
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

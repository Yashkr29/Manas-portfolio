import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '../data/portfolio'
import NavSearch from './NavSearch'
import { Close, Menu } from './Icons'

// Sections without their own nav link light up their parent link.
const parentOf = { print: 'work', why: 'services' }

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section[id]')]
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(parentOf[e.target.id] ?? e.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])
  return active
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink-950/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="wrap flex h-20 items-center justify-between gap-4">
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-full border border-maroon-hi/50 bg-maroon/25 p-1.5 lg:flex"
        >
          {nav.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  isActive ? 'text-cream' : 'text-cream/75 hover:text-cream'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-maroon"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="min-w-0 flex-1 lg:max-w-[340px] lg:flex-none lg:basis-[340px]">
          <NavSearch width="100%" />
        </div>

        <button className="icon-btn shrink-0 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open}>
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-ink-950 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="wrap flex h-20 items-center justify-end">
              <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close menu">
                <Close />
              </button>
            </div>
            <nav className="wrap mt-4 flex flex-col">
              {nav.map((item, i) => {
                const isActive = active === item.href.slice(1)
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`display flex items-center justify-between border-b border-line py-5 text-4xl ${isActive ? 'text-straw' : ''}`}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {item.label}
                    {isActive && <span className="size-2.5 rounded-full bg-straw" />}
                  </motion.a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

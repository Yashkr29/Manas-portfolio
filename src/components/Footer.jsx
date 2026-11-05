import { motion } from 'framer-motion'
import { nav, profile, whatsappLink } from '../data/portfolio'
import { WhatsApp } from './Icons'
import SocialIcons from './SocialIcons'

const YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-900">
      <div className="wrap py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <a href="#home" className="display text-5xl text-maroon-hi sm:text-6xl">
              {profile.first}<span className="text-straw">.</span>
            </a>
            <p className="mt-3 text-cream-muted">{profile.role} · Visual storytelling for brands</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-cream/85 transition-colors hover:text-straw">{n.label}</a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-line pt-8 text-[14px] text-cream-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} All rights reserved, {profile.name}.</p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  )
}

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Manas on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-ink-950 transition-transform hover:-translate-y-1 sm:bottom-8 sm:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
    >
      <WhatsApp width="28" height="28" />
    </motion.a>
  )
}

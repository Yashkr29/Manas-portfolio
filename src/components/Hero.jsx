import { motion } from 'framer-motion'
import { profile, whatsappLink } from '../data/portfolio'
import SocialIcons from './SocialIcons'
import { WhatsApp } from './Icons'

const YEAR = new Date().getFullYear()

const ease = [0.22, 1, 0.36, 1]
const rise = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
})

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-20">
      {/* The single spotlight from the reference UI */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[18%] -z-10 h-[min(78vh,720px)] w-[min(78vh,720px)] max-w-[110vw] -translate-x-1/2 rounded-full opacity-90 blur-2xl"
        style={{ background: 'radial-gradient(closest-side, rgba(179,52,58,.55), rgba(142,31,36,.18) 55%, transparent 75%)' }}
      />
      {/* Giant outline wordmark behind the portrait */}
      <p
        aria-hidden="true"
        className="display pointer-events-none absolute inset-x-0 top-[22%] -z-10 select-none text-center text-[22vw] leading-none text-transparent lg:top-[16%] lg:text-[17vw]"
        style={{ WebkitTextStroke: '1px rgba(246,236,225,.08)' }}
      >
        DESIGN
      </p>

      <div className="wrap grid min-h-[min(calc(100svh-5rem),900px)] grid-cols-1 items-center gap-y-10 pb-24 pt-8 lg:grid-cols-[1fr_minmax(340px,440px)_1fr] lg:gap-x-8 lg:pb-16 lg:pt-0">
        {/* Left — headline */}
        <div className="text-center lg:text-left">
          <motion.p {...rise(0.1)} className="mb-5 text-[15px] font-semibold text-straw">
            Hi, I'm {profile.name}
          </motion.p>
          <motion.h1 {...rise(0.2)} className="display text-[44px] sm:text-6xl xl:text-7xl">
            Visual <em className="text-straw">Storytelling</em> for Brands
          </motion.h1>
          <motion.p {...rise(0.3)} className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-cream/85 lg:mx-0">
            Graphic designer for jewellery, retail and festive campaigns: identities, social creatives, flyers and
            posters that people stop to look at.
          </motion.p>
          <motion.div {...rise(0.4)} className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#work" className="btn-primary">View My Work</a>
            <a href="#about" className="btn-ghost">Learn More</a>
          </motion.div>
        </div>

        {/* Centre — portrait */}
        <motion.div
          className="mx-auto w-[78%] max-w-[440px] sm:w-[60%] lg:w-full lg:self-end"
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
        >
          <img
            src={profile.portrait}
            alt={`${profile.name}, graphic designer, smiling in a straw hat and maroon kurta`}
            width="1086"
            height="1448"
            fetchPriority="high"
            className="w-full [mask-image:linear-gradient(to_bottom,#000_82%,transparent)]"
          />
        </motion.div>

        {/* Right — CTA */}
        <div className="text-center lg:text-left">
          <motion.h2 {...rise(0.45)} className="display text-4xl sm:text-5xl">
            Got a brand to <em className="text-straw">grow?</em>
          </motion.h2>
          <motion.p {...rise(0.55)} className="mx-auto mt-5 max-w-sm text-[17px] leading-relaxed text-cream/85 lg:mx-0">
            Send a quick message on WhatsApp. I usually reply within a day.
          </motion.p>
          <motion.div {...rise(0.65)} className="mt-8 flex justify-center lg:justify-start">
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="btn-primary">
              <WhatsApp /> Hire Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar, as in the reference */}
      <div className="absolute inset-x-0 bottom-0 hidden lg:block">
        <div className="wrap flex items-center justify-between pb-7 text-[14px] text-cream/80">
          <span>© {YEAR} {profile.name}</span>
          <SocialIcons variant="plain" size={18} />
        </div>
      </div>
    </section>
  )
}

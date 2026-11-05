import { useMemo, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { categories, projects } from '../data/portfolio'
import { SectionHeading } from './Reveal'
import { ArrowUpRight } from './Icons'
import Lightbox from './Lightbox'

export default function Work() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const list = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading kicker="Selected work" title="Featured" accent="Projects">
            Campaigns and creatives for jewellers, retailers, restaurants and festive seasons.
          </SectionHeading>

          <LayoutGroup>
            <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={filter === c}
                  onClick={() => setFilter(c)}
                  className={`relative min-h-11 rounded-full px-5 text-[15px] font-semibold transition-colors ${
                    filter === c ? 'text-cream' : 'text-cream-muted hover:text-cream'
                  }`}
                >
                  {filter === c && (
                    <motion.span layoutId="pill" className="absolute inset-0 -z-0 rounded-full bg-maroon" transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }} />
                  )}
                  <span className="relative">{c}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>
        </div>

        <motion.ul layout className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>li]:mb-5">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.li
                layout
                key={p.id}
                id={`project-${p.id}`}
                className="break-inside-avoid"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  onClick={() => setActive(i)}
                  className="group block w-full text-left"
                  aria-label={`Open ${p.title}`}
                >
                  <div className="overflow-hidden rounded-2xl border border-line bg-ink-800 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <img
                      src={p.src}
                      alt={`${p.title} — ${p.type} for ${p.client}`}
                      loading="lazy"
                      className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4 px-1">
                    <div>
                      <h3 className="display text-xl">{p.title}</h3>
                      <p className="mt-1 text-[15px] text-cream-muted">{p.type} · {p.client}</p>
                    </div>
                    <span className="mt-1 grid size-9 shrink-0 place-items-center rounded-full border border-line text-cream-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-straw group-hover:text-straw">
                      <ArrowUpRight width="16" height="16" />
                    </span>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <Lightbox items={list} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}

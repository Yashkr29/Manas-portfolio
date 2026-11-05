import { useState } from 'react'
import { printWork } from '../data/portfolio'
import Reveal, { SectionHeading } from './Reveal'
import Lightbox from './Lightbox'

export default function PrintWork() {
  const [active, setActive] = useState(null)
  const items = printWork.map((p) => ({ ...p, type: 'Print', client: p.sample }))

  return (
    <section id="print" className="bg-ink-900 py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading kicker="Made for paper" title="Printable" accent="Projects">
          Flyers, business cards and posters, set up for the printer and still easy to read from across the room.
        </SectionHeading>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {printWork.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08} className={i === 1 ? 'md:mt-16' : ''}>
              <button onClick={() => setActive(i)} className="group block w-full text-left" aria-label={`Open ${p.title}: ${p.sample}`}>
                <div className="overflow-hidden rounded-2xl border border-line bg-ink-800">
                  <img
                    src={p.src}
                    alt={`${p.title} — ${p.sample}`}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="display mt-6 text-3xl">
                  {p.title}
                  <span className="ml-2 inline-block text-straw transition-transform duration-300 group-hover:translate-x-1">→</span>
                </h3>
                <p className="mt-2 text-[15px] font-semibold text-straw/90">{p.sample}</p>
                <p className="mt-3 leading-relaxed text-cream-muted">{p.text}</p>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox items={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  )
}

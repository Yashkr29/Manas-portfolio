import { services, whyMe } from '../data/portfolio'
import Reveal, { SectionHeading } from './Reveal'
import { ArrowUpRight } from './Icons'

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[4fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading kicker="What I do" title="Print, Packaging &" accent="Brand Design">
            From the first logo sketch to the box on the shelf, everything your brand needs to look like itself.
          </SectionHeading>
          <Reveal delay={0.15}>
            <a href="#contact" className="btn-primary mt-8">Start a Project</a>
          </Reveal>
        </div>

        <ul className="border-t border-line">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.05} className="border-b border-line">
              <a href="#contact" className="group flex items-start justify-between gap-6 py-8 transition-colors">
                <div>
                  <h3 className="display text-3xl transition-colors duration-300 group-hover:text-straw sm:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-cream-muted">{s.text}</p>
                </div>
                <span className="mt-2 grid size-12 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover:rotate-45 group-hover:border-maroon group-hover:bg-maroon">
                  <ArrowUpRight />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function WhyMe() {
  return (
    <section id="why" className="bg-maroon py-24 sm:py-28">
      <div className="wrap">
        <Reveal>
          <h2 className="display max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
            Why work <em className="text-straw">with me?</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {whyMe.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="border-t border-cream/30 pt-6">
              <h3 className="display text-2xl sm:text-3xl">{w.title}</h3>
              <p className="mt-3 text-lg leading-relaxed text-cream/90">{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

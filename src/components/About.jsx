import { profile, results } from '../data/portfolio'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="bg-ink-900 py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <Reveal className="relative self-start">
          <div className="overflow-hidden rounded-3xl border border-line">
            <img
              src={profile.aboutPortrait}
              alt={`Clay-style illustration of ${profile.name} in a yellow shirt and red cap, smiling with his hand at his chin`}
              loading="lazy"
              width="1199"
              height="1312"
              className="w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-line bg-ink-950 p-5 sm:left-auto sm:w-64">
            <p className="text-sm text-cream-muted">Worked with</p>
            <p className="display mt-1 text-xl">Jewellery &amp; wallpaper brands</p>
          </div>
        </Reveal>

        <div className="lg:pt-6">
          <Reveal>
            <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
              Hi, I'm <em className="text-straw">{profile.first}</em> — I design visuals that connect.
            </h2>
          </Reveal>
          {profile.bio.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className="mt-6 text-lg leading-relaxed text-cream/85">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.25}>
            <p className="display mt-6 text-2xl italic text-straw">{profile.signoff}</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[...profile.pillars, ...results].map((item, i) => (
              <Reveal key={item.title} delay={0.05 * i}>
                <article className="h-full rounded-2xl border border-line bg-ink-800/60 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-maroon-hi/70">
                  <h3 className="display text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-cream-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <ul className="mt-10 flex flex-wrap gap-2.5" aria-label="Industries">
              {profile.industries.map((t) => (
                <li key={t} className="rounded-full border border-line px-4 py-2 text-[15px] text-cream/85">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

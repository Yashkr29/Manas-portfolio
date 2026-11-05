const items = ['Brand Identity', 'Festive Creatives', 'Flyers', 'Posters', 'Business Cards', 'Packaging', 'Social Media', 'Menus']

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-maroon-hi/40 bg-maroon py-5" aria-label="Services overview">
      <ul className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <li key={i} className="display flex items-center gap-10 text-2xl italic text-cream sm:text-3xl" aria-hidden={i >= items.length}>
            {t}
            <span className="text-straw not-italic">✦</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

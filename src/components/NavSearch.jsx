import { useRef, useState } from 'react'
import CurvedInput from './CurvedInput'
import { categories, nav, printWork, projects, services } from '../data/portfolio'

// Everything the nav search can jump to: sections, each design, print pieces, services.
const index = [
  ...nav.map((n) => ({ terms: [n.label], target: n.href.slice(1) })),
  { terms: ['projects', 'portfolio', 'designs', 'gallery'], target: 'work' },
  { terms: ['print', 'printable'], target: 'print' },
  { terms: categories.slice(1), target: 'work' },
  { terms: ['why', 'why me', 'hire'], target: 'why' },
  { terms: ['email', 'whatsapp', 'message', 'hire me'], target: 'contact' },
  ...projects.map((p) => ({ terms: [p.title, p.client, p.type, p.category], target: `project-${p.id}`, fallback: 'work' })),
  ...printWork.map((p) => ({ terms: [p.title, p.sample], target: 'print' })),
  ...services.map((s) => ({ terms: [s.title], target: 'services' })),
]

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim()

function find(query) {
  const q = norm(query)
  if (!q) return null
  let best = null
  for (const entry of index) {
    for (const term of entry.terms) {
      const t = norm(term)
      const score = t === q ? 3 : t.startsWith(q) ? 2 : t.includes(q) || q.includes(t) ? 1 : 0
      if (score && (!best || score > best.score)) best = { ...entry, score }
    }
  }
  return best
}

const SearchIcon = (
  <g>
    <circle r="11" fill="#8e1f24" />
    <circle cx="-1.5" cy="-1.5" r="4.6" fill="none" stroke="#f6ece1" strokeWidth="1.8" />
    <path d="M2 2 L5.2 5.2" stroke="#f6ece1" strokeWidth="1.8" strokeLinecap="round" />
  </g>
)

const DEFAULT_HINT = 'Jump to… e.g. posters'

export default function NavSearch({ width = 320, onNavigate }) {
  const [value, setValue] = useState('')
  const [hint, setHint] = useState(DEFAULT_HINT)
  const timer = useRef(0)

  const go = (query) => {
    const hit = find(query)
    clearTimeout(timer.current)
    if (!hit) {
      setValue('')
      setHint(`No match for "${query.trim().slice(0, 14)}"`)
      timer.current = setTimeout(() => setHint(DEFAULT_HINT), 2600)
      return
    }
    const el = document.getElementById(hit.target) || document.getElementById(hit.fallback)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: hit.target.startsWith('project-') ? 'center' : 'start' })
    if (hit.target.startsWith('project-')) {
      el.animate(
        [{ outline: '3px solid #e3ad4f', outlineOffset: '6px', borderRadius: '18px' }, { outline: '3px solid transparent', outlineOffset: '6px' }],
        { duration: 1800, delay: 500, easing: 'ease-out' },
      )
    }
    setValue('')
    onNavigate?.()
  }

  return (
    <CurvedInput
      type="search"
      name="site-search"
      ariaLabel="Search sections and designs"
      placeholder={hint}
      buttonText="Go"
      value={value}
      onChange={setValue}
      onSubmit={go}
      width={width}
      height={44}
      bend={8}
      cornerRadius={22}
      fontSize={14}
      borderWidth={1.2}
      backgroundColor="#2a1215"
      borderColor="#6b2a2f"
      textColor="#f6ece1"
      placeholderColor="#cdb8ac"
      buttonColor="#8e1f24"
      buttonTextColor="#f6ece1"
      shadowSize="sm"
      shadowColor="#000000"
      icon={SearchIcon}
    />
  )
}

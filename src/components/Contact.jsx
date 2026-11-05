import { useState } from 'react'
import { contact, mailLink, services, whatsappLink } from '../data/portfolio'
import Reveal from './Reveal'
import { Mail, WhatsApp } from './Icons'

const prettyPhone = `+${contact.whatsapp.slice(0, 2)} ${contact.whatsapp.slice(2, 7)} ${contact.whatsapp.slice(7)}`

export default function Contact() {
  const [form, setForm] = useState({ name: '', service: services[0].title, message: '' })
  const [error, setError] = useState('')
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const compose = () =>
    `Hi Manas, I'm ${form.name.trim()}.\nI'm interested in: ${form.service}.\n\n${form.message.trim()}`

  const send = (channel) => (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please add your name and a short message.')
      return
    }
    setError('')
    const url =
      channel === 'whatsapp'
        ? whatsappLink(compose())
        : mailLink(`${form.service} enquiry from ${form.name.trim()}`, compose())
    window.open(url, channel === 'whatsapp' ? '_blank' : '_self', 'noopener')
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <h2 className="display text-5xl sm:text-6xl lg:text-7xl">
              Let's make something <em className="text-straw">extraordinary.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/85">
              I'm excited to hear about your next project! Reach out and let's discuss how I can help you achieve your goals.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.15}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-ink-800/60 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/70"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-[#25D366] text-ink-950">
                  <WhatsApp width="24" height="24" />
                </span>
                <span>
                  <span className="block text-sm text-cream-muted">WhatsApp</span>
                  <span className="display mt-1 block text-xl">{prettyPhone}</span>
                </span>
              </a>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={mailLink()}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-ink-800/60 p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-straw/70"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-straw text-ink-950">
                  <Mail width="24" height="24" />
                </span>
                <span>
                  <span className="block text-sm text-cream-muted">Email</span>
                  <span className="display mt-1 block break-words text-[17px] xl:text-lg">{contact.email}</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <form className="rounded-3xl border border-line bg-ink-900 p-6 sm:p-10" onSubmit={send('whatsapp')} noValidate>
            <h3 className="display text-3xl">Tell me about your project</h3>
            <div className="mt-8 grid gap-5">
              <label className="grid gap-2">
                <span className="text-[15px] font-semibold">Your name</span>
                <input className="field" value={form.name} onChange={set('name')} autoComplete="name" placeholder="Priya Sharma" required />
              </label>
              <label className="grid gap-2">
                <span className="text-[15px] font-semibold">What do you need?</span>
                <select className="field" value={form.service} onChange={set('service')}>
                  {services.map((s) => (
                    <option key={s.title}>{s.title}</option>
                  ))}
                  <option>Something else</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-[15px] font-semibold">Message</span>
                <textarea
                  className="field min-h-36 resize-y"
                  value={form.message}
                  onChange={set('message')}
                  placeholder="A Diwali campaign for my jewellery store: 5 social posts and a flyer…"
                  required
                />
              </label>
            </div>
            {error && <p role="alert" className="mt-4 text-[15px] font-semibold text-straw">{error}</p>}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="btn flex-1 bg-[#25D366] text-ink-950 hover:bg-[#3ee07a]">
                <WhatsApp /> Send on WhatsApp
              </button>
              <button type="button" onClick={send('email')} className="btn-ghost flex-1">
                <Mail /> Send by Email
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import PrintWork from './components/PrintWork'
import Services, { WhyMe } from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer, { FloatingWhatsApp } from './components/Footer'
import CursorRibbons from './components/CursorRibbons'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-cream focus:px-4 focus:py-2 focus:text-ink-950">
        Skip to work
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <PrintWork />
        <Services />
        <WhyMe />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CursorRibbons />
    </MotionConfig>
  )
}

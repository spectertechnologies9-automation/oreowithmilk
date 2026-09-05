import { useState } from 'react'
import useLenis from './hooks/useLenis'
import Preloader from './components/Preloader'
import Cursor from './components/Cursor'
import Ambient from './components/Ambient'
import Navbar from './components/Navbar'
import SideBadge from './components/SideBadge'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis()

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />
      <Cursor />
      <Ambient />
      <Navbar />
      <SideBadge />
      <main className={`page ${loaded ? 'is-loaded' : ''}`}>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

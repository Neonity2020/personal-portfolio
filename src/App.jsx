import Nav from './components/Nav.jsx'
import Cursor from './components/Cursor.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Works from './components/Works.jsx'
import About from './components/About.jsx'
import Journey from './components/Journey.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Works />
        <About />
        <Journey />
      </main>
      <Contact />
    </>
  )
}

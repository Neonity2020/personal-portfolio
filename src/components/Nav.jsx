import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="nav__logo">
        <span className="nav__logo-mark" aria-hidden="true" />
        {profile.initial}
      </a>

      <ul className="nav__links">
        {navLinks.map((l) => (
          <li key={l.id}>
            <a className="nav__link" href={l.href}>
              <i>{l.id}</i>
              {l.label} · {l.en}
            </a>
          </li>
        ))}
      </ul>

      <span className="nav__status">{profile.status}</span>
    </header>
  )
}

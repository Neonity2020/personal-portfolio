import { profile, socials } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <footer className="contact container" id="contact">
      <div className="contact__watermark" aria-hidden="true">Let's talk</div>

      <div>
        <Reveal>
          <span className="contact__kicker mono">CONTACT — 04</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="contact__title">
            有想法？
            <br />
            <em>一起</em>把它做出来。
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
            <span className="mono">↗ SAY HI</span>
          </a>
        </Reveal>
      </div>

      <Reveal className="footer">
        <ul className="footer__socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a className="footer__social" href={s.href} target="_blank" rel="noreferrer">
                <span className="label">{s.label}</span>
                <span className="handle">{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="footer__meta">
          <div>
            © 2026 {profile.name} — DESIGNED & CODED
            <span className="heart"> ♥ </span>
            BY MYSELF
          </div>
          <div>VITE · REACT · 一杯未凉的咖啡</div>
        </div>
      </Reveal>
    </footer>
  )
}

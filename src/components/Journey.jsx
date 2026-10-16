import { journey } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Journey() {
  return (
    <section className="journey container" id="journey">
      <Reveal className="sec-head">
        <h2 className="sec-head__title">
          行走轨迹<em>Journey</em>
        </h2>
        <span className="sec-head__count">2019 → NOW</span>
      </Reveal>

      <div className="journey__list">
        {journey.map((j, i) => (
          <Reveal className="j-row" key={j.period} delay={i * 0.07}>
            <span className="j-row__period">{j.period}</span>
            <div>
              <h3 className="j-row__role">
                {j.role}
                <span className="j-row__company">{j.company}</span>
              </h3>
              <p className="j-row__desc">{j.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__grid-lines" aria-hidden="true">
        <span /><span /><span /><span />
      </div>

      <div className="hero__top mono">
        <span>© 2026 PORTFOLIO</span>
        <span>BASED IN {profile.location}</span>
      </div>

      <div className="hero__tag">FRONT-END / DESIGN ENGINEER — EST. 2019</div>

      <div className="hero__watermark" aria-hidden="true">Zix.</div>

      <div className="container">
        <h1 className="hero__title">
          <span className="line"><span>把代码写成</span></span>
          <span className="line">
            <span>
              有<em>temperature</em>的
            </span>
          </span>
          <span className="line"><span>数字体验。</span></span>
        </h1>

        <div className="hero__foot">
          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__meta">
            <span className="mono">
              {profile.name} — {profile.roleEn}
            </span>
            <span className="hero__scroll mono">
              向下滚动
              <span className="hero__scroll-line" aria-hidden="true" />
              SCROLL
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

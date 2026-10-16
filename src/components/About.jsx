import { profile, stats, skills } from '../data.js'
import Reveal from './Reveal.jsx'

export default function About() {
  const half = Math.ceil(skills.length / 2)
  const colA = skills.slice(0, half)
  const colB = skills.slice(half)

  const renderCol = (title, list) => (
    <div className="skills__col">
      <h3>{title}</h3>
      {list.map((s) => (
        <div className="skill-row" key={s.name}>
          <span>{s.name}</span>
          <span className="skill-row__level">{s.level}</span>
        </div>
      ))}
    </div>
  )

  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__left">
          <Reveal>
            <span className="about__kicker mono">ABOUT — 02</span>
            <h2>
              关于<em>me</em>，
              <br />
              一个较真的
              <br />
              像素工匠。
            </h2>
            <div className="about__portrait" role="img" aria-label="个人照片占位" />
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="about__lead">
              你好，我是{profile.name}。常驻{profile.location}的{profile.role}，
              在<strong>理性工程</strong>与<strong>感性设计</strong>的交界处工作。
            </p>
            <p className="about__body">
              我关注渲染性能、可访问性与长期可维护性——那些用户看不见、却时刻感受得到的部分。
              业余时间维护开源组件库，写一些关于浏览器渲染机制的文字，偶尔给设计团队客串切图顾问（他们说我切得比想象中好）。
              下一个想深入的方向是 WebGL 与生成艺术。
            </p>
          </Reveal>

          <Reveal className="about__stats">
            {stats.map((s, i) => (
              <Reveal className="stat" key={s.en} delay={i * 0.08}>
                <div className="stat__value">
                  {s.value.replace('+', '')}
                  {s.value.includes('+') && <sup>+</sup>}
                </div>
                <div className="stat__label">{s.label}</div>
                <div className="stat__en mono">{s.en}</div>
              </Reveal>
            ))}
          </Reveal>

          <Reveal className="skills">
            {renderCol('CORE — 核心栈', colA)}
            {renderCol('CRAFT — 工艺箱', colB)}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import { works } from '../data.js'
import Reveal from './Reveal.jsx'

export default function Works() {
  const previewRef = useRef(null)
  const pos = useRef({ x: -300, y: -300, tx: -300, ty: -300 })
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)

  // mousemove 只记录目标坐标，零布局写入
  const onMove = (e) => {
    pos.current.tx = e.clientX
    pos.current.ty = e.clientY
  }

  // rAF 缓动跟随 v2：帧率无关指数平滑 + 速度自适应倾斜
  useEffect(() => {
    const el = previewRef.current
    if (!el || window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const s = pos.current
    let lastTime = performance.now()
    let raf = 0
    const LAMBDA = 13 // 刚度：越大越跟手

    const tick = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now

      const k = 1 - Math.exp(-LAMBDA * dt)
      s.x += (s.tx - s.x) * k
      s.y += (s.ty - s.y) * k

      // 与目标的残差 ≈ 移动速度：顺着移动方向轻甩，静止时回正
      const vx = s.tx - s.x
      const tilt = Math.max(-8, Math.min(8, vx * 0.12))

      el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0) translate(-50%, -60%) rotate(${tilt}deg)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const enter = (i) => {
    setActive(i)
    // 显示瞬间吸附到当前光标位置，避免从旧位置飞入
    pos.current.x = pos.current.tx
    pos.current.y = pos.current.ty
    setVisible(true)
  }

  const leave = () => {
    setVisible(false)
  }

  return (
    <section className="works container" id="works" onMouseMove={onMove}>
      <Reveal className="sec-head">
        <h2 className="sec-head__title">
          精选作品<em>Selected Works</em>
        </h2>
        <span className="sec-head__count">( {works.length.toString().padStart(2, '0')} ) PROJECTS — 2022→2025</span>
      </Reveal>

      <div className="works__list">
        {works.map((w, i) => (
          <Reveal key={w.id} delay={i * 0.06}>
            <article className="work-row" onMouseEnter={() => enter(i)} onMouseLeave={leave} tabIndex={0}>
              <span className="work-row__index">/{w.id}</span>
              <div>
                <h3 className="work-row__title">{w.title}</h3>
                <p className="work-row__subtitle">{w.subtitle}</p>
              </div>
              <div className="work-row__tags">
                {w.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <span className="work-row__arrow" aria-hidden="true">↗</span>
            </article>
          </Reveal>
        ))}
      </div>

      {/* 鼠标跟随预览卡（rAF 驱动，合成层渲染） */}
      <div ref={previewRef} className={`work-preview ${visible ? 'is-active' : ''}`} aria-hidden="true">
        {active !== null && (
          <div className={`work-preview__inner hue-${works[active].hue}`}>
            <span className="work-preview__label">
              {works[active].title.split('·')[0].trim()} — {works[active].year}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

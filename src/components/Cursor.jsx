import { useEffect, useRef } from 'react'

/**
 * 自定义光标 v2 — 丝滑算法：
 * 1. 圆点零延迟直读坐标（跟手感的根基）
 * 2. 外圈用帧率无关的指数平滑：k = 1 - e^(-λ·dt)，任何刷新率下表现一致
 * 3. 外圈缩放同样走 dt 归一化插值，避免布局属性动画
 */
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    document.body.classList.add('has-custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my
    let scale = 0.6
    let targetScale = 0.6
    let lastTime = performance.now()
    let raf = 0

    // 刚度系数：外圈拖尾的"跟手程度"
    const LAMBDA_RING = 16
    const LAMBDA_SCALE = 18

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const tick = (now) => {
      // 帧间隔归一化（上限 50ms 防止后台切回时跳变）
      const dt = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now

      // 圆点：零延迟，像素级跟手
      const dx = mx
      const dy = my

      // 外圈：帧率无关的指数平滑，快速移动时自动收紧，静止时优雅归位
      const k = 1 - Math.exp(-LAMBDA_RING * dt)
      rx += (mx - rx) * k
      ry += (my - ry) * k

      const ks = 1 - Math.exp(-LAMBDA_SCALE * dt)
      scale += (targetScale - scale) * ks

      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${scale})`
      raf = requestAnimationFrame(tick)
    }

    let hovering = false
    const onOver = (e) => {
      const next = !!(e.target.closest && e.target.closest('a, button, .work-row'))
      if (next !== hovering) {
        hovering = next
        targetScale = next ? 1 : 0.6
        ring.classList.toggle('is-hover', next)
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

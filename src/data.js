// ─────────────────────────────────────────────
//  站点内容都在这里，改这里就能换成你自己的信息 ✏️
// ─────────────────────────────────────────────

export const profile = {
  name: '沈知行',
  initial: 'Z.SHEN',
  role: '前端工程师',
  roleEn: 'FRONT-END ENGINEER',
  location: '杭州 · 中国',
  email: 'hello@zix.shen.dev',
  status: 'OPEN TO WORK',
  intro:
    '五年来专注构建高性能、可维护的 Web 应用。相信工程是理性的骨架，设计是感性的血肉——我负责让两者在浏览器里相遇。',
}

export const navLinks = [
  { id: '01', label: '作品', en: 'WORKS', href: '#works' },
  { id: '02', label: '关于', en: 'ABOUT', href: '#about' },
  { id: '03', label: '经历', en: 'JOURNEY', href: '#journey' },
  { id: '04', label: '联系', en: 'CONTACT', href: '#contact' },
]

export const marqueeItems = [
  'AVAILABLE FOR FREELANCE',
  'REACT · TYPESCRIPT · WEBGL',
  '性能强迫症患者',
  '像素级还原大师',
  'DESIGN ENGINEER',
  '构建工具爱好者',
]

export const works = [
  {
    id: '01',
    title: '星轨 · 数据可视化平台',
    subtitle: '为天文观测团队打造的实时渲染面板，10 万级数据点流畅交互',
    tags: ['React', 'WebGL', 'D3.js'],
    hue: 'ember',
    year: '2025',
  },
  {
    id: '02',
    title: '墨页 · 无头 CMS 引擎',
    subtitle: '面向内容团队的发布系统，编辑到上线只需一次提交',
    tags: ['Next.js', 'GraphQL', 'Edge'],
    hue: 'glacier',
    year: '2024',
  },
  {
    id: '03',
    title: '脉冲 · Pulse UI 组件库',
    subtitle: '开源的 React 组件库，48 个组件，周下载量 2 万+',
    tags: ['TypeScript', 'Storybook', 'a11y'],
    hue: 'aurum',
    year: '2023',
  },
  {
    id: '04',
    title: '折光 · 电商前端架构',
    subtitle: '微前端改造，首屏时间从 4.2s 降至 1.1s',
    tags: ['微前端', '性能', 'Monorepo'],
    hue: 'rose',
    year: '2022',
  },
]

export const stats = [
  { value: '05+', label: '年 · 开发经验', en: 'YEARS' },
  { value: '40+', label: '个 · 交付项目', en: 'PROJECTS' },
  { value: '12', label: '个 · 开源仓库', en: 'OSS REPOS' },
  { value: '98', label: '分 · Lighthouse', en: 'PERF SCORE' },
]

export const skills = [
  { name: 'React / Next.js', level: '核心栈' },
  { name: 'TypeScript', level: '核心栈' },
  { name: 'Node.js / API 设计', level: '熟练' },
  { name: 'Three.js / WebGL', level: '熟练' },
  { name: 'Vite / Rollup / 构建', level: '工具链' },
  { name: 'CI/CD · Docker', level: '工程化' },
  { name: 'Figma / 设计协作', level: '跨界' },
  { name: 'GSAP / Motion', level: '动效' },
]

export const journey = [
  {
    period: '2022 — 至今',
    company: '某头部科技公司',
    role: '高级前端工程师',
    desc: '负责核心产品线前端架构与性能治理，主导设计系统落地，团队规模 12 人。',
  },
  {
    period: '2020 — 2022',
    company: '某独角兽互联网公司',
    role: '前端工程师',
    desc: '从 0 到 1 搭建数据中台前端，沉淀可视化组件库并被 6 条业务线复用。',
  },
  {
    period: '2019 — 2020',
    company: '某创业公司',
    role: '前端开发',
    desc: '一人撑起整条 C 端产品线，在快速迭代中学会对工程质量寸土不让。',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com', handle: '@zixshen' },
  { label: '掘金', href: 'https://juejin.cn', handle: '@沈知行' },
  { label: 'X / Twitter', href: 'https://x.com', handle: '@zixshen' },
  { label: 'Email', href: 'mailto:hello@zix.shen.dev', handle: 'hello@zix.shen.dev' },
]

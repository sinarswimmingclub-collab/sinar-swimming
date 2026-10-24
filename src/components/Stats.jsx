import { useEffect, useRef, useState } from 'react'
import './Stats.css'

const STATS = [
  { target: 500, suffix: '+', label: 'Perenang' },
  { target: 25, suffix: '+', label: 'Kejuaraan' },
  { target: 15, suffix: '', label: 'Pelatih Profesional' },
  { target: 10, suffix: '', label: 'Tahun Berprestasi' },
]

function Counter({ target, suffix, active }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame
    const duration = 1600
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return (
    <span className="stats__value">
      {value}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [active, setActive] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

}

import { Trophy, Medal, Award } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import './Achievements.css'

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: 'Kejuaraan Renang Nasional',
    result: 'Juara 1',
    year: '2025',
  },
  {
    icon: Medal,
    title: 'Jakarta Open Aquatic Games',
    result: '12 Medali Emas',
    year: '2025',
  },
  {
    icon: Award,
    title: 'Liga Renang Junior',
    result: 'Klub Renang Terbaik',
    year: '2024',
  },
]

export default function Achievements() {
  const ref = useReveal()

  return (
    <section id="achievements" className="achievements section-pad" ref={ref}>
      <div className="container">
        <div className="section-head achievements__head">
          <p className="eyebrow reveal">Rekam Jejak</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Siap untuk <span className="accent">Bertanding</span>
          </h2>
        </div>

        <div className="achievements__timeline">
          {ACHIEVEMENTS.map((item, i) => (
            <div className={`achievement-card reveal reveal-delay-${Math.min(i + 1, 4)}`} key={item.title}>
              <span className="achievement-card__icon">
                <item.icon size={26} strokeWidth={2} />
              </span>
              <div className="achievement-card__body">
                <h3>{item.title}</h3>
                <p className="achievement-card__result">{item.result}</p>
                <p className="achievement-card__year">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

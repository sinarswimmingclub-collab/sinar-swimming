import { Instagram, Linkedin } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import coachPhoto from '../assets/images/coach.png'
import './Coaches.css'

const HEAD_COACH = {
  name: 'Coach Sinar',
  role: 'Pelatih Kepala',
  experience: 'Pengalaman 2+ Tahun',
  bio: 'Memimpin setiap tim di Sinar Swimming Club — dari gaya pertama hingga final kejuaraan. Membangun teknik, disiplin, dan kepercayaan diri bertanding, satu putaran demi satu putaran.',
  highlights: [
    { value: '2+', label: 'Tahun Melatih' },
    { value: '50+', label: 'Perenang Dilatih' },
    { value: '5+', label: 'Gelar Juara' },
  ],
}

export default function Coaches() {
  const ref = useReveal()

  return (
    <section id="coaches" className="coaches section-pad" ref={ref}>
      <div className="container">
        <div className="section-head coaches__head">
          <p className="eyebrow reveal">Tim Kami</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Kenali <span className="accent">Pelatih Kepala</span>
          </h2>
        </div>

        <div className="coach-feature">
          <div className="coach-feature__media reveal reveal-delay-1">
            <img src={coachPhoto} alt={`Potret ${HEAD_COACH.name}, pelatih kepala`} />
            <span className="coach-feature__badge">{HEAD_COACH.role}</span>
          </div>

          <div className="coach-feature__info reveal reveal-delay-2">
            <h3 className="coach-feature__name">{HEAD_COACH.name}</h3>
            <p className="coach-feature__exp">{HEAD_COACH.experience}</p>
            <p className="coach-feature__bio">{HEAD_COACH.bio}</p>

            <div className="lane-line coach-feature__lane" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>

            <ul className="coach-feature__stats">
              {HEAD_COACH.highlights.map((item) => (
                <li key={item.label}>
                  <span className="coach-feature__stat-value">{item.value}</span>
                  <span className="coach-feature__stat-label">{item.label}</span>
                </li>
              ))}
            </ul>

            <div className="coach-feature__social">
              <a href="#" aria-label={`${HEAD_COACH.name} di Instagram`}>
                <Instagram size={17} />
              </a>
              <a href="#" aria-label={`${HEAD_COACH.name} di LinkedIn`}>
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

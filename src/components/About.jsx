import { GraduationCap, Users, TrendingUp } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import './About.css'

const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Pelatihan Profesional',
    desc: 'Pelatih berpengalaman yang fokus pada teknik dan performa.',
  },
  {
    icon: Users,
    title: 'Komunitas Utama',
    desc: 'Berlatih, berkompetisi, dan berkembang bersama.',
  },
  {
    icon: TrendingUp,
    title: 'Berorientasi Prestasi',
    desc: 'Program terstruktur yang dirancang untuk membantu Anda mencapai target.',
  },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="about section-pad" ref={ref}>
      <div className="container about__grid">
        <div className="about__media reveal">
          <img
            src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=1200&auto=format&fit=crop"
            alt="Perenang meluncur di bawah air di kolam latihan"
          />
          <div className="about__media-badge glass">
            <span className="about__media-badge-value">98%</span>
            <span className="about__media-badge-label">Kepuasan Anggota</span>
          </div>
        </div>

        <div className="about__body">
          <p className="eyebrow reveal">Tentang Sinar</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Lebih Dari Sekadar Berenang.
            <br />
            <span className="accent">Ini Gaya Hidup.</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            SINAR adalah komunitas renang modern yang berdedikasi membantu perenang di semua level
            membangun kepercayaan diri, disiplin, kekuatan, dan keunggulan kompetitif.
          </p>

          <div className="about__features">
            {FEATURES.map((feature, i) => (
              <div className={`about__feature reveal reveal-delay-${Math.min(i + 2, 4)}`} key={feature.title}>
                <span className="about__feature-icon">
                  <feature.icon size={20} strokeWidth={2.2} />
                </span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

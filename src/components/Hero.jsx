import { useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import './Hero.css'

const STATS = [
  { value: '2+', label: 'Tahun Pengalaman' },
  { value: '50+', label: 'Anggota Aktif' },
  { value: '5+', label: 'Gelar Juara' },
]

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.08) translateY(${y * 0.18}px)`
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero__bg" ref={bgRef}>
        <img
          src="https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1800&auto=format&fit=crop"
          alt="Perenang profesional melaju di lintasan kolam"
        />
      </div>
      <div className="hero__overlay" />

      <div className="hero__particles" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className={`hero__particle hero__particle--${i % 5}`} />
        ))}
      </div>

      <div className="hero__blob hero__blob--a" aria-hidden="true" />
      <div className="hero__blob hero__blob--b" aria-hidden="true" />

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">Sinar Swimming Club — Sejak 2016</p>

        <h1 className="hero__headline">
          SMALL STEPS.
          <br />
          <span className="accent">BIG PROGRES.</span>
        </h1>

        <p className="hero__sub">
          Berlatih lebih keras. Berenang lebih cepat. Jadilah versi terkuat dirimu bersama SINAR Swimming Club.
        </p>

        <div className="hero__cta-row">
          <a href="#contact" className="btn btn-primary">
            Gabung Klub <ArrowRight size={18} />
          </a>
          <a href="#programs" className="btn btn-ghost">
            Lihat Program
          </a>
        </div>

        <p className="hero__meta">Pelatihan Profesional • Semua Usia • Latihan Kompetitif</p>
      </div>

      <div className="hero__stats glass">
        {STATS.map((stat, i) => (
          <div className="hero__stat" key={stat.label}>
            <span className="hero__stat-value">{stat.value}</span>
            <span className="hero__stat-label">{stat.label}</span>
            {i < STATS.length - 1 && <span className="hero__stat-divider" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <a href="#about" className="hero__scroll" aria-label="Gulir ke bagian Tentang">
        <ChevronDown size={22} />
      </a>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,40 C200,90 400,0 600,40 C800,80 1000,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}

import { ArrowRight } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import './CTA.css'

export default function CTA() {
  const ref = useReveal()

  return (
    <section className="cta section-pad" ref={ref}>
      <div className="cta__bg">
        <img
          src="https://images.unsplash.com/photo-1600881333168-2ef49b341f30?q=80&w=1800&auto=format&fit=crop"
          alt="Lintasan kolam renang bermandikan cahaya biru"
        />
      </div>
      <div className="cta__overlay" />

      <div className="container cta__content reveal">
        <h2 className="cta__headline">Siap Melangkah?</h2>
        <p className="cta__sub">Rekor pribadi Anda berikutnya dimulai di sini.</p>
        <div className="cta__actions">
          <a href="#contact" className="btn btn-primary">
            Gabung SINAR <ArrowRight size={18} />
          </a>
          <a href="#contact" className="link-arrow cta__trial">
            Pesan Sesi Percobaan <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

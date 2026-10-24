import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import './Testimonials.css'

const TESTIMONIALS = [
  {
    quote:
      'Bergabung dengan SINAR benar-benar mengubah cara saya berlatih. Para pelatih mendorong saya melampaui batas yang saya kira mungkin.',
    name: 'Alex Morgan',
    role: 'Tim Kompetisi',
    avatar: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'Putri saya yang awalnya takut air kini bisa berenang satu putaran penuh dalam tiga bulan. Tim Renang Anak luar biasa.',
    name: 'Priya Anand',
    role: 'Orang Tua, Renang Anak',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'Sebagai pemula dewasa, awalnya saya gugup, tetapi struktur program dan komunitasnya membuat setiap sesi selalu saya nantikan.',
    name: 'James Wilson',
    role: 'Renang Dewasa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
]

export default function Testimonials() {
  const ref = useReveal()
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const go = (i) => setIndex((i + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(timerRef.current)
  }, [])

  const restart = (fn) => {
    clearInterval(timerRef.current)
    fn()
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000)
  }

  return (
    <section className="testimonials section-pad" ref={ref}>
      <div className="container">
        <div className="section-head testimonials__head">
          <p className="eyebrow reveal">Testimoni</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Dicintai Para <span className="accent">Perenang</span>
          </h2>
        </div>

        <div className="testimonials__carousel reveal reveal-delay-2">
          <Quote className="testimonials__quote-icon" size={44} strokeWidth={1.5} />

          <div className="testimonials__track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {TESTIMONIALS.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-card__stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-card__author">
                  <img src={t.avatar} alt={t.name} />
                  <div>
                    <span className="testimonial-card__name">{t.name}</span>
                    <span className="testimonial-card__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials__controls">
            <button aria-label="Testimoni sebelumnya" onClick={() => restart(() => go(index - 1))}>
              <ChevronLeft size={18} />
            </button>
            <div className="testimonials__dots">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  className={i === index ? 'active' : ''}
                  aria-label={`Tampilkan testimoni ${i + 1}`}
                  onClick={() => restart(() => go(i))}
                />
              ))}
            </div>
            <button aria-label="Testimoni berikutnya" onClick={() => restart(() => go(index + 1))}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

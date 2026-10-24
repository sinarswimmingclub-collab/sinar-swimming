import { useEffect, useState } from 'react'
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import gallery1 from '../assets/images/gallery-1.jpg'
import gallery2 from '../assets/images/gallery-2.jpg'
import gallery3 from '../assets/images/gallery-3.jpg'
import './Gallery.css'

const PHOTOS = [
  {
    src: gallery1,
    alt: 'Pelatih bersama murid Renang Anak di tepi kolam',
    tall: true,
  },
  {
    src: gallery2,
    alt: 'Pelatih dan murid berpose di kolam dengan bingkai Sinar Swimming Club',
    tall: true,
  },
  {
    src: gallery3,
    alt: 'Pelatih bersama tiga murid dengan bingkai Sinar Swimming Club',
    tall: true,
  },
]

export default function Gallery() {
  const ref = useReveal()
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)
  const prev = () => setActiveIndex((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
  const next = () => setActiveIndex((i) => (i + 1) % PHOTOS.length)

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return (
    <section id="gallery" className="gallery section-pad" ref={ref}>
      <div className="container">
        <div className="section-head gallery__head">
          <p className="eyebrow reveal">Galeri</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Kehidupan di <span className="accent">Sinar</span>
          </h2>
        </div>

        <div className="gallery__grid">
          {PHOTOS.map((photo, i) => (
            <button
              type="button"
              className={`gallery__item reveal reveal-delay-${Math.min((i % 4) + 1, 4)} ${photo.tall ? 'gallery__item--tall' : ''}`}
              key={photo.src}
              onClick={() => setActiveIndex(i)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="gallery__item-overlay">
                <Expand size={20} />
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Penampil foto">
          <button className="lightbox__close" onClick={close} aria-label="Tutup galeri">
            <X size={26} />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Foto sebelumnya">
            <ChevronLeft size={28} />
          </button>
          <img src={PHOTOS[activeIndex].src} alt={PHOTOS[activeIndex].alt} className="lightbox__image" />
          <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Foto berikutnya">
            <ChevronRight size={28} />
          </button>
          <div className="lightbox__backdrop" onClick={close} />
        </div>
      )}
    </section>
  )
}

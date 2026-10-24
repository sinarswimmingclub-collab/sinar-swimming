import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/logo-sinar.jpeg'
import './Navbar.css'

const LINKS = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Program', href: '#programs' },
  { label: 'Pelatih', href: '#coaches' },
  { label: 'Prestasi', href: '#achievements' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${open ? 'navbar--open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => setOpen(false)}>
          <img className="navbar__logo-mark" src={logo} alt="" width="42" height="42" />
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">SINAR</span>
            <span className="navbar__logo-sub">Swimming Club</span>
          </span>
        </a>

        <nav className="navbar__links" aria-label="Utama">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary btn-sm navbar__cta">
          Gabung Klub
        </a>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-links" aria-label="Seluler">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: `${i * 45}ms` }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary navbar__mobile-cta" onClick={() => setOpen(false)}>
          Gabung Klub
        </a>
      </div>
    </header>
  )
}

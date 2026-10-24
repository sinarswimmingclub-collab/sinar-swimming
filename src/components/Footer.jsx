import { Instagram, Youtube } from 'lucide-react'
import logo from '../assets/images/logo-sinar.jpeg'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Klub',
    links: [
      { label: 'Tentang', href: '#about' },
      { label: 'Program', href: '#programs' },
      { label: 'Pelatih', href: '#coaches' },
      { label: 'Prestasi', href: '#achievements' },
    ],
  },
  {
    title: 'Jelajahi',
    links: [
      { label: 'Galeri', href: '#gallery' },
      { label: 'Acara', href: '#events' },
      { label: 'Keanggotaan', href: '#membership' },
      { label: 'Kontak', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img className="footer__logo-mark" src={logo} alt="" width="52" height="52" />
            <span className="footer__logo-text">
              <span className="footer__logo-name">SINAR</span>
              <span className="footer__logo-sub">Swimming Club</span>
            </span>
          </a>
          <p className="footer__tagline">Berenang Kuat. Hidup Berani.</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
            <a href="#" aria-label="TikTok">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82c-.99-.99-1.55-2.33-1.56-3.72h-3.13v13.44c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1-2.72-2.72 2.72 2.72 0 0 1 2.72-2.72c.28 0 .56.05.82.13v-3.18a5.9 5.9 0 0 0-.82-.06A5.85 5.85 0 0 0 3.33 15.5a5.85 5.85 0 0 0 5.86 5.85 5.85 5.85 0 0 0 5.86-5.85V9.01a7.35 7.35 0 0 0 4.29 1.38V7.26c-.98 0-1.9-.29-2.74-.86v-.58Z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube"><Youtube size={17} /></a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer__col">
          <h4>Ikuti Kami</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="lane-line footer__lane" aria-hidden="true">
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <div className="container footer__bottom">
        <p>© 2026 Sinar Swimming Club. Hak cipta dilindungi.</p>
      </div>
    </footer>
  )
}

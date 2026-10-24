import { useState } from 'react'
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook, Send, CheckCircle2 } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import './Contact.css'

const PROGRAM_OPTIONS = ['Gaya Bebas', 'Gaya Dada', 'Gaya Punggung', 'Gaya Kupu-Kupu', 'Belum yakin']

const INITIAL = { name: '', email: '', phone: '', program: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Nama lengkap wajib diisi.'
  if (!values.email.trim()) {
    errors.email = 'Email wajib diisi.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Masukkan alamat email yang valid.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Nomor telepon wajib diisi.'
  } else if (!/^[0-9+()\s-]{7,}$/.test(values.phone)) {
    errors.phone = 'Masukkan nomor telepon yang valid.'
  }
  if (!values.program) errors.program = 'Silakan pilih program.'
  if (!values.message.trim()) errors.message = 'Ceritakan sedikit tentang target Anda.'
  return errors
}

export default function Contact() {
  const ref = useReveal()
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true)
      setValues(INITIAL)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section id="contact" className="contact section-pad" ref={ref}>
      <div className="container contact__grid">
        <div className="contact__info reveal">
          <p className="eyebrow">Kontak</p>
          <h2 className="section-heading">
            Ayo Mulai <span className="accent">Berenang</span>
          </h2>

          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <MapPin size={18} />
              </span>
              Jakarta, Indonesia
            </li>
            <li>
              <span className="contact__icon">
                <Phone size={18} />
              </span>
              +62 89602431954
            </li>
            <li>
              <span className="contact__icon">
                <Mail size={18} />
              </span>
              hello@sinarswimmingclub.com
            </li>
          </ul>

          <div className="contact__social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82c-.99-.99-1.55-2.33-1.56-3.72h-3.13v13.44c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1-2.72-2.72 2.72 2.72 0 0 1 2.72-2.72c.28 0 .56.05.82.13v-3.18a5.9 5.9 0 0 0-.82-.06A5.85 5.85 0 0 0 3.33 15.5a5.85 5.85 0 0 0 5.86 5.85 5.85 5.85 0 0 0 5.86-5.85V9.01a7.35 7.35 0 0 0 4.29 1.38V7.26c-.98 0-1.9-.29-2.74-.86v-.58Z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
          </div>

         
        </div>

        <form className="contact__form reveal reveal-delay-1" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="name">Nama Lengkap</label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              placeholder="Nama lengkap Anda"
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>

          <div className="contact__field-row">
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="anda@email.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="contact__error">{errors.email}</span>}
            </div>

            <div className="contact__field">
              <label htmlFor="phone">Nomor Telepon</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                placeholder="+62 8xx xxxx xxxx"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && <span className="contact__error">{errors.phone}</span>}
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="program">Program</label>
            <select
              id="program"
              name="program"
              value={values.program}
              onChange={handleChange}
              aria-invalid={Boolean(errors.program)}
            >
              <option value="" disabled>
                Pilih program
              </option>
              {PROGRAM_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.program && <span className="contact__error">{errors.program}</span>}
          </div>

          <div className="contact__field">
            <label htmlFor="message">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              placeholder="Ceritakan target renang Anda..."
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <span className="contact__error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            Kirim Pesan <Send size={16} />
          </button>

          {submitted && (
            <p className="contact__success">
              <CheckCircle2 size={18} /> Terima kasih — kami akan segera menghubungi Anda.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

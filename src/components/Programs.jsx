import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'
import gayaBebas from '../assets/images/gaya-bebas.jpg'
import gayaDada from '../assets/images/gaya-dada.jpg'
import gayaPunggung from '../assets/images/gaya-punggung.jpg'
import gayaKupuKupu from '../assets/images/gaya-kupu-kupu.jpg'
import './Programs.css'

const PROGRAMS = [
  {
    lane: '01',
    name: 'Gaya Bebas',
    audience: 'Pemula hingga mahir',
    focus: ['Gerakan kaki flutter kick', 'Ayunan lengan bergantian', 'Napas ke samping'],
    image: gayaBebas,
    credit: 'Foto: Staff Sgt. Desiree N. Palacios / Wikimedia Commons (domain publik)',
    desc: 'Gaya bebas (freestyle) adalah gaya renang tercepat dan paling efisien. Posisi tubuh telungkup dan lurus, lengan mengayuh bergantian sementara kaki menendang naik-turun tanpa henti. Gaya ini menjadi fondasi bagi hampir semua program latihan di SINAR.',
    technique: [
      'Tubuh lurus dan rata di permukaan air, pandangan ke dasar kolam.',
      'Lengan masuk ke air sejajar bahu, tarik ke belakang hingga paha.',
      'Kaki menendang dari pangkal paha dengan lutut sedikit lentur.',
      'Ambil napas dengan memutar kepala ke samping, bukan mengangkatnya.',
    ],
    benefits: ['Melatih daya tahan jantung dan paru', 'Membakar kalori paling tinggi', 'Menguatkan bahu, punggung, dan inti tubuh'],
    level: 'Semua level',
    schedule: '2–3x per minggu, 60 menit',
  },
  {
    lane: '02',
    name: 'Gaya Dada',
    audience: 'Cocok untuk pemula',
    focus: ['Tendangan kaki katak', 'Tarikan lengan melingkar', 'Ritme tarik–napas–luncur'],
    image: gayaDada,
    credit: 'Foto: Norman Bailey/Australian Paralympic Committee / Wikimedia Commons (CC BY-SA 3.0)',
    desc: 'Gaya dada (breaststroke) adalah gaya yang paling mudah dipelajari dan nyaman untuk renang jarak jauh. Lengan dan kaki bergerak simetris seperti katak, dengan kepala muncul ke permukaan setiap kali mengambil napas.',
    technique: [
      'Mulai dari posisi meluncur dengan lengan lurus ke depan.',
      'Tarik kedua lengan ke samping lalu ke dada membentuk lingkaran.',
      'Angkat kepala untuk bernapas saat lengan menarik.',
      'Tekuk lutut, buka kaki, lalu tendang dan rapatkan seperti katak.',
      'Luncurkan tubuh sejenak sebelum gerakan berikutnya.',
    ],
    benefits: ['Mudah dipelajari dan hemat tenaga', 'Menguatkan otot paha dan dada', 'Ideal untuk melatih koordinasi'],
    level: 'Pemula',
    schedule: '2x per minggu, 60 menit',
  },
  {
    lane: '03',
    name: 'Gaya Punggung',
    audience: 'Pemula hingga menengah',
    focus: ['Posisi telentang stabil', 'Ayunan lengan ke belakang', 'Napas bebas dan teratur'],
    image: gayaPunggung,
    credit: 'Foto: Terren / Wikimedia Commons (CC BY 2.0)',
    desc: 'Gaya punggung (backstroke) dilakukan dengan posisi telentang sehingga wajah selalu di atas air dan napas lebih leluasa. Gaya ini sangat baik untuk memperbaiki postur dan melatih keseimbangan tubuh di air.',
    technique: [
      'Berbaring telentang, telinga sejajar permukaan air, pinggul tetap tinggi.',
      'Lengan lurus masuk ke air di atas kepala dengan kelingking terlebih dahulu.',
      'Dorong air ke arah kaki, lalu angkat lengan keluar dari air.',
      'Kaki menendang naik-turun dengan cepat dan lutut tidak keluar air.',
    ],
    benefits: ['Memperbaiki postur tubuh', 'Melenturkan bahu dan tulang belakang', 'Bernapas lebih mudah'],
    level: 'Pemula – Menengah',
    schedule: '2x per minggu, 60 menit',
  },
  {
    lane: '04',
    name: 'Gaya Kupu-Kupu',
    audience: 'Menengah hingga mahir',
    focus: ['Gerakan gelombang (dolphin kick)', 'Ayunan lengan serempak', 'Kekuatan dan timing'],
    image: gayaKupuKupu,
    credit: 'Foto: Isiwal / Wikimedia Commons (CC BY-SA 4.0)',
    desc: 'Gaya kupu-kupu (butterfly) adalah gaya paling menantang dan bertenaga. Kedua lengan mengayun bersamaan di atas air, sementara tubuh bergerak seperti gelombang dengan tendangan lumba-lumba. Dibutuhkan kekuatan, koordinasi, dan timing yang tepat.',
    technique: [
      'Gerakkan tubuh seperti gelombang dari dada hingga ujung kaki.',
      'Lakukan dua tendangan lumba-lumba untuk setiap satu kayuhan lengan.',
      'Ayunkan kedua lengan bersamaan keluar dari air ke depan.',
      'Angkat dagu sedikit ke depan untuk bernapas saat lengan menarik.',
    ],
    benefits: ['Membangun kekuatan tubuh bagian atas', 'Melatih koordinasi dan ritme', 'Meningkatkan daya ledak untuk kompetisi'],
    level: 'Menengah – Mahir',
    schedule: '3x per minggu, 75 menit',
  },
]

export default function Programs() {
  const ref = useReveal()
  const [active, setActive] = useState(null)

  const close = () => setActive(null)

  useEffect(() => {
    if (!active) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="programs" className="programs section-pad" ref={ref}>
      <div className="container">
        <div className="section-head programs__head">
          <p className="eyebrow reveal">Program</p>
          <h2 className="section-heading reveal reveal-delay-1">
            Temukan <span className="accent">Lintasanmu</span>
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            Empat gaya, satu kolam — kuasai setiap gaya renang bersama pelatih profesional SINAR.
          </p>
        </div>

        <div className="programs__grid">
          {PROGRAMS.map((program, i) => (
            <article className={`program-card reveal reveal-delay-${Math.min(i + 1, 4)}`} key={program.lane}>
              <div className="program-card__media">
                <img src={program.image} alt={`Kelas renang ${program.name}`} />
                <span className="program-card__lane">LINTASAN {program.lane}</span>
              </div>
              <div className="program-card__body">
                <h3>{program.name}</h3>
                <p className="program-card__audience">{program.audience}</p>
                <ul className="program-card__focus">
                  {program.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button type="button" className="program-card__cta" onClick={() => setActive(program)}>
                  Selengkapnya <ArrowUpRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <div className="program-modal" role="dialog" aria-modal="true" aria-labelledby="program-modal-title">
          <div className="program-modal__backdrop" onClick={close} />
          <div className="program-modal__panel">
            <button className="program-modal__close" onClick={close} aria-label="Tutup detail">
              <X size={22} />
            </button>

            <div className="program-modal__media">
              <img src={active.image} alt={`Kelas renang ${active.name}`} />
              <span className="program-card__lane">LINTASAN {active.lane}</span>
            </div>

            <div className="program-modal__body">
              <h3 id="program-modal-title">{active.name}</h3>
              <div className="program-modal__meta">
                <span>Level: {active.level}</span>
                <span>Jadwal: {active.schedule}</span>
              </div>
              <p className="program-modal__desc">{active.desc}</p>

              <h4>Teknik Dasar</h4>
              <ol className="program-modal__steps">
                {active.technique.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <h4>Manfaat</h4>
              <ul className="program-card__focus">
                {active.benefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a href="#contact" className="btn btn-primary program-modal__cta" onClick={close}>
                Daftar Kelas {active.name} <ArrowRight size={18} />
              </a>

              <p className="program-modal__credit">{active.credit}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

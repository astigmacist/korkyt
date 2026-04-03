import { useLang } from '../context/LangContext'
import { useIntersection } from '../hooks/useIntersection'
import { Mail, Phone, MapPin } from 'lucide-react'
import './Contacts.css'

// Social SVG icons (brand icons not in lucide)
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
)

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
  </svg>
)

// Leaflet map using vanilla approach (no SSR issues)
function MapEmbed() {
  return (
    <div className="contacts-map">
      <iframe
        title="Korkyt Ata University Map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=65.4750%2C44.8420%2C65.5050%2C44.8600&layer=mapnik&marker=44.8504%2C65.4903"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/korkyt_ata_university',
    Icon: InstagramIcon,
    color: '#e1306c',
  },
  {
    label: 'Telegram',
    href: 'https://t.me/korkytata',
    Icon: TelegramIcon,
    color: '#0088cc',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@korkytata',
    Icon: YoutubeIcon,
    color: '#ff0000',
  },
]

export default function Contacts() {
  const { t } = useLang()
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section className={`contacts-section${isVisible ? ' visible' : ''}`} id="contacts" ref={ref}>
      <div className="contacts-container">
        {/* Left: info */}
        <div className="contacts-info">
          <span className="section-kicker">{t('contacts.kicker')}</span>
          <h2 className="contacts-title">{t('contacts.title')}</h2>
          <p className="contacts-desc">{t('contacts.desc')}</p>

          <div className="contacts-items">
            <a className="contact-item" href="mailto:admission@korkyt.edu.kz">
              <div className="contact-icon-wrap" style={{ '--c': '#1a5a96' } as React.CSSProperties}>
                <Mail size={20} strokeWidth={1.8} />
              </div>
              <div>
                <div className="contact-label">{t('contacts.email.label')}</div>
                <div className="contact-value">admission@korkyt.edu.kz</div>
              </div>
            </a>

            <a className="contact-item" href="tel:+77242260036">
              <div className="contact-icon-wrap" style={{ '--c': '#059669' } as React.CSSProperties}>
                <Phone size={20} strokeWidth={1.8} />
              </div>
              <div>
                <div className="contact-label">{t('contacts.phone.label')}</div>
                <div className="contact-value">+7 (7242) 26-00-36</div>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-icon-wrap" style={{ '--c': '#d97706' } as React.CSSProperties}>
                <MapPin size={20} strokeWidth={1.8} />
              </div>
              <div>
                <div className="contact-label">{t('contacts.address.label')}</div>
                <div className="contact-value">{t('footer.address')}</div>
              </div>
            </div>
          </div>

          {/* Social networks */}
          <div className="contacts-socials">
            <div className="socials-label">{t('contacts.socials')}</div>
            <div className="socials-row">
              {socials.map(s => {
                const Icon = s.Icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{ '--social-color': s.color } as React.CSSProperties}
                  >
                    <Icon />
                    <span>{s.label}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div className="contacts-map-wrap">
          <MapEmbed />
        </div>
      </div>
    </section>
  )
}

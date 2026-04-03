import { useIntersection } from '../hooks/useIntersection'
import { useLang } from '../context/LangContext'
import { FileText, Stamp, Plane, Building2, MapPin, GraduationCap } from 'lucide-react'
import './Highlights.css'

const bentoItems = [
  {
    id: 'docs',
    icon: FileText,
    titleKey: 'hl.docs.title',
    textKey: 'hl.docs.text',
    size: 'large',
    accent: '#1a5a96',
    bg: 'linear-gradient(135deg, #e8f1fb 0%, #d4e6f8 100%)',
    bgDark: 'linear-gradient(135deg, rgba(26,90,150,0.15) 0%, rgba(13,58,98,0.2) 100%)',
  },
  {
    id: 'visa',
    icon: Stamp,
    titleKey: 'hl.visa.title',
    textKey: 'hl.visa.text',
    size: 'medium',
    accent: '#7c3aed',
    bg: 'linear-gradient(135deg, #f1ecfd 0%, #e6dcff 100%)',
    bgDark: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(100,40,210,0.18) 100%)',
  },
  {
    id: 'fee',
    icon: Stamp,
    titleKey: 'hl.fee.title',
    textKey: 'hl.fee.text',
    size: 'small',
    accent: '#d97706',
    bg: 'linear-gradient(135deg, #fef3e2 0%, #fde8c2 100%)',
    bgDark: 'linear-gradient(135deg, rgba(217,119,6,0.12) 0%, rgba(180,100,0,0.18) 100%)',
  },
  {
    id: 'flight',
    icon: Plane,
    titleKey: 'hl.flight.title',
    textKey: 'hl.flight.text',
    size: 'medium',
    accent: '#059669',
    bg: 'linear-gradient(135deg, #e6f7f2 0%, #c6eddf 100%)',
    bgDark: 'linear-gradient(135deg, rgba(5,150,105,0.12) 0%, rgba(4,120,87,0.18) 100%)',
  },
  {
    id: 'dorm',
    icon: Building2,
    titleKey: 'hl.dorm.title',
    textKey: 'hl.dorm.text',
    size: 'small',
    accent: '#dc2626',
    bg: 'linear-gradient(135deg, #fdedef 0%, #f9d0d6 100%)',
    bgDark: 'linear-gradient(135deg, rgba(220,38,38,0.12) 0%, rgba(180,25,25,0.18) 100%)',
  },
  {
    id: 'city',
    icon: MapPin,
    titleKey: 'hl.city.title',
    textKey: 'hl.city.text',
    size: 'wide',
    accent: '#0891b2',
    bg: 'linear-gradient(135deg, #e0f5fa 0%, #beeafb 100%)',
    bgDark: 'linear-gradient(135deg, rgba(8,145,178,0.12) 0%, rgba(6,115,140,0.18) 100%)',
  },
]

export default function Highlights() {
  const { t } = useLang()
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section
      className={`bento-section${isVisible ? ' visible' : ''}`}
      ref={ref}
      id="checklist"
    >
      <div className="bento-container">
        <div className="bento-header">
          <span className="section-kicker">
            <GraduationCap size={13} style={{ display: 'inline', marginRight: 5 }} />
            {t('highlights.kicker')}
          </span>
          <h2 className="bento-title">{t('highlights.title')}</h2>
          <p className="section-desc bento-desc">{t('highlights.desc')}</p>
        </div>

        <div className="bento-grid">
          {bentoItems.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className={`bento-card bento-${item.size}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="bento-card-inner"
                  style={{ '--card-accent': item.accent, '--card-bg': item.bg, '--card-bg-dark': item.bgDark } as React.CSSProperties}
                >
                  <div className="bento-icon-wrap">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <h3 className="bento-item-title">{t(item.titleKey)}</h3>
                  <p className="bento-item-text">{t(item.textKey)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

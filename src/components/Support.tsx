import { useLang } from '../context/LangContext'
import { useIntersection } from '../hooks/useIntersection'
import { Stamp, Home, UserCheck, CheckCircle } from 'lucide-react'
import './Support.css'

const cards = [
  {
    titleKey: 's.1.title',
    icon: Stamp,
    points: ['s.1.p1', 's.1.p2', 's.1.p3', 's.1.p4'],
    color: '#7c3aed',
    size: 'big',
  },
  {
    titleKey: 's.2.title',
    icon: Home,
    points: ['s.2.p1', 's.2.p2', 's.2.p3'],
    color: '#1a5a96',
    size: 'normal',
  },
  {
    titleKey: 's.3.title',
    icon: UserCheck,
    points: ['s.3.p1', 's.3.p2', 's.3.p3'],
    color: '#059669',
    size: 'normal',
  },
]

export default function Support() {
  const { t } = useLang()
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section className={`support-section${isVisible ? ' visible' : ''}`} id="support" ref={ref}>
      <div className="support-container">
        <div className="support-header">
          <span className="section-kicker">{t('support.kicker')}</span>
          <h2 className="support-title">{t('support.title')}</h2>
          <p className="section-desc">{t('support.desc')}</p>
        </div>

        <div className="support-grid">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <article
                key={card.titleKey}
                className={`support-card support-${card.size}`}
                style={{
                  animationDelay: `${i * 0.12}s`,
                  '--support-color': card.color,
                } as React.CSSProperties}
              >
                <div className="support-card-top">
                  <div className="support-icon">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3>{t(card.titleKey)}</h3>
                </div>
                <ul className="support-list">
                  {card.points.map(pKey => (
                    <li key={pKey}>
                      <CheckCircle size={14} strokeWidth={2.5} className="check-icon" />
                      <span>{t(pKey)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

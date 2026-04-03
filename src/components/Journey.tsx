import { useLang } from '../context/LangContext'
import { useIntersection } from '../hooks/useIntersection'
import {
  FileSearch, UserPlus, Upload, Bell, CheckCircle2, Home, GraduationCap
} from 'lucide-react'
import './Journey.css'

const steps = [
  {
    key: 'j.1',
    icon: FileSearch,
    descKey: 'j.1.desc',
    color: '#1a5a96',
  },
  {
    key: 'j.2',
    icon: UserPlus,
    descKey: 'j.2.desc',
    color: '#7c3aed',
  },
  {
    key: 'j.3',
    icon: Upload,
    descKey: 'j.3.desc',
    color: '#d97706',
  },
  {
    key: 'j.4',
    icon: Bell,
    descKey: 'j.4.desc',
    color: '#059669',
  },
  {
    key: 'j.5',
    icon: CheckCircle2,
    descKey: 'j.5.desc',
    color: '#0891b2',
  },
  {
    key: 'j.6',
    icon: Home,
    descKey: 'j.6.desc',
    color: '#dc2626',
  },
  {
    key: 'j.7',
    icon: GraduationCap,
    descKey: 'j.7.desc',
    color: '#16a34a',
  },
]

export default function Journey() {
  const { t } = useLang()
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section className={`journey-section${isVisible ? ' visible' : ''}`} id="journey" ref={ref}>
      <div className="journey-container">
        <div className="journey-header">
          <span className="section-kicker">{t('journey.kicker')}</span>
          <h2 className="journey-title">{t('journey.title')}</h2>
          <p className="section-desc" style={{ maxWidth: 520 }}>{t('journey.desc')}</p>
        </div>

        <div className="journey-timeline">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isRight = i % 2 === 1
            return (
              <div
                key={step.key}
                className={`journey-step${isRight ? ' right' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="step-card">
                  <div
                    className="step-icon-wrap"
                    style={{ '--step-color': step.color } as React.CSSProperties}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <div className="step-body">
                    <div className="step-num">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="step-title">{t(step.key)}</h3>
                    <p className="step-desc">{t(step.descKey)}</p>
                  </div>
                </div>
                <div className="step-line" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

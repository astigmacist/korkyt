import { useLang } from '../context/LangContext'
import { useIntersection } from '../hooks/useIntersection'
import { BookOpen, Microscope, Languages } from 'lucide-react'
import './Programs.css'

const programs = [
  {
    titleKey: 'p.1.title',
    metaKey: 'p.1.meta',
    textKey: 'p.1.text',
    icon: BookOpen,
    featured: true,
    color: '#1a5a96',
    specs: ['p.1.spec1', 'p.1.spec2', 'p.1.spec3'],
  },
  {
    titleKey: 'p.2.title',
    metaKey: 'p.2.meta',
    textKey: 'p.2.text',
    icon: Microscope,
    featured: false,
    color: '#7c3aed',
    specs: [],
  },
  {
    titleKey: 'p.3.title',
    metaKey: 'p.3.meta',
    textKey: 'p.3.text',
    icon: Languages,
    featured: false,
    color: '#059669',
    specs: [],
  },
]

export default function Programs() {
  const { t } = useLang()
  const { ref, isVisible } = useIntersection(0.1)

  return (
    <section className={`programs-section${isVisible ? ' visible' : ''}`} id="programs" ref={ref}>
      <div className="programs-container">
        <div className="programs-head">
          <div>
            <span className="section-kicker">{t('programs.kicker')}</span>
            <h2 className="programs-title">{t('programs.title')}</h2>
            <p className="section-desc">{t('programs.desc')}</p>
          </div>
          <a className="btn-outline programs-all" href="#">
            {t('programs.all')}
          </a>
        </div>

        <div className="programs-grid">
          {programs.map((prog, i) => {
            const Icon = prog.icon
            return (
              <article
                key={prog.titleKey}
                className={`program-card${prog.featured ? ' featured' : ''}`}
                style={{
                  animationDelay: `${i * 0.1}s`,
                  '--prog-color': prog.color,
                } as React.CSSProperties}
              >
                {prog.featured && (
                  <div className="program-featured-label">{t('programs.popular')}</div>
                )}
                <div className="program-icon-wrap">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div className="program-meta">{t(prog.metaKey)}</div>
                <h3 className="program-name">{t(prog.titleKey)}</h3>
                <p className="program-text">{t(prog.textKey)}</p>
                {prog.specs.length > 0 && (
                  <ul className="program-specs">
                    {prog.specs.map(sk => (
                      <li key={sk}>
                        <span className="spec-dot" />
                        {t(sk)}
                      </li>
                    ))}
                  </ul>
                )}
                <a
                  className={prog.featured ? 'btn-primary program-cta' : 'btn-outline program-cta'}
                  href="#journey"
                >
                  {t('p.apply')}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

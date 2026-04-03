import { useLang } from '../context/LangContext'
import heroBg from '../assets/hero-bg.png'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img src={heroBg} alt="Korkyt Ata University Campus" />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge-wrap">
          <span className="hero-badge">
            <span className="badge-dot" />
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="hero-title">
          {t('hero.title1')}
          <br />
          <span className="hero-highlight">{t('hero.title2')}</span>
        </h1>

        <p className="hero-subtitle">{t('hero.subtitle')}</p>

        <div className="hero-actions">
          <a className="btn-primary btn-lg" href="#journey">
            {t('hero.cta_journey')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a className="btn-outline btn-lg hero-outline" href="#programs">
            {t('hero.cta_programs')}
          </a>
        </div>

        <div className="hero-trust">
          <div className="trust-flags">
            {['🇰🇿','🇺🇿','🇹🇯','🇹🇲','🇦🇿','🇰🇬','🇨🇳','🇮🇳'].map(f => (
              <span key={f} className="trust-flag">{f}</span>
            ))}
          </div>
          <span className="trust-text">10 000+ {t('stats.students')} · 30+ {t('hero.countries')}</span>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse"><div className="scroll-dot" /></div>
      </div>
    </section>
  )
}

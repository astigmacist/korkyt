import { useLang } from '../../context/LangContext'
import { useIntersection } from '../../hooks/useIntersection'
import { useCountUp } from '../../hooks/useCountUp'
import {
  GraduationCap, Users, Building2, BookOpen, Globe2,
  ArrowRight, CheckCircle, Star
} from 'lucide-react'
import heroBg from '../../assets/hero-bg.png'

// ─── STATS ────────────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, isVisible } = useIntersection(0.3)
  const count = useCountUp(value, isVisible, 1800)
  return (
    <div ref={ref} style={{
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)', padding: '20px 24px', textAlign: 'center'
    }}>
      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: 6, fontWeight: 500 }}>{label}</div>
    </div>
  )
}

export default function HomePage() {
  const { t } = useLang()
  const { ref: heroRef, isVisible: heroVisible } = useIntersection(0.1)

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        style={{
          position: 'relative', borderRadius: 'var(--radius-xl)',
          overflow: 'hidden', minHeight: 420, marginBottom: 32,
          opacity: heroVisible ? 1 : 0,
          transform: heroVisible ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease'
        }}
      >
        <img
          src={heroBg}
          alt="Korkyt Ata University"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(8,20,45,0.82) 0%, rgba(14,35,70,0.7) 50%, rgba(20,50,100,0.55) 100%)'
        }} />

        <div style={{ position: 'relative', padding: 'clamp(32px, 5vw, 56px)', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999,
            padding: '6px 16px', color: '#fff', fontSize: 12, fontWeight: 600, width: 'fit-content'
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
            {t('hero.badge')}
          </span>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 900, color: '#fff', lineHeight: 1.05, margin: 0, maxWidth: 680
          }}>
            {t('hero.title1')}<br />
            <span style={{ background: 'linear-gradient(90deg, #60b3f8, #a5f3fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {t('hero.title2')}
            </span>
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: 560, lineHeight: 1.7, margin: 0 }}>
            {t('hero.subtitle')}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn-primary" href="/roadmap/choose" style={{ textDecoration: 'none', fontSize: '0.9rem', padding: '11px 22px' }}>
              {t('hero.cta_journey')} <ArrowRight size={16} />
            </a>
            <a href="/programs/bachelor" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.25)', color: '#fff',
              padding: '11px 22px', borderRadius: 'var(--radius-md)',
              fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none',
              transition: 'background 0.2s'
            }}>
              {t('hero.cta_programs')}
            </a>
          </div>

          <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}>
            {['🇰🇿','🇺🇿','🇹🇯','🇹🇲','🇦🇿','🇰🇬','🇨🇳','🇮🇳'].map(f => (
              <span key={f} style={{ fontSize: 20 }}>{f}</span>
            ))}
            <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, marginLeft: 8 }}>10 000+ {t('stats.students')} · 30+ {t('hero.countries')}</span>
          </div>
        </div>
      </div>

      {/* ─── STATS GRID ──────────────────────────────────────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 14, marginBottom: 36 }}>
        <StatCard value={1996} label={t('stats.founded')} />
        <StatCard value={10000} suffix="+" label={t('stats.students')} />
        <StatCard value={700} suffix="+" label={t('stats.faculty')} />
        <StatCard value={8} label={t('stats.buildings')} />
        <StatCard value={5} label={t('stats.dormitories')} />
      </div>

      {/* ─── QUICK ACCESS CARDS ──────────────────────────────────────────────── */}
      <div style={{ marginBottom: 12 }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>
          Быстрый доступ
        </h2>
        <div className="info-grid">
          {[
            { icon: GraduationCap, title: 'Образовательные программы', desc: 'Бакалавриат, магистратура, языковые курсы', href: '/programs/bachelor', color: '#1a5a96' },
            { icon: BookOpen, title: 'Путь поступления', desc: '6 шагов от заявки до зачисления', href: '/roadmap/choose', color: '#7c3aed' },
            { icon: Globe2, title: 'Миграция и виза', desc: 'Оформление студенческой визы в Казахстан', href: '/migration/types', color: '#059669' },
            { icon: Users, title: 'Быт и адаптация', desc: 'Общежития, питание, медицина, транспорт', href: '/life/dorms', color: '#d97706' },
            { icon: Building2, title: 'Об университете', desc: 'История, факультеты, преимущества', href: '/about/university', color: '#0891b2' },
            { icon: Star, title: 'Подать заявку', desc: 'Начните процесс поступления онлайн', href: '/apply/form', color: '#dc2626' },
          ].map(card => {
            const Icon = card.icon
            return (
              <a key={card.href} href={card.href} className="info-grid-card" style={{ textDecoration: 'none', display: 'block' }}>
                <div className="card-icon" style={{ background: `${card.color}15`, color: card.color }}>
                  <Icon size={20} />
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </a>
            )
          })}
        </div>
      </div>

      {/* ─── CHECKLIST BANNER ──────────────────────────────────────────────── */}
      <div style={{
        background: 'var(--accent-gradient)', borderRadius: 'var(--radius-lg)',
        padding: '28px 32px', color: '#fff', display: 'flex', alignItems: 'center',
        gap: 24, flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, minWidth: 200 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75, marginBottom: 8 }}>
            Важно знать
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800, margin: '0 0 8px', color: '#fff' }}>
            Всё оформляется онлайн
          </h3>
          <p style={{ opacity: 0.85, fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
            Не нужно приезжать для подачи документов. Всё загружается через платформу. Приезжать нужно только после получения визы.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['Диплом + перевод', 'Паспорт (копия)', 'Медсправка', 'Фото 3×4'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 500 }}>
              <CheckCircle size={16} style={{ flexShrink: 0 }} /> {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

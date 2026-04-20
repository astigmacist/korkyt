import PageHeader from '../../ui/PageHeader'
import { sourcedContentNote, universityStats } from '../../../content/siteContent'

export default function StatsPage() {
  return (
    <>
      <PageHeader
        kicker="О портале"
        title="Статистика и цифры"
        desc="Университет Коркыт Ата в числах — факты, которые повторяются в ваших материалах и дают более точную картину, чем старые моковые значения."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, marginBottom: 32 }}>
        {universityStats.map(item => (
          <div
            key={item.label}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '28px 20px',
              textAlign: 'center',
            }}
          >
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
              {item.value}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: 8, fontWeight: 500 }}>
              {item.label}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: 10, lineHeight: 1.5 }}>
              {item.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Примечание</h3>
        <p>{sourcedContentNote}</p>
      </div>
    </>
  )
}

import PageHeader from '../../ui/PageHeader'

const stats = [
  { value: '1996', label: 'Год основания' }, { value: '10 000+', label: 'Студентов' },
  { value: '700+', label: 'Преподавателей' }, { value: '8', label: 'Учебных корпусов' },
  { value: '5', label: 'Общежитий' }, { value: '70+', label: 'Специальностей' },
  { value: '30+', label: 'Стран мира' }, { value: '95%', label: 'Трудоустройство' },
]

export default function StatsPage() {
  return (
    <>
      <PageHeader kicker="О портале" title="Статистика и цифры" desc="Университет Коркыт Ата в числах — факты, подтверждённые результатами." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16, marginBottom: 32 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '28px 20px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </>
  )
}

import PageHeader from '../../ui/PageHeader'
import { lifeSections } from '../../../content/siteContent'

export default function CulturePage() {
  const section = lifeSections.culture

  return (
    <>
      <PageHeader kicker="Быт и адаптация" title="Культурная адаптация" desc={section.desc} />
      <div className="info-card">
        <h3>{section.title}</h3>
        <ul style={{ paddingLeft: 18, marginTop: 12 }}>
          {section.bullets.map(item => (
            <li key={item} style={{ marginBottom: 10, color: 'var(--text-secondary)' }}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

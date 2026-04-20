import PageHeader from '../../ui/PageHeader'
import { lifeSections } from '../../../content/siteContent'

export default function DormsPage() {
  const section = lifeSections.dorms

  return (
    <>
      <PageHeader kicker="Быт и адаптация" title="Общежития и жилье" desc={section.desc} />
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

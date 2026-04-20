import PageHeader from '../../ui/PageHeader'
import { doctoralCategories, masterCategories, sourcedContentNote } from '../../../content/siteContent'

export default function MasterPage() {
  return (
    <>
      <PageHeader
        kicker="Программы"
        title="Магистратура"
        desc="По официальному перечню магистратура охватывает педагогические, гуманитарные, бизнес, IT, инженерные и аграрные направления."
      />

      <div className="info-card">
        <h3>Структура магистратуры</h3>
        <p>
          В предоставленном перечне отражены как классические магистерские программы, так и
          отдельные совместные или международные треки. Ниже направления сгруппированы по
          академическим блокам, чтобы вам было проще соотнести их со своей будущей специализацией.
        </p>
      </div>

      <div className="steps-list">
        {masterCategories.map((category, index) => (
          <div key={category.title} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>{category.title}</h4>
              <p>{category.programs.join(' • ')}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Также доступна PhD-докторантура</h3>
        <div className="steps-list" style={{ marginTop: 18 }}>
          {doctoralCategories.map((category, index) => (
            <div key={category.title} className="step-item">
              <div className="step-item-num">{index + 1}</div>
              <div className="step-item-body">
                <h4>{category.title}</h4>
                <p>{category.programs.join(' • ')}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 16, color: 'var(--text-tertiary)', fontSize: '0.88rem' }}>{sourcedContentNote}</p>
      </div>
    </>
  )
}

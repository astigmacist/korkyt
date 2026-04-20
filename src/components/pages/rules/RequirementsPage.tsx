import PageHeader from '../../ui/PageHeader'
import { admissionRequirements, foundationDetails, kandasDetails } from '../../../content/siteContent'

export default function RequirementsPage() {
  return (
    <>
      <PageHeader
        kicker="Правила приема"
        title="Общие требования"
        desc="Основные условия поступления для иностранных граждан по материалам университета на 2026-2027 учебный год."
      />

      <div className="info-card">
        <h3>Ключевой принцип приёма</h3>
        <p>
          Для иностранных граждан на платной основе не требуется сдавать ЕНТ.
          Поступление проводится по итогам собеседования с комиссией университета,
          а базовый пакет документов загружается через портал онлайн.
        </p>
      </div>

      <div className="steps-list">
        {admissionRequirements.map((item, index) => (
          <div key={item} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>Требование {index + 1}</h4>
              <p>{item}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Если вы ещё не владеете языком обучения</h3>
        <ul style={{ paddingLeft: 18, marginTop: 12 }}>
          {foundationDetails.map(item => (
            <li key={item} style={{ marginBottom: 10, color: 'var(--text-secondary)' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="info-card">
        <h3>Важно для қандастар</h3>
        <ul style={{ paddingLeft: 18, marginTop: 12 }}>
          {kandasDetails.map(item => (
            <li key={item} style={{ marginBottom: 10, color: 'var(--text-secondary)' }}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

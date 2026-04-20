import PageHeader from '../../ui/PageHeader'
import { migrationServices } from '../../../content/siteContent'

export default function VisaPage() {
  return (
    <>
      <PageHeader
        kicker="Путь поступления"
        title="Оформление визы"
        desc="По материалам университета визовый режим зависит от гражданства: для части стран действуют облегчённые условия или безвизовый порядок, а точные требования подтверждаются индивидуально."
      />

      <div className="info-grid">
        {migrationServices.map(item => (
          <div key={item.title} className="info-grid-card">
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Практический совет</h3>
        <p>
          Не стоит опираться на универсальные визовые советы из интернета. В ваших документах
          акцент сделан на том, что именно международный офис университета помогает пройти этот этап
          корректно с учётом страны гражданства.
        </p>
      </div>
    </>
  )
}

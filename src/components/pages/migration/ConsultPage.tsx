import PageHeader from '../../ui/PageHeader'
import { migrationServices } from '../../../content/siteContent'

export default function ConsultPage() {
  return (
    <>
      <PageHeader
        kicker="Миграция и виза"
        title="Консультация специалиста"
        desc="Самый надёжный путь по визовым и регистрационным вопросам — консультация с международным офисом университета."
      />

      <div className="steps-list">
        {migrationServices.map((item, index) => (
          <div key={item.title} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

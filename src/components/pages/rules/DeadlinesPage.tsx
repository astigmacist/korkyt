import PageHeader from '../../ui/PageHeader'
import { admissionDeadlines } from '../../../content/siteContent'

export default function DeadlinesPage() {
  return (
    <>
      <PageHeader
        kicker="Правила приема"
        title="Сроки подачи заявок"
        desc="Ключевые даты приёма иностранных абитуриентов по вашим документам на 2026-2027 учебный год."
      />

      <div className="steps-list">
        {admissionDeadlines.map((item, index) => (
          <div key={item.title} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Почему важно не тянуть до последней недели</h3>
        <p>
          Университет рекомендует планировать подачу заранее, чтобы успеть пройти собеседование,
          получить финальное решение и подготовить миграционные шаги до начала учебного периода.
        </p>
      </div>
    </>
  )
}

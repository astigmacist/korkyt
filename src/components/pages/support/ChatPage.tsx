import PageHeader from '../../ui/PageHeader'
import { supportServices } from '../../../content/siteContent'

export default function ChatPage() {
  return (
    <>
      <PageHeader
        kicker="Помощь и поддержка"
        title="Чат-бот"
        desc="Чат помогает быстро сориентироваться по admission-процессу, но по сложным визовым и организационным вопросам лучше сразу обращаться к людям."
      />

      <div className="info-card">
        <h3>Когда достаточно чат-бота</h3>
        <p>
          Для навигации по разделам портала, базовых вопросов о документах, дедлайнах, собеседовании
          и бытовой адаптации чат-бот удобен как первая точка входа.
        </p>
      </div>

      <div className="steps-list">
        {supportServices.map((service, index) => (
          <div key={service.title} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>{service.title}</h4>
              <p>{service.points.join(' ')}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

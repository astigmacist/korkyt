import PageHeader from '../../ui/PageHeader'
import { interviewFacts } from '../../../content/siteContent'

export default function ReviewPage() {
  return (
    <>
      <PageHeader
        kicker="Путь поступления"
        title="Рассмотрение заявки"
        desc="После того как документы загружены полностью, университет переходит к этапу собеседования и решения по заявке."
      />

      <div className="steps-list">
        {interviewFacts.map((item, index) => (
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
        <h3>Что будет оцениваться</h3>
        <p>
          Комиссии важны ваша мотивация, интерес к специальности и базовая академическая готовность.
          По вашим материалам это не сложный экзамен, а управляемый и понятный этап admission-процесса.
        </p>
      </div>
    </>
  )
}

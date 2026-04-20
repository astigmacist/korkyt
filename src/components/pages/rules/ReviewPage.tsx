import PageHeader from '../../ui/PageHeader'
import { interviewFacts } from '../../../content/siteContent'

export default function ReviewPage() {
  return (
    <>
      <PageHeader
        kicker="Правила приема"
        title="Процесс рассмотрения"
        desc="После загрузки полного пакета документов университет переводит заявку в формат собеседования и дальнейшего академического рассмотрения."
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
        <h3>На что ориентируется комиссия</h3>
        <p>
          По вашим материалам это не тяжёлый экзамен, а проверка мотивации, интереса к выбранной
          специальности и базовой академической подготовки. Такой формат особенно удобен для
          иностранных абитуриентов, потому что не требует приезда до получения решения.
        </p>
      </div>
    </>
  )
}

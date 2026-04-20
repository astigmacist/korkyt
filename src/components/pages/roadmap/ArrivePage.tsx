import PageHeader from '../../ui/PageHeader'
import { lifeSections } from '../../../content/siteContent'

export default function ArrivePage() {
  return (
    <>
      <PageHeader
        kicker="Путь поступления"
        title="Прибытие и регистрация"
        desc="После прибытия главные задачи — разместиться, пройти первичную адаптацию и оформить проживание по фактическому адресу."
      />

      <div className="steps-list">
        {[
          ['Заселение', lifeSections.dorms.bullets[0]],
          ['Фактический адрес', lifeSections.dorms.bullets[2]],
          ['Orientation и знакомство с городом', lifeSections.culture.bullets[0]],
          ['Интеграция в новую среду', lifeSections.culture.bullets[1]],
        ].map(([title, desc], index) => (
          <div key={title} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

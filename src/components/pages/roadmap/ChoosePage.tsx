import PageHeader from '../../ui/PageHeader'
import { foundationDetails } from '../../../content/siteContent'

export default function ChoosePage() {
  return (
    <>
      <PageHeader
        kicker="Путь поступления"
        title="Выбор программы"
        desc="Первый шаг для иностранного абитуриента — выбрать уровень обучения, язык и академическое направление."
      />

      <div className="info-card">
        <h3>С чего начать</h3>
        <p>
          По вашим документам университет предлагает бакалавриат, магистратуру и PhD-докторантуру.
          На этом этапе важно определить уровень программы, понять язык обучения и заранее
          свериться с официальным перечнем образовательных программ.
        </p>
      </div>

      <div className="steps-list">
        {[
          ['Определите уровень обучения', 'Выберите бакалавриат, магистратуру или докторскую траекторию в зависимости от уже полученного образования.'],
          ['Сверьтесь с официальным перечнем', 'Используйте утверждённые списки программ на 2026-2027 учебный год, а не рекламные описания без кодов.'],
          ['Учитывайте язык обучения', 'Собеседование и дальнейшая траектория зависят от языка программы: казахский, русский или английский.'],
          ['Если нужно — закладывайте Foundation', 'Подготовительное отделение помогает тем, кто пока не владеет языком обучения на нужном уровне.'],
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

      <div className="info-card">
        <h3>Когда особенно полезен Foundation</h3>
        <ul style={{ paddingLeft: 18, marginTop: 12 }}>
          {foundationDetails.map(item => (
            <li key={item} style={{ marginBottom: 10, color: 'var(--text-secondary)' }}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

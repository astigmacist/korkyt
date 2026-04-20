import PageHeader from '../../ui/PageHeader'
import { admissionDeadlines, requiredDocuments } from '../../../content/siteContent'

export default function SubmitPage() {
  return (
    <>
      <PageHeader
        kicker="Путь поступления"
        title="Подача документов"
        desc="После выбора программы начинается полностью онлайн-этап: вы заполняете форму и загружаете электронные копии документов."
      />

      <div className="info-card">
        <h3>Ключевой дедлайн</h3>
        <p>
          По вашим материалам онлайн-приём документов для иностранных абитуриентов проходит с 15 июня
          по 1 августа. Именно в этот период университет ожидает загруженный пакет документов.
        </p>
      </div>

      <div className="steps-list">
        {admissionDeadlines.slice(0, 2).map((item, index) => (
          <div key={item.title} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="info-grid">
        {requiredDocuments.map(doc => (
          <div key={doc.title} className="info-grid-card">
            <h4>{doc.title}</h4>
            <p>{doc.desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

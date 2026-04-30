import PageHeader from '../../ui/PageHeader'
import { FileText } from 'lucide-react'
import { admissionDeadlines, admissionSubmissionChecklist, requiredDocuments } from '../../../content/siteContent'
import DocumentRequirementCard from '../../ui/DocumentRequirementCard'

export default function SubmitPage() {
  return (
    <>
      <PageHeader
        kicker="Путь поступления"
        title="Подача документов"
        desc="Заполните форму и загрузите документы онлайн."
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

      <div className="info-card">
        <h3>Перед отправкой формы</h3>
        <ul className="content-list">
          {admissionSubmissionChecklist.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="info-grid">
        {requiredDocuments.map(doc => (
          <DocumentRequirementCard key={doc.title} doc={doc} icon={<FileText size={18} />} />
        ))}
      </div>
    </>
  )
}

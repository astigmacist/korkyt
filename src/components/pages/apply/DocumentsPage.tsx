import PageHeader from '../../ui/PageHeader'
import { FileText, ShieldCheck, Stethoscope } from 'lucide-react'
import { admissionSubmissionChecklist, requiredDocuments } from '../../../content/siteContent'
import DocumentRequirementCard from '../../ui/DocumentRequirementCard'

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        kicker="Подача заявки"
        title="Загрузка документов"
        desc="Короткий список документов и форматов для загрузки."
      />

      <div className="info-grid">
        {requiredDocuments.map(doc => (
          <DocumentRequirementCard key={doc.title} doc={doc} icon={<FileText size={18} />} />
        ))}
        <div className="info-grid-card">
          <div className="card-icon"><ShieldCheck size={18} /></div>
          <h4>Качество файла</h4>
          <p>Текст, подписи и печати должны читаться.</p>
        </div>
        <div className="info-grid-card">
          <div className="card-icon"><Stethoscope size={18} /></div>
          <h4>Медицинская часть</h4>
          <p>Медицинскую справку можно добавить позже, если это согласовано с университетом.</p>
        </div>
      </div>

      <div className="info-card">
        <h3>Перед отправкой</h3>
        <ul className="content-list">
          {admissionSubmissionChecklist.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

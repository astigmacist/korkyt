import PageHeader from '../../ui/PageHeader'
import { FileText } from 'lucide-react'
import { admissionSubmissionChecklist, requiredDocuments } from '../../../content/siteContent'
import DocumentRequirementCard from '../../ui/DocumentRequirementCard'

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        kicker="Правила приема"
        title="Документы для поступления"
        desc="Основные документы и форматы для поступления."
      />

      <div className="info-grid">
        {requiredDocuments.map(doc => (
          <DocumentRequirementCard key={doc.title} doc={doc} icon={<FileText size={18} />} />
        ))}
      </div>

      <div className="info-card">
        <h3>Важно</h3>
        <p>
          Документ об образовании и паспорт должны сопровождаться нотариально заверенным переводом
          на русский или казахский язык. По материалам университета вопрос нострификации можно
          закрывать уже в течение первого семестра при поддержке специалистов.
        </p>
        <ul className="content-list" style={{ marginTop: 16 }}>
          {admissionSubmissionChecklist.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

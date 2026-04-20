import PageHeader from '../../ui/PageHeader'
import { FileText } from 'lucide-react'
import { requiredDocuments } from '../../../content/siteContent'

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        kicker="Правила приема"
        title="Документы для поступления"
        desc="Документы загружаются через портал в электронном виде. Названия и требования ниже приведены по вашим материалам."
      />

      <div className="info-grid">
        {requiredDocuments.map(doc => (
          <div key={doc.title} className="info-grid-card">
            <div className="card-icon"><FileText size={18} /></div>
            <h4>{doc.title}</h4>
            <p>{doc.desc}</p>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Что ещё важно учитывать</h3>
        <p>
          Документ об образовании и паспорт должны сопровождаться нотариально заверенным переводом
          на русский или казахский язык. По материалам университета вопрос нострификации можно
          закрывать уже в течение первого семестра при поддержке специалистов.
        </p>
      </div>
    </>
  )
}

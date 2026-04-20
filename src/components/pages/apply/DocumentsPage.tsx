import PageHeader from '../../ui/PageHeader'
import { FileText, ShieldCheck, Stethoscope } from 'lucide-react'
import { requiredDocuments } from '../../../content/siteContent'

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        kicker="Подача заявки"
        title="Загрузка документов"
        desc="Здесь собран пакет документов, который университет просит подготовить для admission-этапа."
      />

      <div className="info-grid">
        {requiredDocuments.map(doc => (
          <div key={doc.title} className="info-grid-card">
            <div className="card-icon"><FileText size={18} /></div>
            <h4>{doc.title}</h4>
            <p>{doc.desc}</p>
          </div>
        ))}
        <div className="info-grid-card">
          <div className="card-icon"><ShieldCheck size={18} /></div>
          <h4>Нотариальный перевод</h4>
          <p>Паспорт и документы об образовании должны сопровождаться переводом на русский или казахский язык.</p>
        </div>
        <div className="info-grid-card">
          <div className="card-icon"><Stethoscope size={18} /></div>
          <h4>Медицинская часть</h4>
          <p>По вашим материалам медицинскую справку можно согласовать уже после прибытия, поэтому этот пункт не должен блокировать старт заявки.</p>
        </div>
      </div>
    </>
  )
}

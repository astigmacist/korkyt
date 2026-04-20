import PageHeader from '../../ui/PageHeader'
import { requiredDocuments } from '../../../content/siteContent'

export default function DocsPage() {
  return (
    <>
      <PageHeader
        kicker="Миграция и виза"
        title="Необходимые документы"
        desc="Для миграционного этапа база документов частично пересекается с admission-пакетом: университет отдельно подчёркивает важность переводов, страхования и регистрации по фактическому адресу."
      />

      <div className="info-grid">
        {requiredDocuments.map(doc => (
          <div key={doc.title} className="info-grid-card">
            <h4>{doc.title}</h4>
            <p>{doc.desc}</p>
          </div>
        ))}
        <div className="info-grid-card">
          <h4>Медицинская страховка</h4>
          <p>Университет рекомендует оформить полис, действующий на территории Казахстана, чтобы закрыть медицинские вопросы после прибытия.</p>
        </div>
        <div className="info-grid-card">
          <h4>Подтверждение адреса проживания</h4>
          <p>Если вы живёте вне кампуса, дальнейшие миграционные действия завязаны на фактический адрес проживания.</p>
        </div>
      </div>
    </>
  )
}

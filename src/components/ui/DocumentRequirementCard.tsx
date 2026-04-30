import type { ReactNode } from 'react'
import type { RequiredDocument } from '../../content/siteContent'

interface DocumentRequirementCardProps {
  doc: RequiredDocument
  icon?: ReactNode
}

export default function DocumentRequirementCard({ doc, icon }: DocumentRequirementCardProps) {
  return (
    <div className="info-grid-card document-card">
      {icon ? <div className="card-icon">{icon}</div> : null}
      <div className="document-card-heading">
        <h4>{doc.title}</h4>
        {doc.optional ? <span className="status-chip">Опционально</span> : null}
      </div>
      <p>{doc.desc}</p>

      <div className="format-badges">
        {doc.formats.map(format => (
          <span key={`${doc.title}-${format}`} className="format-badge">{format}</span>
        ))}
      </div>

      {doc.countLabel ? <div className="document-meta">{doc.countLabel}</div> : null}
      {doc.note ? <p className="document-note">{doc.note}</p> : null}
    </div>
  )
}

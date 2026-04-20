import PageHeader from '../../ui/PageHeader'
import { BookOpen } from 'lucide-react'
import { knowledgeBaseArticles } from '../../../content/siteContent'

export default function KnowledgePage() {
  return (
    <>
      <PageHeader
        kicker="Помощь и поддержка"
        title="База знаний"
        desc="Этот раздел лучше всего работает как библиотека статей по тем темам, которые повторяются в ваших документах и реально нужны иностранному абитуриенту."
      />

      <div className="steps-list">
        {knowledgeBaseArticles.map(article => (
          <div key={article.title} className="step-item">
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <BookOpen size={16} style={{ color: 'var(--accent)' }} />
            </div>
            <div className="step-item-body">
              <h4>{article.title}</h4>
              <p>{article.desc}</p>
            </div>
            <a href="#" className="btn-outline" style={{ padding: '7px 14px', fontSize: 13, flexShrink: 0, whiteSpace: 'nowrap' }}>Читать</a>
          </div>
        ))}
      </div>
    </>
  )
}

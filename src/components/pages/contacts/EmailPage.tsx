import PageHeader from '../../ui/PageHeader'
import { Mail } from 'lucide-react'

const emails = [
  ['Приёмная комиссия', 'admission@korkyt.edu.kz', 'Вопросы по заявке, документам, срокам и admission-процессу.'],
  ['Международный офис', 'international@korkyt.edu.kz', 'Вопросы по адаптации, визовому сопровождению и бытовой интеграции.'],
  ['Общие обращения', 'info@korkyt.edu.kz', 'Если вы пока не уверены, в какой отдел писать.'],
]

export default function EmailPage() {
  return (
    <>
      <PageHeader
        kicker="Контакты"
        title="Email"
        desc="Письменный контакт особенно полезен, когда нужно приложить документы, задать развернутый вопрос или получить формальный ответ."
      />

      <div className="info-grid">
        {emails.map(([title, email, desc]) => (
          <div key={title} className="info-grid-card">
            <div className="card-icon"><Mail size={18} /></div>
            <h4>{title}</h4>
            <p><a href={`mailto:${email}`} style={{ color: 'var(--accent)' }}>{email}</a></p>
            <p style={{ marginTop: 10 }}>{desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

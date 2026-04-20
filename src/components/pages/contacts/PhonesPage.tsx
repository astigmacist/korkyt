import PageHeader from '../../ui/PageHeader'
import { Phone } from 'lucide-react'

const phones = [
  ['Приёмная комиссия', '+7 (724) 226-27-34', 'Для общих вопросов по admission и срокам подачи.'],
  ['Международный отдел', '+7 (724) 226-27-35', 'Для адаптации, миграционных и организационных консультаций.'],
  ['Общежития', '+7 (724) 226-27-36', 'Для вопросов размещения и бытовой логистики по приезде.'],
  ['Бухгалтерия', '+7 (724) 226-27-37', 'Для финансовых и платёжных уточнений.'],
]

export default function PhonesPage() {
  return (
    <>
      <PageHeader
        kicker="Контакты"
        title="Телефоны"
        desc="Телефон удобен, когда вопрос нужно решить быстро: дедлайн, прибытие, проживание или уточнение по конкретному шагу."
      />

      <div className="info-grid">
        {phones.map(([title, phone, desc]) => (
          <div key={title} className="info-grid-card">
            <div className="card-icon"><Phone size={18} /></div>
            <h4>{title}</h4>
            <p><a href={`tel:${phone.replace(/\s/g, '')}`} style={{ color: 'var(--accent)' }}>{phone}</a></p>
            <p style={{ marginTop: 10 }}>{desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

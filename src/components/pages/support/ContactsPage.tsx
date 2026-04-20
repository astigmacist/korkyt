import PageHeader from '../../ui/PageHeader'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function SupportContactsPage() {
  return (
    <>
      <PageHeader
        kicker="Помощь и поддержка"
        title="Контакты приёмной комиссии"
        desc="Если вопрос связан с поступлением, документами, собеседованием или адаптацией, этот раздел подсказывает, куда именно писать и звонить."
      />

      <div className="info-grid">
        {[
          [Phone, 'Телефон', '+7 (724) 226-27-34', 'Подойдёт для оперативных вопросов по admission-процессу и общим организационным уточнениям.'],
          [Mail, 'Email', 'admission@korkyt.edu.kz', 'Удобно для пересылки документов, письменных запросов и уточнений по пакету абитуриента.'],
          [MapPin, 'Адрес', 'ул. Айтеке би, 29А, Кызылорда', 'Основной адрес университета и точка навигации для очного прибытия на кампус.'],
          [Clock, 'Время работы', 'Пн-Пт: 9:00-18:00', 'Лучше выходить на связь заранее, особенно в период активной приёмной кампании.'],
        ].map(([IconRaw, title, value, desc]) => {
          const Icon = IconRaw as typeof Phone
          return (
            <div key={title as string} className="info-grid-card">
              <div className="card-icon"><Icon size={18} /></div>
              <h4>{title as string}</h4>
              <p>{value as string}</p>
              <p style={{ marginTop: 10 }}>{desc as string}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

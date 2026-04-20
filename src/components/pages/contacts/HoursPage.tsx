import PageHeader from '../../ui/PageHeader'
import { Clock } from 'lucide-react'

const hours = [
  ['Понедельник - пятница', '09:00 - 18:00'],
  ['Суббота', '10:00 - 14:00'],
  ['Воскресенье', 'Выходной'],
  ['Период приёмной кампании', 'Лучше писать и звонить заранее, не откладывая до последних дней подачи'],
]

export default function HoursPage() {
  return (
    <>
      <PageHeader
        kicker="Контакты"
        title="Часы работы"
        desc="Для иностранного абитуриента важны не только часы приёма, но и ритм admission-кампании, в котором лучше связываться заранее."
      />

      <div className="steps-list">
        {hours.map(([day, time]) => (
          <div key={day} className="step-item">
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Clock size={16} style={{ color: 'var(--accent)' }} />
            </div>
            <div className="step-item-body">
              <h4>{day}</h4>
              <p>{time}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

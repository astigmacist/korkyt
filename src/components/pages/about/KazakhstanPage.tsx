import PageHeader from '../../ui/PageHeader'
import { MapPin, Sun, Thermometer, DollarSign, Plane } from 'lucide-react'

export default function KazakhstanPage() {
  return (
    <>
      <PageHeader
        kicker="О портале"
        title="О Казахстане и Кызылорде"
        desc="Казахстан — быстро развивающаяся страна Центральной Азии с богатой историей и современной инфраструктурой."
      />

      <div className="info-grid">
        {[
          { icon: MapPin, title: 'Кызылорда', desc: 'Город с населением 400 000 человек на юге Казахстана. Комфортный студенческий город с множеством кафе, парков и транспортной доступностью.' },
          { icon: Plane, title: 'Транспортная доступность', desc: 'Прямые рейсы из Алматы (1.5 ч) и Астаны (2 ч). Аэропорт в 15 минутах от кампуса.' },
          { icon: Sun, title: 'Климат', desc: 'Континентальный климат с тёплым летом и умеренной зимой. Около 300 солнечных дней в году.' },
          { icon: Thermometer, title: 'Стоимость жизни', desc: 'Одна из самых низких стоимостей жизни в регионе. Питание от $100/мес, транспорт от $15/мес.' },
          { icon: DollarSign, title: 'Валюта', desc: 'Казахстанский тенге (KZT). $1 ≈ 460 тенге. Банкоматы и обменники доступны по всему городу.' },
          { icon: MapPin, title: 'Достопримечательности', desc: 'Мавзолей Коркыт Ата, музей Аральского моря, современные парки и набережные.' },
        ].map(card => {
          const Icon = card.icon
          return (
            <div key={card.title} className="info-grid-card">
              <div className="card-icon"><Icon size={20} /></div>
              <h4>{card.title}</h4>
              <p>{card.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="info-card">
        <h3>🇰🇿 Казахстан в цифрах</h3>
        <p>19 млн населения · 9-я по площади страна мира · ВВП $225 млрд · Столица: Астана · Официальные языки: казахский и русский</p>
      </div>
    </>
  )
}

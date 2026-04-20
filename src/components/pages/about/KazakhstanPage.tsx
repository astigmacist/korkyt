import PageHeader from '../../ui/PageHeader'
import { MapPin, Sun, Thermometer, DollarSign, Plane } from 'lucide-react'
import { kazakhstanFacts, kyzylordaFacts } from '../../../content/siteContent'

export default function KazakhstanPage() {
  const heroCards = [
    { icon: MapPin, title: 'Казахстан в центре Евразии', desc: 'Одна из крупнейших стран мира с богатой историей, сильным образовательным сектором и международной узнаваемостью дипломов.' },
    { icon: Plane, title: 'Упрощённый въезд для многих стран', desc: 'По материалам университета, для граждан более 80 стран доступны облегчённые условия въезда или безвизовый режим.' },
    { icon: Sun, title: 'Кызылорда — город солнца', desc: 'Более 300 солнечных дней в году и тёплый климат делают адаптацию комфортной для многих студентов.' },
    { icon: Thermometer, title: 'Доступная стоимость жизни', desc: 'Кызылорда считается более доступным городом по сравнению с крупнейшими мегаполисами Казахстана.' },
    { icon: DollarSign, title: 'Комфортный студенческий бюджет', desc: 'Питание, транспорт и проживание здесь обходятся заметно дешевле, чем в более крупных городах страны.' },
    { icon: MapPin, title: 'История, космос и экология', desc: 'Регион связан с Байконуром, историей бывшей столицы и кейсом Аральского моря.' },
  ]

  return (
    <>
      <PageHeader
        kicker="О портале"
        title="О Казахстане и Кызылорде"
        desc="Казахстан и Кызылорда позиционируются университетом как безопасная, культурно насыщенная и доступная среда для международного студента."
      />

      <div className="info-grid">
        {heroCards.map(card => {
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
        <h3>Что делает Казахстан удобным для иностранного студента</h3>
        <div className="steps-list" style={{ marginTop: 18 }}>
          {kazakhstanFacts.map((item, index) => (
            <div key={item.title} className="step-item">
              <div className="step-item-num">{index + 1}</div>
              <div className="step-item-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-card">
        <h3>Почему Кызылорда выделяется отдельно</h3>
        <div className="steps-list" style={{ marginTop: 18 }}>
          {kyzylordaFacts.map((item, index) => (
            <div key={item.title} className="step-item">
              <div className="step-item-num">{index + 1}</div>
              <div className="step-item-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

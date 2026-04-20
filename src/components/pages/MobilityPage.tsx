import PageHeader from '../ui/PageHeader'
import { Globe2 } from 'lucide-react'
import { mobilityPrograms } from '../../content/siteContent'

export default function MobilityPage() {
  return (
    <>
      <PageHeader
        kicker="Мобильность"
        title="Программы мобильности"
        desc="В материалах университета академическая мобильность названа одним из сильных преимуществ: студенты участвуют в обменных программах и обучении у международных партнёров."
      />

      <div className="info-grid">
        {mobilityPrograms.map(item => (
          <div key={item.title} className="info-grid-card">
            <div className="card-icon"><Globe2 size={18} /></div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Общий масштаб международной сети</h3>
        <p>
          В описании университета также упоминается более 100 международных партнёров в Европе,
          Азии и Америке. Для абитуриента это значит, что мобильность здесь является не отдельной
          красивой опцией, а реально встроенной частью международной стратегии вуза.
        </p>
      </div>
    </>
  )
}

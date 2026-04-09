import PageHeader from '../ui/PageHeader'
import { Globe2 } from 'lucide-react'
export default function MobilityPage() {
  return (<>
    <PageHeader kicker="Мобильность" title="Программы мобильности" desc="Возможности для учёбы и стажировок за рубежом в рамках партнёрств университета." />
    <div className="info-grid">
      {[['Erasmus+','Обмен со студентами из европейских университетов-партнёров. Стипендия от ЕС.'],['DAAD','Программы академического обмена с Германией при поддержке DAAD.'],['Внутриказахстанский обмен','Семестр в другом вузе Казахстана с перезачётом кредитов.'],['Летние школы','Краткосрочные программы в летний период в университетах-партнёрах.']].map(([t,d])=>(
        <div key={t} className="info-grid-card"><div className="card-icon"><Globe2 size={18}/></div><h4>{t}</h4><p>{d}</p></div>
      ))}
    </div>
  </>)
}

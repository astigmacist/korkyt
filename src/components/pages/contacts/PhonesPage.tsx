import PageHeader from '../../ui/PageHeader'
import { Phone } from 'lucide-react'
const phones=[['Приёмная комиссия','+7 (724) 226-27-34'],['Международный отдел','+7 (724) 226-27-35'],['Общежития','+7 (724) 226-27-36'],['Бухгалтерия','+7 (724) 226-27-37']]
export default function PhonesPage() {
  return (<><PageHeader kicker="Контакты" title="Телефоны" /><div className="info-grid">{phones.map(([t,p])=>(<div key={t} className="info-grid-card"><div className="card-icon"><Phone size={18}/></div><h4>{t}</h4><p><a href={`tel:${p.replace(/\s/g,'')}`} style={{color:'var(--accent)'}}>{p}</a></p></div>))}</div></>)
}

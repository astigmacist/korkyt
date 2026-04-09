import PageHeader from '../../ui/PageHeader'
import { Clock } from 'lucide-react'
const hours=[['Понедельник – пятница','09:00 – 18:00'],['Суббота','10:00 – 14:00'],['Воскресенье','Выходной'],['Праздничные дни','По расписанию']]
export default function HoursPage() {
  return (<><PageHeader kicker="Контакты" title="Часы работы" /><div className="steps-list">{hours.map(([d,h])=>(<div key={d} className="step-item"><div style={{width:36,height:36,borderRadius:'50%',background:'var(--accent-subtle)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><Clock size={16} style={{color:'var(--accent)'}}/></div><div className="step-item-body"><h4>{d}</h4><p>{h}</p></div></div>))}</div></>)
}

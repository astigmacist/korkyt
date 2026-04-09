import PageHeader from '../../ui/PageHeader'
import { Mail } from 'lucide-react'
const emails=[['Приёмная комиссия','admission@korkyt.kz'],['Международный отдел','international@korkyt.kz'],['Общие вопросы','info@korkyt.kz']]
export default function EmailPage() {
  return (<><PageHeader kicker="Контакты" title="Email" /><div className="info-grid">{emails.map(([t,e])=>(<div key={t} className="info-grid-card"><div className="card-icon"><Mail size={18}/></div><h4>{t}</h4><p><a href={`mailto:${e}`} style={{color:'var(--accent)'}}>{e}</a></p></div>))}</div></>)
}

import PageHeader from '../../ui/PageHeader'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
export default function SupportContactsPage() {
  return (<>
    <PageHeader kicker="Помощь и поддержка" title="Контакты приёмной комиссии" desc="Свяжитесь с нами любым удобным способом." />
    <div className="info-grid">
      {[[Phone,'Телефон','+7 (724) 226-27-34'],[ Mail,'Email','admission@korkyt.kz'],[MapPin,'Адрес','ул. Айтеке би, 29А, Кызылорда'],[Clock,'Время работы','Пн-Пт: 9:00–18:00']].map(([I,t,d])=>{const Icon=I as any;return(<div key={t as string} className="info-grid-card"><div className="card-icon"><Icon size={18}/></div><h4>{t as string}</h4><p>{d as string}</p></div>)})}
    </div>
  </>)
}

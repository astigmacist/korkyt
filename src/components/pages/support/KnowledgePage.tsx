import PageHeader from '../../ui/PageHeader'
import { BookOpen } from 'lucide-react'
const articles=[['Как подать документы онлайн','Пошаговая инструкция по загрузке документов через платформу'],['Визовый процесс — полное руководство','От получения приглашения до прибытия в Казахстан'],['Регистрация по месту пребывания','Что делать в первые дни после приезда'],['Стипендии и финансовая помощь','Виды государственной поддержки для иностранных студентов'],['Академический словарь','Термины kazakhstanской системы образования']]
export default function KnowledgePage() {
  return (<>
    <PageHeader kicker="Помощь и поддержка" title="База знаний" desc="Статьи и руководства для абитуриентов и студентов." />
    <div className="steps-list">
      {articles.map(([t,d])=>(<div key={t} className="step-item"><div style={{width:36,height:36,borderRadius:'50%',background:'var(--accent-subtle)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}><BookOpen size={16} style={{color:'var(--accent)'}}/></div><div className="step-item-body"><h4>{t}</h4><p>{d}</p></div><a href="#" className="btn-outline" style={{padding:'7px 14px',fontSize:13,flexShrink:0,whiteSpace:'nowrap'}}>Читать</a></div>))}
    </div>
  </>)
}

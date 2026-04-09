import { useState } from 'react'
import PageHeader from '../../ui/PageHeader'
const faqs=[['Какие документы нужны для поступления?','Диплом с нотариальным переводом, транскрипт, паспорт, 6 фото 3×4, медсправка.'],['Сколько стоит обучение?','Бакалавриат: от 450 000 до 900 000 тг/год ($1000–$2000). Есть бюджетные места.'],['Нужно ли знать казахский или русский?','Не обязательно! Есть годовые подготовительные курсы.'],['Как получить приглашение от университета?','После одобрения заявки — автоматически. Пошлина 8 МРП ≈ $65.'],['Как оформить визу?','Обратитесь в посольство РК с приглашением. Срок — до 30 рабочих дней.'],['Где будут жить иностранные студенты?','5 общежитий на кампусе. Гарантировано иностранцам. От 8 000 тг/мес.']]
export default function FaqPage() {
  const [open,setOpen]=useState<number|null>(0)
  return (<>
    <PageHeader kicker="Помощь и поддержка" title="Часто задаваемые вопросы" desc="Ответы на самые популярные вопросы абитуриентов." />
    <div style={{display:'flex',flexDirection:'column',gap:8}}>
      {faqs.map(([q,a],i)=>(
        <div key={i} style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>
          <button onClick={()=>setOpen(open===i?null:i)} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 20px',background:'transparent',border:'none',cursor:'pointer',fontFamily:'var(--font-body)',fontSize:'0.95rem',fontWeight:600,color:'var(--text-primary)',textAlign:'left',gap:12}}>
            {q}<span style={{fontSize:18,color:'var(--accent)',flexShrink:0}}>{open===i?'−':'+'}</span>
          </button>
          {open===i && <div style={{padding:'0 20px 16px',color:'var(--text-secondary)',fontSize:'0.9rem',lineHeight:1.7}}>{a}</div>}
        </div>
      ))}
    </div>
  </>)
}

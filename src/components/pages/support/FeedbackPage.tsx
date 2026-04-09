import PageHeader from '../../ui/PageHeader'
import { Send } from 'lucide-react'
export default function FeedbackPage() {
  return (<>
    <PageHeader kicker="Помощь и поддержка" title="Форма обратной связи" desc="Оставьте вопрос или обращение — мы ответим в течение одного рабочего дня." />
    <div style={{maxWidth:560}}>
      <div className="info-card">
        {[['Ваше имя','text','Иван Петров'],['Email','email','your@email.com'],['Вопрос','text','Кратко опишите ваш вопрос']].map(([l,t,p])=>(
          <div key={l as string} style={{marginBottom:14}}>
            <label style={{display:'block',fontSize:13,fontWeight:600,marginBottom:6,color:'var(--text-primary)'}}>{l}</label>
            <input type={t as string} placeholder={p as string} style={{width:'100%',padding:'10px 14px',borderRadius:'var(--radius-sm)',border:'1px solid var(--border)',background:'var(--bg)',color:'var(--text-primary)',fontFamily:'var(--font-body)',fontSize:14,outline:'none',boxSizing:'border-box'}} />
          </div>
        ))}
        <div style={{marginBottom:14}}>
          <label style={{display:'block',fontSize:13,fontWeight:600,marginBottom:6,color:'var(--text-primary)'}}>Сообщение</label>
          <textarea placeholder="Подробно опишите ваш вопрос..." rows={4} style={{width:'100%',padding:'10px 14px',borderRadius:'var(--radius-sm)',border:'1px solid var(--border)',background:'var(--bg)',color:'var(--text-primary)',fontFamily:'var(--font-body)',fontSize:14,outline:'none',resize:'vertical',boxSizing:'border-box'}} />
        </div>
        <button className="btn-primary" style={{justifyContent:'center',width:'100%'}}><Send size={16}/> Отправить</button>
      </div>
    </div>
  </>)
}

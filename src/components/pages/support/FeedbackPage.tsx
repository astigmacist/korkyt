import PageHeader from '../../ui/PageHeader'
import { Send } from 'lucide-react'

export default function FeedbackPage() {
  return (
    <>
      <PageHeader
        kicker="Помощь и поддержка"
        title="Форма обратной связи"
        desc="Через форму обратной связи удобно задавать вопросы, которые не закрываются стандартным FAQ или требуют участия специалиста."
      />

      <div className="info-card" style={{ maxWidth: 560, marginBottom: 24 }}>
        <h3>Когда лучше писать через форму</h3>
        <p>
          Если ваш вопрос связан с переводами документов, собеседованием, языковой траекторией,
          бытовой адаптацией, визовыми шагами или личной ситуацией, которую неудобно решать через
          чат-бот, форма обратной связи — правильный канал.
        </p>
      </div>

      <div style={{ maxWidth: 560 }}>
        <div className="info-card">
          {[['Ваше имя', 'text', 'Иван Петров'], ['Email', 'email', 'your@email.com'], ['Вопрос', 'text', 'Кратко опишите ваш вопрос']].map(([label, type, placeholder]) => (
            <div key={label as string} style={{ marginBottom: 14 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>{label}</label>
              <input type={type as string} placeholder={placeholder as string} style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
            </div>
          ))}
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>Сообщение</label>
            <textarea placeholder="Подробно опишите ваш вопрос..." rows={4} style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
          </div>
          <button className="btn-primary" style={{ justifyContent: 'center', width: '100%' }}><Send size={16} /> Отправить</button>
        </div>
      </div>
    </>
  )
}

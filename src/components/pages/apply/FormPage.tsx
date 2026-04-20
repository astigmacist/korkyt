import PageHeader from '../../ui/PageHeader'
import { Send } from 'lucide-react'

const Field = ({ label, type = 'text', placeholder }: { label: string; type?: string; placeholder: string }) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '10px 14px',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border)',
        background: 'var(--bg)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        outline: 'none',
        boxSizing: 'border-box',
      }}
    />
  </div>
)

export default function FormPage() {
  return (
    <>
      <PageHeader
        kicker="Подача заявки"
        title="Форма заявки"
        desc="Заявка подаётся онлайн. После заполнения формы и загрузки полного пакета документов университет переходит к этапу собеседования."
      />

      <div className="info-card" style={{ marginBottom: 24 }}>
        <h3>Перед заполнением формы</h3>
        <p>
          Убедитесь, что вы выбрали программу, понимаете язык обучения и готовы загрузить паспорт,
          документ об образовании и сопутствующие переводы. По новым материалам основной период
          онлайн-подачи — с 15 июня по 1 августа.
        </p>
      </div>

      <div style={{ maxWidth: 640 }}>
        <div className="info-card">
          <h3 style={{ marginBottom: 20 }}>Личные данные</h3>
          <Field label="Имя" placeholder="Ваше имя" />
          <Field label="Фамилия" placeholder="Ваша фамилия" />
          <Field label="Email" type="email" placeholder="your@email.com" />
          <Field label="Телефон" type="tel" placeholder="+7 XXX XXX XX XX" />
          <Field label="Страна гражданства" placeholder="Узбекистан" />

          <h3 style={{ margin: '24px 0 20px' }}>Программа обучения</h3>

          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>
              Уровень образования
            </label>
            <select
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                outline: 'none',
                appearance: 'none',
              }}
            >
              <option>Бакалавриат</option>
              <option>Магистратура</option>
              <option>PhD-докторантура</option>
              <option>Foundation</option>
            </select>
          </div>

          <Field label="Желаемая специальность" placeholder="Информационные системы / Экономика / Математика" />

          <button className="btn-primary" style={{ justifyContent: 'center', width: '100%', marginTop: 8 }}>
            <Send size={16} /> Отправить заявку
          </button>
        </div>
      </div>
    </>
  )
}

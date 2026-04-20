import { useState } from 'react'
import PageHeader from '../../ui/PageHeader'
import { supportFaqs } from '../../../content/siteContent'

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <>
      <PageHeader
        kicker="Помощь и поддержка"
        title="Часто задаваемые вопросы"
        desc="Ответы ниже собраны на основе документов, которые вы предоставили для наполнения портала."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {supportFaqs.map((item, index) => (
          <div key={item.question} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <button
              onClick={() => setOpen(open === index ? null : index)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textAlign: 'left',
                gap: 12,
              }}
            >
              {item.question}
              <span style={{ fontSize: 18, color: 'var(--accent)', flexShrink: 0 }}>{open === index ? '−' : '+'}</span>
            </button>
            {open === index && (
              <div style={{ padding: '0 20px 16px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

import { useState, type ChangeEvent, type CSSProperties, type FormEvent } from 'react'
import PageHeader from '../../ui/PageHeader'
import { CheckCircle2, Send, Upload } from 'lucide-react'
import { admissionSubmissionChecklist, requiredDocuments, type RequiredDocument } from '../../../content/siteContent'

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 6,
  color: 'var(--text-primary)',
}

const inputStyle: CSSProperties = {
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
}

function Field({
  label,
  type = 'text',
  placeholder,
  required = true,
}: {
  label: string
  type?: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={labelStyle}>{label}</label>
      <input type={type} placeholder={placeholder} style={inputStyle} required={required} />
    </div>
  )
}

function UploadField({
  doc,
  fileNames,
  onChange,
}: {
  doc: RequiredDocument
  fileNames: string[]
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div className="upload-field">
      <div className="document-card-heading">
        <h4>{doc.title}</h4>
        {doc.optional ? <span className="status-chip">Необязательно</span> : <span className="status-chip status-chip-strong">Обязательно</span>}
      </div>
      <p className="upload-desc">{doc.desc}</p>

      <div className="format-badges">
        {doc.formats.map(format => (
          <span key={`${doc.title}-${format}`} className="format-badge">{format}</span>
        ))}
      </div>

      <label className="upload-shell">
        <span className="upload-shell-title"><Upload size={16} /> Выбрать файл{doc.multiple ? 'ы' : ''}</span>
        <span className="upload-shell-subtitle">
          {doc.countLabel ? `${doc.countLabel} • ` : ''}
          Допустимые форматы: {doc.formats.join(', ')}
        </span>
        <input type="file" accept={doc.accept} multiple={doc.multiple} onChange={onChange} required={!doc.optional} />
      </label>

      {fileNames.length > 0 ? (
        <ul className="upload-file-list">
          {fileNames.map(name => (
            <li key={`${doc.title}-${name}`}>{name}</li>
          ))}
        </ul>
      ) : (
        <div className="document-meta">Файлы пока не выбраны</div>
      )}

      {doc.note ? <p className="document-note">{doc.note}</p> : null}
    </div>
  )
}

export default function FormPage() {
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, string[]>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFileChange = (title: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const names = Array.from(event.target.files ?? []).map(file => file.name)
    setUploadedFiles(current => ({ ...current, [title]: names }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      <PageHeader
        kicker="Подача заявки"
        title="Форма заявки"
        desc="Заполните форму и загрузите документы для проверки."
      />

      <div className="info-card" style={{ marginBottom: 24 }}>
        <h3>Перед заполнением формы</h3>
        <p>
          Подготовьте паспорт или удостоверение личности, документ об образовании и фотографии 3x4.
        </p>
      </div>

      <div className="application-layout">
        <form className="info-card application-form-card" onSubmit={handleSubmit}>
          <h3 style={{ marginBottom: 20 }}>Личные данные</h3>
          <div className="application-field-grid">
            <Field label="Имя" placeholder="Ваше имя" />
            <Field label="Фамилия" placeholder="Ваша фамилия" />
            <Field label="Email" type="email" placeholder="your@email.com" />
            <Field label="Телефон" type="tel" placeholder="+7 XXX XXX XX XX" />
            <Field label="Страна гражданства" placeholder="Узбекистан" />
            <Field label="Город проживания" placeholder="Ташкент / Бишкек / Душанбе" />
          </div>

          <h3 style={{ margin: '24px 0 20px' }}>Программа обучения</h3>

          <div className="application-field-grid">
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Уровень образования</label>
              <select style={{ ...inputStyle, appearance: 'none' }}>
                <option>Бакалавриат</option>
                <option>Магистратура</option>
                <option>PhD-докторантура</option>
                <option>Foundation</option>
              </select>
            </div>

            <Field label="Желаемая специальность" placeholder="Информационные системы / Экономика / Математика" />
            <Field label="Язык обучения" placeholder="Русский / Казахский / Английский" />
            <Field label="Предыдущий уровень образования" placeholder="Школа / Колледж / Бакалавриат" />
          </div>

          <h3 style={{ margin: '24px 0 20px' }}>Загрузка документов</h3>
          <p className="section-note">
            Для документов лучше PDF. Для фото 3x4 подойдут JPG, JPEG или PNG.
          </p>

          <div className="upload-grid">
            {requiredDocuments.map(doc => (
              <UploadField
                key={doc.title}
                doc={doc}
                fileNames={uploadedFiles[doc.title] ?? []}
                onChange={handleFileChange(doc.title)}
              />
            ))}
          </div>

          <label className="consent-row">
            <input type="checkbox" required />
            <span>Подтверждаю, что загружаю корректные и читаемые документы.</span>
          </label>

          <button className="btn-primary" style={{ justifyContent: 'center', width: '100%', marginTop: 8 }} type="submit">
            <Send size={16} /> Отправить заявку
          </button>

          {isSubmitted ? (
            <div className="application-submit-note">
              <CheckCircle2 size={18} />
              <span>Форма отправлена. Дальше можно подключать сохранение файлов и статусов.</span>
            </div>
          ) : null}
        </form>

        <div className="application-aside">
          <div className="info-card application-summary">
            <h3>Что нужно подготовить</h3>
            <ul className="content-list">
              {admissionSubmissionChecklist.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-card application-summary">
            <h3>Обязательные позиции</h3>
            <div className="steps-list" style={{ marginTop: 18 }}>
              {requiredDocuments.filter(doc => !doc.optional).map((doc, index) => (
                <div key={doc.title} className="step-item" style={{ padding: 18 }}>
                  <div className="step-item-num">{index + 1}</div>
                  <div className="step-item-body">
                    <h4>{doc.title}</h4>
                    <p>{doc.countLabel ?? 'Обязательный документ'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

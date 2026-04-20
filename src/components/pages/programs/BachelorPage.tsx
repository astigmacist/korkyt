import PageHeader from '../../ui/PageHeader'
import { BookOpen } from 'lucide-react'
import { bachelorCategories, sourcedContentNote } from '../../../content/siteContent'

export default function BachelorPage() {
  return (
    <>
      <PageHeader
        kicker="Программы"
        title="Бакалавриат"
        desc="Официальный перечень 2026-2027 учебного года включает широкий набор программ для иностранных студентов — от педагогики и языков до AI, инженерии и аграрных направлений."
      />

      <div className="info-card">
        <h3>Что важно знать</h3>
        <p>
          В перечне бакалавриата есть программы на казахском и русском языках, совместные
          образовательные треки и отдельные цифровые/AI-направления. Ниже программы сгруппированы
          по крупным областям, чтобы вам было проще ориентироваться.
        </p>
      </div>

      <div className="steps-list">
        {bachelorCategories.map((category, index) => (
          <div key={category.title} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body" style={{ width: '100%' }}>
              <h4>{category.title}</h4>
              <div className="info-grid" style={{ marginTop: 14, marginBottom: 0 }}>
                {category.programs.map(program => (
                  <div key={program} className="info-grid-card">
                    <div className="card-icon"><BookOpen size={18} /></div>
                    <h4>{program}</h4>
                    <p>Программа присутствует в официальном перечне приёма на 2026-2027 учебный год.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Примечание</h3>
        <p>{sourcedContentNote}</p>
      </div>
    </>
  )
}

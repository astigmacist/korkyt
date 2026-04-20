import PageHeader from '../../ui/PageHeader'
import { GraduationCap, Users, Award, BookOpen, Building2, Globe2 } from 'lucide-react'
import { institutes, sourcedContentNote, universityAdvantages } from '../../../content/siteContent'

export default function UniversityPage() {
  return (
    <>
      <PageHeader
        kicker="О портале"
        title="Об университете"
        desc="Кызылординский университет имени Коркыт Ата позиционируется как ведущий региональный университет Казахстана с сильной международной повесткой и практичным сопровождением иностранных студентов."
      />

      <div className="info-grid">
        {[
          { icon: GraduationCap, title: 'Основан в 1937 году', desc: 'Более 85 лет развития, регионального академического влияния и расширения образовательного портфеля.' },
          { icon: Users, title: '10 000+ студентов', desc: 'На кампусе учатся студенты из Казахстана и более чем 30 стран мира.' },
          { icon: Award, title: 'QS Asia TOP-600', desc: 'В материалах университета отдельно отмечается присутствие в QS Asia University Rankings 2026.' },
          { icon: BookOpen, title: '70+ образовательных программ', desc: 'Широкий спектр бакалавриата, магистратуры и докторантуры.' },
          { icon: Building2, title: '10 учебных корпусов', desc: 'Инфраструктура включает корпуса, цифровые библиотеки, лаборатории и пространства для прикладного обучения.' },
          { icon: Globe2, title: '100+ международных партнёров', desc: 'Университет развивает академическую мобильность и совместные треки с зарубежными вузами.' },
        ].map(item => {
          const Icon = item.icon
          return (
            <div key={item.title} className="info-grid-card">
              <div className="card-icon"><Icon size={20} /></div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="info-card">
        <h3>Ключевые преимущества университета</h3>
        <div className="steps-list" style={{ marginTop: 18 }}>
          {universityAdvantages.map((item, index) => (
            <div key={item.title} className="step-item">
              <div className="step-item-num">{index + 1}</div>
              <div className="step-item-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="info-card">
        <h3>Институты и академические кластеры</h3>
        <div className="info-grid" style={{ marginTop: 18, marginBottom: 0 }}>
          {institutes.map(item => (
            <div key={item.title} className="info-grid-card">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 18, color: 'var(--text-tertiary)', fontSize: '0.88rem' }}>{sourcedContentNote}</p>
      </div>
    </>
  )
}

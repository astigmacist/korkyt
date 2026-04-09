import PageHeader from '../../ui/PageHeader'
import { GraduationCap, Users, Award, BookOpen, Building2, Globe2 } from 'lucide-react'

export default function UniversityPage() {
  return (
    <>
      <PageHeader kicker="О портале" title="Об университете" desc="Кызылординский университет имени Коркыт Ата — ведущий региональный университет Казахстана с богатой историей и современным подходом к образованию." />
      <div className="info-grid">
        {[
          { icon: GraduationCap, title: 'Основан в 1996 году', desc: 'Один из ведущих университетов южного Казахстана с 30-летней историей.' },
          { icon: Users, title: '10 000+ студентов', desc: 'Из Казахстана и более 30 стран мира. Мультикультурная среда обучения.' },
          { icon: Award, title: 'Государственная аккредитация', desc: 'Диплом признаётся в странах СНГ и за рубежом. Государственный образец.' },
          { icon: BookOpen, title: '70+ специальностей', desc: 'Широкий выбор на бакалавриате и магистратуре в разных областях знаний.' },
          { icon: Building2, title: '8 учебных корпусов', desc: 'Современная инфраструктура с лабораториями, библиотеками и спортзалами.' },
          { icon: Globe2, title: 'Международные партнёры', desc: 'Программы обмена с университетами Европы, Азии и России.' },
        ].map(c => { const I = c.icon; return (<div key={c.title} className="info-grid-card"><div className="card-icon"><I size={20}/></div><h4>{c.title}</h4><p>{c.desc}</p></div>) })}
      </div>
      <div className="info-card"><h3>Факультеты</h3><p>Инженерный · IT и цифровые технологии · Педагогический · Медицинский · Экономический · Юридический · Гуманитарный · Аграрный</p></div>
    </>
  )
}

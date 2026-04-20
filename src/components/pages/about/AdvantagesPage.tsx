import PageHeader from '../../ui/PageHeader'
import { CheckCircle } from 'lucide-react'
import { universityAdvantages } from '../../../content/siteContent'

export default function AdvantagesPage() {
  return (
    <>
      <PageHeader
        kicker="О портале"
        title="Преимущества обучения"
        desc="Почему более 30 стран мира выбирают Университет Коркыт Ата для получения высшего образования."
      />

      <div className="steps-list">
        {universityAdvantages.map(item => (
          <div key={item.title} className="step-item">
            <div className="step-item-num"><CheckCircle size={18} /></div>
            <div className="step-item-body">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

import PageHeader from '../../ui/PageHeader'
import { tuitionFacts } from '../../../content/siteContent'

export default function TuitionPage() {
  return (
    <>
      <PageHeader
        kicker="Программы"
        title="Стоимость обучения"
        desc="В ваших документах есть отдельные финансовые ориентиры, но не детальная тарифная матрица по всем программам. Поэтому ниже оставлены только подтверждённые сведения."
      />

      <div className="steps-list">
        {tuitionFacts.map((fact, index) => (
          <div key={fact} className="step-item">
            <div className="step-item-num">{index + 1}</div>
            <div className="step-item-body">
              <h4>Финансовый ориентир</h4>
              <p>{fact}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="info-card">
        <h3>Почему здесь нет вымышленных таблиц</h3>
        <p>
          Ваши новые материалы дают надёжные ориентиры по стартовой стоимости бакалавриата,
          общежитию и грантовым возможностям, но не содержат полной подтверждённой сетки цен по
          каждой магистерской и докторской программе. Поэтому страница приведена к более честному
          формату.
        </p>
      </div>
    </>
  )
}

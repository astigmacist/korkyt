import PageHeader from '../../ui/PageHeader'
import { CalendarDays, Bell, FileText } from 'lucide-react'

export default function CabinetPage() {
  return (
    <>
      <PageHeader
        kicker="Подача заявки"
        title="Личный кабинет"
        desc="Личный кабинет нужен не только для входа в систему, но и как основная точка общения между абитуриентом и университетом."
      />

      <div className="info-grid">
        <div className="info-grid-card">
          <div className="card-icon"><CalendarDays size={18} /></div>
          <h4>Контроль дедлайнов</h4>
          <p>Здесь вы отслеживаете ключевые даты: приём документов с 15 июня по 1 августа и публикацию финального решения до 25 августа.</p>
        </div>
        <div className="info-grid-card">
          <div className="card-icon"><Bell size={18} /></div>
          <h4>Уведомление о собеседовании</h4>
          <p>После полной загрузки документов приглашение на собеседование приходит в течение 3 рабочих дней.</p>
        </div>
        <div className="info-grid-card">
          <div className="card-icon"><FileText size={18} /></div>
          <h4>Результат и следующие шаги</h4>
          <p>Итог собеседования и дальнейшие организационные инструкции также приходят в личный кабинет.</p>
        </div>
      </div>

      <div className="info-card">
        <h3>Что должно быть видно в хорошем кабинете</h3>
        <p>
          Кабинет должен показывать статус документов, дату собеседования, итог рассмотрения и
          следующие действия по миграции и прибытию. В текущем прототипе эта часть ещё развивается,
          но контент и логика процесса уже приведены в порядок.
        </p>
      </div>
    </>
  )
}

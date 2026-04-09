import PageHeader from '../../ui/PageHeader'
import { CheckCircle, Clock, FileText } from 'lucide-react'
export default function CabinetPage() {
  return (<>
    <PageHeader kicker="Подача заявки" title="Личный кабинет" desc="Управляйте вашей заявкой, загружайте документы и отслеживайте статус." />
    <div className="info-grid">
      <div className="info-grid-card"><div className="card-icon"><FileText size={18}/></div><h4>Моя заявка</h4><p>Заявка #KA-2025-001 · Статус: На рассмотрении</p></div>
      <div className="info-grid-card"><div className="card-icon"><Clock size={18}/></div><h4>Последнее обновление</h4><p>08.04.2025 · Документы проверяются</p></div>
      <div className="info-grid-card"><div className="card-icon"><CheckCircle size={18}/></div><h4>Загружено документов</h4><p>4 из 6 · Осталось загрузить: медсправка, 6 фото</p></div>
    </div>
  </>)
}

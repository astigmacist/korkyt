import PageHeader from '../../ui/PageHeader'
const timeline=[{date:'05.04.2025',event:'Заявка получена',done:true},{date:'06.04.2025',event:'Проверка документов',done:true},{date:'08.04.2025',event:'Рассмотрение комиссией',done:false,active:true},{date:'—',event:'Решение по заявке',done:false},{date:'—',event:'Оформление приглашения',done:false}]
export default function StatusPage() {
  return (<>
    <PageHeader kicker="Подача заявки" title="Статус заявки" desc="Отслеживайте прогресс рассмотрения вашей заявки в реальном времени." />
    <div className="info-card" style={{marginBottom:24}}><h3>Заявка #KA-2025-001</h3><p>Программа: Бакалавриат · Специальность: Информационные технологии · Дата подачи: 05.04.2025</p></div>
    <div className="steps-list">
      {timeline.map((e,i)=>(
        <div key={i} className="step-item">
          <div className="step-item-num" style={{background:e.done?'#059669':e.active?'var(--accent)':'var(--border)',color:'#fff'}}>{i+1}</div>
          <div className="step-item-body"><h4 style={{color:e.done||e.active?'var(--text-primary)':'var(--text-tertiary)'}}>{e.event}</h4><p>{e.date}{e.active?' · В процессе..':''}</p></div>
        </div>
      ))}
    </div>
  </>)
}

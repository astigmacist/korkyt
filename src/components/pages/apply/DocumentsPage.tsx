import PageHeader from '../../ui/PageHeader'
import { Upload, CheckCircle, AlertCircle } from 'lucide-react'
const docs=[{name:'Диплом / аттестат',status:'ok'},{name:'Транскрипт',status:'ok'},{name:'Копия паспорта',status:'ok'},{name:'6 фотографий 3×4',status:'pending'},{name:'Медицинская справка',status:'pending'},{name:'Языковой сертификат',status:'optional'}]
export default function DocumentsPage() {
  return (<>
    <PageHeader kicker="Подача заявки" title="Загрузка документов" desc="Загрузите сканы всех необходимых документов в формате PDF или JPG (макс. 10 МБ каждый)." />
    <div className="steps-list">
      {docs.map(d=>(
        <div key={d.name} className="step-item" style={{alignItems:'center'}}>
          <div style={{width:36,height:36,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:d.status==='ok'?'rgba(5,150,105,0.1)':d.status==='pending'?'rgba(217,119,6,0.1)':'var(--surface)',color:d.status==='ok'?'#059669':d.status==='pending'?'#d97706':'var(--text-tertiary)',flexShrink:0}}>
            {d.status==='ok'?<CheckCircle size={18}/>:<AlertCircle size={18}/>}
          </div>
          <div className="step-item-body" style={{flex:1}}><h4>{d.name}</h4><p>{d.status==='ok'?'Загружен ✓':d.status==='pending'?'Требуется загрузить':'Необязательно'}</p></div>
          {d.status!=='ok' && <button className="btn-outline" style={{padding:'7px 16px',fontSize:13,flexShrink:0}}><Upload size={14}/> Загрузить</button>}
        </div>
      ))}
    </div>
  </>)
}

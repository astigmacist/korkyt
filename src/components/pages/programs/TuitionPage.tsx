import PageHeader from '../../ui/PageHeader'
export default function TuitionPage() {
  return (<>
    <PageHeader kicker="Программы" title="Стоимость обучения" desc="Актуальные тарифы для иностранных студентов на 2025–2026 учебный год." />
    <div style={{overflowX:'auto',marginBottom:24}}>
      <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.9rem'}}>
        <thead>
          <tr style={{background:'var(--accent-subtle)'}}>
            {['Программа','Форма','КЗТ / год','USD / год'].map(h=>(<th key={h} style={{padding:'12px 16px',textAlign:'left',fontWeight:700,color:'var(--text-primary)',borderBottom:'1px solid var(--border)'}}>{h}</th>))}
          </tr>
        </thead>
        <tbody>
          {[['Бакалавриат (техническое)','Очная','900 000','~$1 950'],['Бакалавриат (гуманитарное)','Очная','650 000','~$1 410'],['Бакалавриат (педагогика)','Очная','450 000','~$980'],['Магистратура (научная)','Очная','750 000','~$1 630'],['Магистратура (профильная)','Очная/Заочная','600 000','~$1 300'],['Языковые курсы','Очная','350 000','~$760']].map(row=>(
            <tr key={row[0]} style={{borderBottom:'1px solid var(--border)'}}>
              {row.map((cell,i)=>(<td key={i} style={{padding:'11px 16px',color:'var(--text-secondary)'}}>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="info-card"><h3>💡 Бюджетные места</h3><p>Министерство образования РК ежегодно выделяет квоты для иностранных студентов из дружественных стран. Подайте заявку как можно раньше — количество мест ограничено.</p></div>
  </>)
}

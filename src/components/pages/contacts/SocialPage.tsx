import PageHeader from '../../ui/PageHeader'
const socials=[['Instagram','@korkytata_university','https://instagram.com'],['Telegram','@korkytata_admission','https://t.me'],['Facebook','Korkyt Ata University','https://facebook.com'],['YouTube','Korkyt Ata','https://youtube.com']]
export default function SocialPage() {
  return (<><PageHeader kicker="Контакты" title="Социальные сети" /><div className="info-grid">{socials.map(([n,h,u])=>(<div key={n} className="info-grid-card"><h4>{n}</h4><p><a href={u} target="_blank" rel="noopener" style={{color:'var(--accent)'}}>{h}</a></p></div>))}</div></>)
}

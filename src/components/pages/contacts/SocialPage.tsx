import PageHeader from '../../ui/PageHeader'

const socials = [
  ['Instagram', '@korkyt_ata_university', 'https://instagram.com/korkyt_ata_university'],
  ['Telegram', '@korkytata', 'https://t.me/korkytata'],
  ['YouTube', '@korkytata', 'https://youtube.com/@korkytata'],
]

export default function SocialPage() {
  return (
    <>
      <PageHeader
        kicker="Контакты"
        title="Социальные сети"
        desc="Социальные сети удобны для быстрого знакомства с жизнью кампуса, международной повесткой и новостями университета."
      />

      <div className="info-grid">
        {socials.map(([name, handle, url]) => (
          <div key={name} className="info-grid-card">
            <h4>{name}</h4>
            <p><a href={url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>{handle}</a></p>
            <p style={{ marginTop: 10 }}>Полезно для ощущения атмосферы кампуса и понимания, как выглядит реальная студенческая жизнь.</p>
          </div>
        ))}
      </div>
    </>
  )
}

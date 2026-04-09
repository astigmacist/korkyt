interface PageHeaderProps {
  kicker?: string
  title: string
  desc?: string
}

export default function PageHeader({ kicker, title, desc }: PageHeaderProps) {
  return (
    <div className="page-header">
      {kicker && <div className="page-kicker">● {kicker}</div>}
      <h1 className="page-title">{title}</h1>
      {desc && <p className="page-desc">{desc}</p>}
    </div>
  )
}

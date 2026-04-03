import { useLang } from '../context/LangContext'
import { useIntersection } from '../hooks/useIntersection'
import { useCountUp } from '../hooks/useCountUp'
import './Stats.css'

const statsData = [
  { value: 1937, key: 'stats.founded', icon: '🏛' },
  { value: 10273, key: 'stats.students', icon: '👥' },
  { value: 477, key: 'stats.faculty', icon: '👨‍🏫' },
  { value: 9, key: 'stats.buildings', icon: '🏗' },
  { value: 5, key: 'stats.dormitories', icon: '🏠' },
]

function StatCard({ value, label, icon, visible }: { value: number; label: string; icon: string; visible: boolean }) {
  const count = useCountUp(value, visible)
  const formatted = value >= 10000 
    ? count.toLocaleString('ru-RU')
    : count.toString()

  return (
    <div className="stat-card">
      <span className="stat-icon">{icon}</span>
      <span className="stat-value">{formatted}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Stats() {
  const { t } = useLang()
  const { ref, isVisible } = useIntersection(0.2)

  return (
    <section className={`stats-section${isVisible ? ' visible' : ''}`} ref={ref}>
      <div className="stats-container">
        {statsData.map((stat) => (
          <StatCard
            key={stat.key}
            value={stat.value}
            label={t(stat.key)}
            icon={stat.icon}
            visible={isVisible}
          />
        ))}
      </div>
    </section>
  )
}

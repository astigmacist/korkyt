import PageHeader from '../../ui/PageHeader'
import { LogIn } from 'lucide-react'

export default function LoginPage() {
  const save = () => {
    localStorage.setItem('korkyt-auth-token', 'demo-token')
    window.location.href = '/apply/cabinet'
  }

  return (
    <>
      <PageHeader
        kicker="Личный кабинет"
        title="Войти в систему"
        desc="Личный кабинет нужен для статуса документов, приглашения на собеседование и получения результата приёмной комиссии."
      />

      <div className="info-card" style={{ maxWidth: 620, margin: '0 auto 24px' }}>
        <h3>Что вы увидите после входа</h3>
        <p>
          В нормальной admission-логике именно через кабинет абитуриент получает уведомления о
          собеседовании, результатах рассмотрения и дальнейших шагах. В текущем прототипе вход
          открывает демонстрационную версию этой части портала.
        </p>
      </div>

      <div style={{ maxWidth: 420, margin: '0 auto' }}>
        <div className="info-card">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>Email</label>
              <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, marginBottom: 6, color: 'var(--text-primary)' }}>Пароль</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', background: 'var(--bg)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 14, outline: 'none', boxSizing: 'border-box' }} />
            </div>
            <button className="btn-primary" onClick={save} style={{ justifyContent: 'center', marginTop: 4 }}>
              <LogIn size={16} /> Войти
            </button>
            <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--text-tertiary)', margin: 0 }}>
              Ещё нет аккаунта? <a href="/apply/form" style={{ color: 'var(--accent)' }}>Подать заявку</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

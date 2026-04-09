import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function AppLayout() {
  const [collapsed, setCollapsed] = useState(() => {
    return localStorage.getItem('sidebar-collapsed') === 'true'
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', String(collapsed))
  }, [collapsed])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [])

  const mainClasses = [
    'portal-main',
    collapsed ? 'sidebar-collapsed' : '',
  ].filter(Boolean).join(' ')

  return (
    <div className="portal-layout">
      <Sidebar
        collapsed={collapsed}
        onCollapse={setCollapsed}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <div className={mainClasses}>
        <TopBar onMenuToggle={() => setMobileOpen(v => !v)} />
        <div className="portal-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

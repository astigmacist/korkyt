import { Navigate } from 'react-router-dom'

// Stub auth check – replace with real context/token check later
const isAuthenticated = () => {
  return !!localStorage.getItem('korkyt-auth-token')
}

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    return <Navigate to="/apply/login" replace />
  }
  return <>{children}</>
}

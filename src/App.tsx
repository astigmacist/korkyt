import { RouterProvider } from 'react-router-dom'
import router from './router'
import ChatBot from './components/ChatBot'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ChatBot />
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Toaster } from 'react-hot-toast'
import Chat from './components/Chat.jsx'


let router = createBrowserRouter([
  { 
    path : "/",
    element : <App/>
  },
  {
    path : "/chat",
    element : <Chat/>
  },
  {
    path : "*",
    element : <h1>404 Not Found</h1>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* to show notifications */}
    <Toaster position="top-right" reverseOrder={false} /> 
  </StrictMode>,
)

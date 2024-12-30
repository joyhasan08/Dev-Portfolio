import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import Roots from './Router/Roots.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Roots} />
  </StrictMode>,
)

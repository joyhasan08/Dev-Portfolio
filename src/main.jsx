import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Roots from './Router/Roots.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Roots} />
  </StrictMode>,
)


// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import './index.css'
// import router from './Router/Rourter.jsx'
// import { RouterProvider } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
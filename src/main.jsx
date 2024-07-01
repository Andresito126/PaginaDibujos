import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import InfoDraw from './Components/Pages/InfoDraw.jsx'
import './index.css'

const router = createBrowserRouter([
  {//APP
    path: "/",
    element: <App />,
  },
  {//HOME
    path: "/draw",
    element: <InfoDraw />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

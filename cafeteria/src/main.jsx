import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './Home.jsx'
import DesarrolladorPage from './DesarrolladorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
  },
  {
    path : "/Desarrollador",
    element: <DesarrolladorPage />
  },
]);

function App(){
  return <RouterProvider router={router}/>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
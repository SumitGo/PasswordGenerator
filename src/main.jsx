import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:"Home",
//     children:{
//       path:'/about',
//       element:'About'
//     }
//   }
// ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card />
    <Card name="Suvam Naskar" about="CS Student at Ramakrishna Mission Vivekananda Centenary College, Rahara" username="suvamnaskar" />
    <Card name="Aditya Roy" about="Network Expert" username="aditya-roy-2499" />
  </StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import FooterPage from './components/FooterPage'
import NavbarPage from './components/NavbarPage'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarPage />
      <App />
      <FooterPage />
    </BrowserRouter>
  </React.StrictMode>
)

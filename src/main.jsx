import React from 'react'
import ReactDOM from 'react-dom/client'
import Profile from './components/Profile'
import Links from './components/Links'
import Footer from './components/Footer'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Links />
    <Footer />
  </React.StrictMode>
)

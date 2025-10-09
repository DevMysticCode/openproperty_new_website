import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import AboutUs from './components/AboutUs'
import ProductPage from './components/ProductPage'
import ContactPage from './components/ContactPage'
import ScrollToTop from './components/ScrollToTop'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

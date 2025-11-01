import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Dashboard from './pages/Dashboard'
import AffiliateAPI from './pages/AffiliateAPI'
import DigitalMarketing from './pages/DigitalMarketing'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white">
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/affiliate-api" element={<AffiliateAPI />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
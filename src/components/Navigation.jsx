import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation() {
  const location = useLocation()
  const isActive = path => location.pathname === path

  return (
    <nav className="bg-black/20 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* left: logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-extrabold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">rideXads</span>
            </Link>
          </div>

          {/* center: nav links (centered) */}
          <div className="flex justify-center relative z-50">
            <div className="hidden sm:flex items-center space-x-4">
              <Link to="/" className={`${isActive('/') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-150 inline-flex items-center px-3 py-1 rounded-md hover:bg-white/5`}>Home</Link>
              <Link to="/products" className={`${isActive('/products') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-150 inline-flex items-center px-3 py-1 rounded-md hover:bg-white/5`}>Products</Link>
              <Link to="/services" className={`${isActive('/services') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-150 inline-flex items-center px-3 py-1 rounded-md hover:bg-white/5`}>Services</Link>
              <Link to="/digital-marketing" className={`${isActive('/digital-marketing') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-150 inline-flex items-center px-3 py-1 rounded-md hover:bg-white/5`}>Digital Marketing</Link>
              <Link to="/affiliate-api" className={`${isActive('/affiliate-api') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-150 inline-flex items-center px-3 py-1 rounded-md hover:bg-white/5`}>Affiliate API</Link>
              <Link to="/dashboard" className={`${isActive('/dashboard') ? 'text-white' : 'text-gray-400'} hover:text-white transition-colors duration-150 inline-flex items-center px-3 py-1 rounded-md hover:bg-white/5`}>Demo Dashboard</Link>
            </div>
            {/* small-screen dropdown fallback */}
            <div className="sm:hidden">
              <details className="text-sm">
                <summary className="cursor-pointer text-gray-300">Menu</summary>
                <div className="mt-2 space-y-2">
                  <Link to="/" className="block px-2 py-1">Home</Link>
                  <Link to="/products" className="block px-2 py-1">Products</Link>
                  <Link to="/services" className="block px-2 py-1">Services</Link>
                  <Link to="/digital-marketing" className="block px-2 py-1">Digital Marketing</Link>
                  <Link to="/affiliate-api" className="block px-2 py-1">Affiliate API</Link>
                  <Link to="/dashboard" className="block px-2 py-1">Demo Dashboard</Link>
                </div>
              </details>
            </div>
          </div>

          {/* right: CTA */}
          <div className="flex justify-end relative z-40">
            <Link to="/services" className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

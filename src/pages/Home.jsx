import React from 'react'
import { Link } from 'react-router-dom'
import ContactFormCompact from '../components/ContactFormCompact'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-73px)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your All-in-One Affiliate Marketing & Web Development Hub
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Maximize your earnings with our curated product selection from Amazon and Flipkart, 
              plus professional web development services to boost your online presence.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/products" 
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold"
              >
                Browse Products
              </Link>
              <Link 
                to="/services" 
                className="px-6 py-3 rounded-lg bg-white/8 glass border border-white/6"
              >
                Our Services
              </Link>
            </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="services" className="w-full h-56 object-cover rounded-xl"/>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="dev" className="w-full h-36 object-cover rounded-xl"/>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="analytics" className="w-full h-36 object-cover rounded-xl"/>
              </div>
            </div>
            <div className="mt-8">
              <ContactFormCompact />
            </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose rideXads?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Market-Analyzed Products</h3>
              <p className="text-gray-300">
                Access our curated selection of analyzed products with proven demand and competitive pricing.
                We research market trends to help you maximize profits.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Platform Integration</h3>
              <p className="text-gray-300">
                One dashboard for Amazon, Flipkart, eBay, Zepto, and more. We help set up and manage
                your affiliate accounts across all platforms.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-indigo-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Business Support</h3>
              <p className="text-gray-300">
                Get affiliate account setup, custom API integration, web development, and ongoing
                technical support to grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

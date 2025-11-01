import React, { useState } from 'react'
import products from '../data/products'

function ProductFilter({ onFilterChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-4">
      <select onChange={e => onFilterChange('platform', e.target.value)} className="p-2 rounded bg-white/5">
        <option value="">All Platforms</option>
        <option value="amazon">Amazon</option>
        <option value="flipkart">Flipkart</option>
      </select>
      <select onChange={e => onFilterChange('category', e.target.value)} className="p-2 rounded bg-white/5">
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
      </select>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <div className="bg-white/5 rounded-2xl p-4 flex flex-col gap-3">
      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover"/>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs px-2 py-1 rounded ${
            product.platform === 'amazon' ? 'bg-orange-500/20 text-orange-300' : 'bg-blue-500/20 text-blue-300'
          }`}>
            {product.platform.toUpperCase()}
          </span>
        </div>
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-sm text-gray-300 mt-1">{product.desc}</p>
        <div className="text-xs text-gray-400 mt-2">{product.category}</div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">₹{product.price.toLocaleString()}</div>
        <a 
          href={product.affiliateUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm"
        >
          View on {product.platform === 'amazon' ? 'Amazon' : 'Flipkart'}
        </a>
      </div>
    </div>
  )
}

export default function Products() {
  const [filters, setFilters] = useState({ platform: '', category: '' })
  
  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }

  const filteredProducts = products.filter(p => {
    if (filters.platform && p.platform !== filters.platform) return false
    if (filters.category && p.category !== filters.category) return false
    return true
  })

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Affiliate Products In Best Price</h1>
        <ProductFilter onFilterChange={handleFilterChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
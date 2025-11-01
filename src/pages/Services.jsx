import React from 'react'
import { services } from '../data/products'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

function ServiceCard({ service }) {
  return (
    <div className="bg-white/5 rounded-2xl p-6 flex flex-col">
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <div className="text-3xl font-bold mb-6">
        ₹{service.price.toLocaleString()}
        <span className="text-sm text-gray-400 ml-1">one-time</span>
      </div>
      <ul className="flex-1 space-y-3 mb-6">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity">
        Get Started
      </button>
    </div>
  )
}

export default function Services() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Website Building Services</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your business with our professional website development services. 
            Choose the package that best fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Why Choose Our Services?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Expert Development</h3>
              <p className="text-gray-300">
                Our team of experienced developers ensures high-quality, 
                scalable solutions for your business.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Affiliate Integration</h3>
              <p className="text-gray-300">
                Seamlessly integrate Amazon and Flipkart affiliate products 
                into your website.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3">Ongoing Support</h3>
              <p className="text-gray-300">
                Dedicated support team to help you manage and grow your 
                online presence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-300 mb-6">
            Contact us for a personalized quote tailored to your specific requirements.
          </p>
          <button className="px-8 py-3 rounded-lg bg-white/8 glass border border-white/6">
            Get Custom Quote
          </button>
        </div>
      </div>
    </div>
  )
}
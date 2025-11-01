import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">rideXads</h4>
            <p className="text-sm text-gray-400">
              Your partner in affiliate marketing and web development success.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Amazon Affiliate</li>
              <li>Flipkart Affiliate</li>
              <li>API Access</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>E-commerce Setup</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>support@ridexads.com</li>
              <li>+91 7038662954</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} rideXads. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

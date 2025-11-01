import React from 'react'

export default function AffiliateAPI() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    const name = encodeURIComponent(f.name.value || '')
    const email = encodeURIComponent(f.email.value || '')
    const phone = encodeURIComponent(f.phone.value || '')
    const details = encodeURIComponent(f.details.value || '')
    const subject = encodeURIComponent('Affiliate API / Integration Inquiry')
    const body = `Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\nPhone: ${decodeURIComponent(phone)}\n\nDetails:\n${decodeURIComponent(details)}`
    window.location.href = `mailto:gotmare.siddhesh7038@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="py-12">

      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Affiliate API & Account Setup Services</h1>
        <p className="text-gray-300 mb-6">
          Get started with affiliate marketing through our complete setup and integration service.
          We help you create and manage affiliate accounts across major platforms, build custom APIs,
          and integrate product feeds into your business.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Affiliate Account Setup</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Complete Amazon Associates account setup and approval assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Flipkart affiliate program registration and compliance setup</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Myntra, eBay, Zepto, and other platform affiliate onboarding</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Compliance documentation and tax setup guidance</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Technical Integration</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom API development for product feeds and pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Automated link generation and tracking system</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sales analytics and commission reporting dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Multi-platform product sync and price monitoring</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-3">Why Partner With Us?</h3>
          <p className="text-gray-300">
            We handle the complete affiliate setup process, from account creation to technical integration.
            Our team has experience with all major platforms' requirements and can fast-track your
            approval process. Plus, we build the technical infrastructure you need to manage and scale
            your affiliate business.
          </p>
        </div>

        <div className="bg-white/5 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Our Technical Deliverables</h3>
          <ul className="list-disc list-inside text-gray-300">
            <li>Custom product feed API (search, categories, filters)</li>
            <li>Automated affiliate link generation and redirection</li>
            <li>Campaign and conversion tracking (UTM, click IDs)</li>
            <li>Dashboarding and reporting exporters (CSV/Excel/PDF)</li>
            <li>Scalable architecture with caching (Redis) and datastore (Postgres)</li>
          </ul>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Get a custom quote</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3">
            <input name="name" placeholder="Your name" className="p-3 rounded bg-white/5" />
            <input name="email" placeholder="Email" className="p-3 rounded bg-white/5" />
            <input name="phone" placeholder="Phone" className="p-3 rounded bg-white/5" />
            <textarea name="details" placeholder="Your requirements / expected scale" className="p-3 rounded bg-white/5" rows={5} />
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-3 rounded bg-gradient-to-r from-indigo-500 to-purple-500 text-white">Request Quote</button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-sm text-gray-400">
          <strong>Note:</strong> This page describes our affiliate API building services. When you submit the quote form,
          your email will open in your mail client prefilled to contact: gotmare.siddhesh7038@gmail.com
        </div>
      </div>
    </div>
  )
}

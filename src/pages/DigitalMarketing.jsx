import React from 'react'

export default function DigitalMarketing() {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-4">Digital Marketing Services</h1>
        <p className="text-gray-300 mb-6">
          Our digital marketing offering is designed to maximize conversion and traffic for affiliate
          websites and e-commerce stores. We combine SEO, paid ads, content strategy and analytics to
          deliver measurable growth.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Search Engine Optimization (SEO)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Keyword research tailored for affiliate intent</li>
              <li>On-page optimization and technical SEO audit</li>
              <li>Content gap analysis and content briefs</li>
              <li>Backlink outreach and domain authority growth</li>
            </ul>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Paid Advertising (PPC)</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Google Search & Shopping campaigns</li>
              <li>Meta/Instagram ad funnels for audience building</li>
              <li>Smart bidding and conversion tracking setup</li>
              <li>Landing page A/B testing for higher ROAS</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Content & Social</h3>
            <p className="text-gray-300">We build SEO-first content and social assets that attract buyers and support long-term traffic growth.</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Analytics & CRO</h3>
            <p className="text-gray-300">Setup of analytics, conversion funnels and heatmaps, plus CRO experiments to improve affiliate clicks and revenue.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-6 rounded-xl mb-8">
          <h3 className="text-xl font-semibold mb-3">How we work</h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Audit: We evaluate your current traffic, conversion and site health.</li>
            <li>Strategy: We build a 90-day growth plan focused on high-intent keywords and ad campaigns.</li>
            <li>Execute & Measure: Campaign rollout, content publishing and weekly reporting.</li>
            <li>Optimize: Continuous experiments and scaling of winning channels.</li>
          </ol>
        </div>

        <div className="text-right">
          <a href="mailto:gotmare.siddhesh7038@gmail.com" className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">Request Marketing Plan</a>
        </div>
      </div>
    </div>
  )
}

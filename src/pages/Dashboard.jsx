import React from 'react'
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Legend
} from 'recharts'

// Mock data for dashboard
const salesData = [
  { month: 'Jan', amazon: 45000, flipkart: 32000 },
  { month: 'Feb', amazon: 52000, flipkart: 38000 },
  { month: 'Mar', amazon: 49000, flipkart: 42000 },
  { month: 'Apr', amazon: 58000, flipkart: 45000 },
  { month: 'May', amazon: 63000, flipkart: 48000 },
  { month: 'Jun', amazon: 59000, flipkart: 51000 },
]

const leadsData = [
  { day: '1', leads: 12 },
  { day: '2', leads: 19 },
  { day: '3', leads: 15 },
  { day: '4', leads: 22 },
  { day: '5', leads: 18 },
  { day: '6', leads: 24 },
  { day: '7', leads: 21 },
]

function StatCard({ title, value, change }) {
  const isPositive = change >= 0
  return (
    <div className="bg-white/5 rounded-xl p-6">
      <div className="text-sm text-gray-400">{title}</div>
      <div className="text-2xl font-bold mt-2">₹{value.toLocaleString()}</div>
      <div className={`text-sm mt-2 ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
        {isPositive ? '+' : ''}{change}% from last month
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex gap-4">
            <select className="bg-white/5 rounded-lg px-4 py-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500">
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Revenue" value={248000} change={12.5} />
          <StatCard title="Amazon Sales" value={142000} change={8.2} />
          <StatCard title="Flipkart Sales" value={106000} change={15.8} />
          <StatCard title="Total Commission" value={16500} change={10.3} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sales Chart */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Platform Sales</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }}
                  />
                  <Legend />
                  <Bar dataKey="amazon" fill="#ff9900" name="Amazon" />
                  <Bar dataKey="flipkart" fill="#2874f0" name="Flipkart" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Leads Chart */}
          <div className="bg-white/5 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Daily Leads</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={leadsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="day" stroke="#999" />
                  <YAxis stroke="#999" />
                  <Tooltip 
                    contentStyle={{ background: '#1a1a1a', border: '1px solid #333' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="leads" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    dot={{ fill: '#8884d8' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white/5 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { time: '2 hours ago', event: 'New lead from contact form', type: 'lead' },
              { time: '5 hours ago', event: 'Website project proposal sent', type: 'project' },
              { time: '1 day ago', event: 'Amazon affiliate sale - Gaming Laptop Pro', type: 'sale' },
              { time: '1 day ago', event: 'Flipkart affiliate sale - Smartwatch GX', type: 'sale' },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white/3 rounded-lg">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'lead' ? 'bg-yellow-400' :
                  activity.type === 'project' ? 'bg-blue-400' :
                  'bg-green-400'
                }`} />
                <div>
                  <div className="font-medium">{activity.event}</div>
                  <div className="text-sm text-gray-400">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
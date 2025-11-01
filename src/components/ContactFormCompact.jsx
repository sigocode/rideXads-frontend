import React from 'react'

export default function ContactFormCompact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = encodeURIComponent(form.name.value || '')
    const email = encodeURIComponent(form.email.value || '')
    const phone = encodeURIComponent(form.phone.value || '')
    const message = encodeURIComponent(form.message.value || '')
    const subject = encodeURIComponent('Service inquiry from website')
    const body = `Name: ${decodeURIComponent(name)}\nEmail: ${decodeURIComponent(email)}\nPhone: ${decodeURIComponent(phone)}\n\nMessage:\n${decodeURIComponent(message)}`
    const mailto = `mailto:gotmare.siddhesh7038@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <input name="name" placeholder="Name" className="p-3 rounded-lg bg-white/5 col-span-1 sm:col-span-1" />
      <input name="email" placeholder="Email" className="p-3 rounded-lg bg-white/5 col-span-1 sm:col-span-1" />
      <input name="phone" placeholder="Phone" className="p-3 rounded-lg bg-white/5 col-span-1 sm:col-span-1" />
      <textarea name="message" placeholder="Tell us about your needs" className="p-3 rounded-lg bg-white/5 col-span-1 sm:col-span-3"></textarea>
      <button type="submit" className="px-4 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white col-span-1 sm:col-span-3">Request Service</button>
    </form>
  )
}

'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-gold-light text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="heading-3 mb-2">Thank You!</h3>
        <p className="text-body">
          We&apos;ve received your enquiry and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg border border-rose-gold-light">
      <h3 className="heading-3 mb-6">Send Us a Message</h3>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
            placeholder="+27 XX XXX XXXX"
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">
            Service Interested In
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all bg-white"
          >
            <option value="">Select a service</option>
            <option value="full-body">Full Body</option>
            <option value="face">Face & Neck</option>
            <option value="legs">Full Legs</option>
            <option value="underarms">Underarms</option>
            <option value="bikini">Bikini Area</option>
            <option value="arms">Full Arms</option>
            <option value="other">Other / Multiple Areas</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-rose-gold rounded-lg focus:outline-none focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your needs or any questions you have..."
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <Send className="h-5 w-5" />
          Send Message
        </button>
      </div>
    </form>
  )
}

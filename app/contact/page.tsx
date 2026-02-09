import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Noelle Laser in Randburg, Johannesburg. Book your appointment or ask questions about laser hair removal.',
}

export default function ContactPage() {
  const phoneNumber = '27722991188'
  const whatsappMessage = encodeURIComponent('Hi, I\'d like to enquire about laser hair removal at Noelle Laser.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="heading-1 mb-6">Contact Us</h1>
          <p className="text-body max-w-2xl mx-auto">
            Ready to start your journey to smooth, beautiful skin? 
            Please call Candice to book your appointment today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="bg-burgundy rounded-2xl p-8 text-white">
                <h3 className="font-serif text-2xl font-semibold mb-6">Quick Contact</h3>
                <p className="text-rose-gold-light mb-6">
                  Please call Candice to book your appointment today. 
                  We&apos;re happy to answer any questions.
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:0722991188" 
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-rose-gold" />
                    <div>
                      <div className="text-sm text-rose-gold-light">Call Us</div>
                      <div className="font-medium">072 299 1188</div>
                    </div>
                  </a>
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-green-600 rounded-xl p-4 hover:bg-green-700 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6" />
                    <div>
                      <div className="text-sm text-green-100">WhatsApp</div>
                      <div className="font-medium">Message Us Instantly</div>
                    </div>
                  </a>
                  <a 
                    href="mailto:hello@noellelaser.co.za"
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-rose-gold" />
                    <div>
                      <div className="text-sm text-rose-gold-light">Email</div>
                      <div className="font-medium">hello@noellelaser.co.za</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="bg-rose-gold-light/30 rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-semibold mb-6">Visit Our Clinic</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-burgundy flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-charcoal-light">
                        25 Hawken Avenue, Bromhof<br />
                        Randburg, Johannesburg<br />
                        South Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-burgundy flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <div className="text-charcoal-light space-y-1">
                        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="bg-white rounded-2xl p-6 border border-rose-gold-light text-center">
                <h4 className="font-semibold mb-2">Ready to Book?</h4>
                <p className="text-charcoal-light text-sm mb-4">
                  Please call Candice to book your appointment today.
                </p>
                <a 
                  href="tel:0722991188" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  072 299 1188
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-rose-gold-light/20">
        <div className="container-custom py-12 px-4">
          <div className="bg-rose-gold-light rounded-2xl h-80 flex items-center justify-center">
            <div className="text-center text-charcoal-light">
              <MapPin className="h-16 w-16 mx-auto mb-4 text-burgundy/50" />
              <h3 className="font-serif text-xl font-semibold mb-2">Find Us in Bromhof, Randburg</h3>
              <p className="text-sm mb-4">25 Hawken Avenue, Bromhof, Randburg</p>
              <a 
                href="https://maps.google.com/?q=25+Hawken+Avenue,+Bromhof,+Randburg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Have Questions?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Check out our frequently asked questions for quick answers about 
            laser hair removal, treatments, and what to expect.
          </p>
          <a href="/faq" className="btn-secondary">
            View FAQ
          </a>
        </div>
      </section>
    </>
  )
}

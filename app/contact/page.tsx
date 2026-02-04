import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Noelle Laser in Johannesburg. Book your free consultation, ask questions, or schedule an appointment.',
}

export default function ContactPage() {
  const phoneNumber = '27123456789'
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
            Get in touch with us today for a free consultation.
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
                  Prefer to reach us directly? Contact us via phone or WhatsApp 
                  for a quick response.
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+27123456789" 
                    className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-rose-gold" />
                    <div>
                      <div className="text-sm text-rose-gold-light">Call Us</div>
                      <div className="font-medium">+27 12 345 6789</div>
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
                        123 Wellness Street, Sandton<br />
                        Johannesburg, 2196<br />
                        South Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-burgundy flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Opening Hours</h4>
                      <div className="text-charcoal-light space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parking Info */}
              <div className="bg-white rounded-2xl p-6 border border-rose-gold-light">
                <h4 className="font-semibold mb-2">Parking Information</h4>
                <p className="text-charcoal-light text-sm">
                  Free parking available in our building&apos;s underground parking. 
                  Enter via the main gate and take a ticket. We&apos;ll validate your 
                  parking at reception.
                </p>
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
              <h3 className="font-serif text-xl font-semibold mb-2">Find Us in Sandton</h3>
              <p className="text-sm mb-4">123 Wellness Street, Sandton, Johannesburg</p>
              <a 
                href="https://maps.google.com/?q=Sandton,+Johannesburg"
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

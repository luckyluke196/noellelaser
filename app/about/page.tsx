import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Shield, Heart, Zap, MapPin, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Noelle Laser, Randburg\'s premier laser hair removal clinic. Founded by Candice Bezuidenhout, offering pain-free treatments with advanced 4-wavelength technology.',
}

const values = [
  {
    icon: Heart,
    title: 'Client-Centered Care',
    description: 'Your comfort and satisfaction are our top priorities. We tailor every treatment to your unique needs.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We use advanced technology designed for sensitive skin, safe for all skin tones.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Great results with fewer sessions thanks to our advanced 4-wavelength machine.',
  },
  {
    icon: Zap,
    title: 'Pain-Free',
    description: 'Our treatments are pain-free, leaving your skin glowing and beautifully smooth.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="heading-1 mb-6">About Noelle Laser</h1>
          <p className="text-body max-w-2xl mx-auto">
            Where advanced technology meets personalized care. 
            Your journey to smooth, confident skin starts here.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="heading-2 mb-6">Founded by Candice Bezuidenhout</h2>
              <p className="text-body mb-4">
                Noelle Laser was founded with a simple mission: to provide exceptional laser 
                hair removal results with fewer sessions and zero pain. After experiencing 
                the frustration of ineffective treatments and painful procedures, Candice 
                set out to bring truly advanced technology to Johannesburg.
              </p>
              <p className="text-body mb-4">
                At Noelle Laser, we focus on great results with fewer sessions. Our process 
                is pain-free and our 4-wavelength machine ensures results from the very start. 
                We use stronger beams with a higher pulse, delivering exceptional outcomes.
              </p>
              <p className="text-body mb-6">
                Our treatments can remove pigment and reduce scarring, leaving the area 
                glowing and beautifully smooth. The machine is designed for people with 
                sensitive skin and works well on all skin tones.
              </p>
              <div className="bg-rose-gold-light/50 rounded-xl p-6">
                <p className="text-burgundy font-semibold text-lg mb-2">
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
            <div className="order-1 lg:order-2">
              <div className="bg-gradient-to-br from-rose-gold-light to-rose-gold rounded-2xl p-8 text-center">
                <div className="bg-white rounded-full w-48 h-48 mx-auto mb-6 shadow-lg overflow-hidden relative">
                  <Image
                    src="/images/candice.jpg"
                    alt="Candice Bezuidenhout - Founder of Noelle Laser"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">
                  Candice Bezuidenhout
                </h3>
                <p className="text-burgundy font-medium">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-rose-gold-light/30 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Noelle Laser?</h2>
            <p className="text-body max-w-2xl mx-auto">
              We&apos;re committed to providing the best laser hair removal experience in Johannesburg.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md">
                <div className="bg-rose-gold-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-charcoal-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="bg-burgundy section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">Advanced 4-Wavelength Technology</h2>
              <p className="text-rose-gold-light mb-4">
                At Noelle Laser, we use a state-of-the-art 4-wavelength machine that delivers 
                results from the very first session. Our stronger beams with higher pulse ensure 
                great results with fewer sessions - typically just 4-6 sessions compared to 
                8-10 with older technology.
              </p>
              <ul className="space-y-3">
                {[
                  'Pain-free treatment process',
                  'Results visible from the first session',
                  '4-wavelength technology for all hair types',
                  'Stronger beams with higher pulse',
                  'Can remove pigment and reduce scarring',
                  'Leaves skin glowing and beautifully smooth',
                  'Designed for sensitive skin',
                  'Works effectively on all skin tones',
                  'Quick and efficient treatments',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <div className="bg-rose-gold rounded-full p-1">
                      <svg className="h-3 w-3 text-burgundy" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-semibold text-white mb-6">The Noelle Difference</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-rose-gold mb-1">4-6</div>
                  <div className="text-white">Sessions for optimal results</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-rose-gold mb-1">100%</div>
                  <div className="text-white">Pain-free experience</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold text-rose-gold mb-1">All</div>
                  <div className="text-white">Skin tones treated effectively</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Visit Our Clinic</h2>
            <p className="text-body max-w-2xl mx-auto">
              Conveniently located in Bromhof, Randburg.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-rose-gold-light/30 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-burgundy flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
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
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <p className="text-charcoal-light">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-burgundy flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:0722991188" className="text-burgundy font-medium hover:underline">
                      072 299 1188
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-rose-gold-light rounded-2xl h-64 md:h-auto flex items-center justify-center">
              <div className="text-center text-charcoal-light">
                <MapPin className="h-12 w-12 mx-auto mb-2 text-burgundy/50" />
                <p className="font-semibold">25 Hawken Avenue</p>
                <p className="text-sm">Bromhof, Randburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-gold-light to-rose-gold section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Experience the Noelle Laser Difference</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Please call Candice to book your appointment today and discover why 
            our clients love their pain-free, effective treatments.
          </p>
          <a 
            href="tel:0722991188" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Book Today - 072 299 1188
          </a>
        </div>
      </section>
    </>
  )
}

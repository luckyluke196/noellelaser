import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import { Sparkles, Shield, Clock, Heart, Zap, ChevronRight, Phone } from 'lucide-react'

const featuredServices = [
  {
    title: 'Full Body',
    description: 'Complete laser hair removal for silky smooth skin from head to toe. Pain-free with lasting results.',
    icon: Sparkles,
  },
  {
    title: 'Face & Neck',
    description: 'Precise treatment for lip, chin, brow, and sides. Leave with a flawless, glowing complexion.',
    icon: Heart,
  },
  {
    title: 'Legs',
    description: 'Say goodbye to shaving. Enjoy beautifully smooth legs all year round with just 4-6 sessions.',
    icon: Zap,
  },
  {
    title: 'Underarms',
    description: 'Quick and effective treatment. Feel confident and fresh every day with pain-free removal.',
    icon: Shield,
  },
]

const benefits = [
  {
    title: '4-Wavelength Technology',
    description: 'Our advanced machine uses stronger beams with higher pulse for results from the first session.',
    icon: Sparkles,
  },
  {
    title: 'Pain-Free Treatment',
    description: 'Unlike older technology, our treatments are completely pain-free. Designed for sensitive skin.',
    icon: Heart,
  },
  {
    title: 'Fewer Sessions',
    description: 'Just 4-6 sessions needed for optimal results. Great results with less time in the chair.',
    icon: Clock,
  },
  {
    title: 'All Skin Tones',
    description: 'Works effectively on all skin tones. Can also remove pigment and reduce scarring.',
    icon: Shield,
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'After just 4 sessions, I\'ve seen incredible results. Completely pain-free and my skin is glowing!',
    location: 'Randburg',
  },
  {
    name: 'Thandi K.',
    text: 'Best decision I\'ve ever made! No more waxing or shaving. Candice is so professional and friendly.',
    location: 'Bromhof',
  },
  {
    name: 'Michelle P.',
    text: 'I was nervous about laser but it was totally pain-free. The results speak for themselves!',
    location: 'Fourways',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light min-h-[90vh] flex items-center">
        <div className="container-custom section-padding text-center">
          <div className="inline-flex items-center gap-2 bg-burgundy/10 text-burgundy px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Pain-Free Laser Hair Removal in Randburg</span>
          </div>
          <h1 className="heading-1 mb-6 max-w-4xl mx-auto">
            Embrace Smooth, Confident Skin with{' '}
            <span className="text-burgundy">Noelle Laser</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto mb-10">
            Experience pain-free laser hair removal with results from the first session. 
            Our 4-wavelength technology delivers great results with just 4-6 sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0722991188" className="btn-primary inline-flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Book Today - 072 299 1188
            </a>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">
                Your Journey to <span className="text-burgundy">Radiant Skin</span> Starts Here
              </h2>
              <p className="text-body mb-6">
                At Noelle Laser, we focus on great results with fewer sessions. Our advanced 
                4-wavelength machine uses stronger beams with a higher pulse, ensuring results 
                from the very start. The process is completely pain-free.
              </p>
              <p className="text-body mb-8">
                We can remove pigment and reduce scarring, leaving your skin glowing and 
                beautifully smooth. Our machine is designed for people with sensitive skin 
                and works well on all skin tones.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-burgundy font-medium hover:gap-3 transition-all">
                Learn More About Us <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-rose-gold-light to-rose-gold rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">4-6</div>
                  <div className="text-charcoal-light text-sm">Sessions Needed</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">100%</div>
                  <div className="text-charcoal-light text-sm">Pain-Free</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">All</div>
                  <div className="text-charcoal-light text-sm">Skin Tones</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">4</div>
                  <div className="text-charcoal-light text-sm">Wavelengths</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-rose-gold-light/30 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Popular Treatments</h2>
            <p className="text-body max-w-2xl mx-auto">
              From targeted areas to full body treatments, we offer comprehensive 
              laser hair removal solutions. All treatments are pain-free.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Noelle Laser?</h2>
            <p className="text-body max-w-2xl mx-auto">
              We&apos;re committed to providing you with the best laser hair removal 
              experience in Johannesburg.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-rose-gold-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-charcoal-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-burgundy section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-white mb-4">What Our Clients Say</h2>
            <p className="text-rose-gold-light max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Hear from our satisfied clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="h-5 w-5 text-burgundy fill-current" />
                  ))}
                </div>
                <p className="text-charcoal-light mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-charcoal">{testimonial.name}</div>
                  <div className="text-sm text-charcoal-light">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-gold-light to-rose-gold section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Start Your Journey?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Please call Candice to book your appointment today. Experience pain-free 
            laser hair removal with results from the first session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0722991188" className="btn-primary inline-flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Book Today - 072 299 1188
            </a>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

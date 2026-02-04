import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import { Sparkles, Shield, Clock, Heart, Award, Users, ChevronRight } from 'lucide-react'

const featuredServices = [
  {
    title: 'Full Body',
    description: 'Complete laser hair removal for silky smooth skin from head to toe. Our most comprehensive treatment.',
    icon: Sparkles,
  },
  {
    title: 'Face & Neck',
    description: 'Precise treatment for upper lip, chin, sideburns, and neck. Perfect for a flawless complexion.',
    icon: Heart,
  },
  {
    title: 'Legs',
    description: 'Say goodbye to shaving. Enjoy beautifully smooth legs all year round with long-lasting results.',
    icon: Award,
  },
  {
    title: 'Underarms',
    description: 'Quick and effective treatment for underarm hair. Feel confident and fresh every day.',
    icon: Shield,
  },
]

const benefits = [
  {
    title: 'Advanced Technology',
    description: 'We use the latest diode laser technology, safe for all skin types and proven to deliver exceptional results.',
    icon: Sparkles,
  },
  {
    title: 'Experienced Team',
    description: 'Our certified specialists have years of experience and undergo continuous training in laser treatments.',
    icon: Users,
  },
  {
    title: 'Long-Lasting Results',
    description: 'Experience up to 90% permanent hair reduction after completing your treatment sessions.',
    icon: Clock,
  },
  {
    title: 'Safe & Comfortable',
    description: 'Our modern clinic provides a relaxing environment with treatments designed for your comfort.',
    icon: Shield,
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'After just 4 sessions, I\'ve seen incredible results. The team is professional and made me feel so comfortable.',
    location: 'Sandton',
  },
  {
    name: 'Thandi K.',
    text: 'Best decision I\'ve ever made! No more waxing or shaving. Noelle Laser changed my life.',
    location: 'Rosebank',
  },
  {
    name: 'Michelle P.',
    text: 'The staff are amazing and the results speak for themselves. I recommend Noelle Laser to everyone.',
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
            <span className="text-sm font-medium">Premium Laser Hair Removal in Johannesburg</span>
          </div>
          <h1 className="heading-1 mb-6 max-w-4xl mx-auto">
            Embrace Smooth, Confident Skin with{' '}
            <span className="text-burgundy">Noelle Laser</span>
          </h1>
          <p className="text-body max-w-2xl mx-auto mb-10">
            Experience the freedom of permanent hair reduction with our advanced laser technology. 
            Safe, effective, and tailored to your unique skin type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
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
                At Noelle Laser, we believe everyone deserves to feel confident in their own skin. 
                Our state-of-the-art clinic in Johannesburg combines cutting-edge laser technology 
                with personalized care to deliver results that exceed your expectations.
              </p>
              <p className="text-body mb-8">
                Whether you&apos;re tired of constant shaving, painful waxing, or dealing with 
                ingrown hairs, our expert team is here to help you achieve smooth, beautiful 
                skin that lasts.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-burgundy font-medium hover:gap-3 transition-all">
                Learn More About Us <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-rose-gold-light to-rose-gold rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">500+</div>
                  <div className="text-charcoal-light text-sm">Happy Clients</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">5+</div>
                  <div className="text-charcoal-light text-sm">Years Experience</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">98%</div>
                  <div className="text-charcoal-light text-sm">Satisfaction Rate</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                  <div className="text-4xl font-bold text-burgundy mb-2">10k+</div>
                  <div className="text-charcoal-light text-sm">Sessions Done</div>
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
              laser hair removal solutions tailored to your needs.
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
            Book your free consultation today and discover how Noelle Laser can help 
            you achieve the smooth, beautiful skin you&apos;ve always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
            <Link href="/pricing" className="btn-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

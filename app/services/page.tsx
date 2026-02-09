import type { Metadata } from 'next'
import { Sparkles, Zap, Shield, Clock, Check, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive laser hair removal services in Randburg. Pain-free treatments with our advanced 4-wavelength machine. Only 4-6 sessions needed for great results.',
}

const treatmentAreas = [
  {
    id: 'face',
    name: 'Face & Neck',
    areas: ['Lip', 'Chin', 'Brow', 'Sides', 'Full Face'],
    description: 'Achieve a flawless, hair-free complexion with our precise facial treatments. Pain-free and effective.',
    sessions: '4-6 sessions',
  },
  {
    id: 'underarms',
    name: 'Underarms',
    areas: ['Underarms'],
    description: 'Quick and effective underarm treatment. Say goodbye to daily shaving and razor burn. Feel confident and fresh.',
    sessions: '4-6 sessions',
  },
  {
    id: 'bikini',
    name: 'Bikini Area',
    areas: ['Bikini Sides', 'Top of Bikini', 'Full Hollywood'],
    description: 'From bikini line touch-ups to full Hollywood treatments. Discreet, professional, and pain-free.',
    sessions: '4-6 sessions',
  },
  {
    id: 'legs',
    name: 'Legs',
    areas: ['Half Leg', 'Full Leg'],
    description: 'Silky smooth legs all year round. No more waxing appointments or razor cuts. Long-lasting results.',
    sessions: '4-6 sessions',
  },
  {
    id: 'arms',
    name: 'Arms',
    areas: ['Half Arm', 'Full Arms'],
    description: 'Smooth, hair-free arms. Perfect for those who want to feel confident in short sleeves.',
    sessions: '4-6 sessions',
  },
  {
    id: 'mens',
    name: 'Men\'s Treatments',
    areas: ['Back', 'Chest', 'Stomach', 'Beard & Neck', 'Nose Hair', 'Ear Hair'],
    description: 'Comprehensive treatments for men. Professional and comfortable experience with lasting results.',
    sessions: '4-6 sessions',
  },
  {
    id: 'full-body',
    name: 'Full Body',
    areas: ['Complete Head-to-Toe Treatment'],
    description: 'Our most comprehensive package. Full body laser hair removal for complete transformation.',
    sessions: '4-6 sessions',
  },
]

const benefits = [
  {
    icon: Zap,
    title: 'Pain-Free',
    description: 'Our advanced technology ensures a completely pain-free treatment experience.',
  },
  {
    icon: Shield,
    title: 'All Skin Types',
    description: 'Designed for sensitive skin and works effectively on all skin tones.',
  },
  {
    icon: Clock,
    title: 'Fewer Sessions',
    description: 'Just 4-6 sessions needed thanks to our powerful 4-wavelength machine.',
  },
  {
    icon: Sparkles,
    title: 'Glowing Results',
    description: 'Leaves skin glowing and beautifully smooth. Can reduce pigment and scarring.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="heading-1 mb-6">Our Services</h1>
          <p className="text-body max-w-2xl mx-auto">
            Pain-free laser hair removal with results from the first session. 
            Our 4-wavelength machine delivers great results with fewer sessions.
          </p>
        </div>
      </section>

      {/* Technology Highlight Section */}
      <section className="bg-burgundy py-8">
        <div className="container-custom text-center px-4">
          <p className="text-white text-lg">
            <Sparkles className="h-5 w-5 inline mr-2 text-rose-gold" />
            <strong>4-Wavelength Technology</strong> - Stronger beams, higher pulse, results from the start
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Our Treatments Are Different</h2>
            <p className="text-body max-w-3xl mx-auto">
              At Noelle Laser, we focus on great results with fewer sessions. Our advanced 
              4-wavelength machine uses stronger beams with a higher pulse, ensuring results 
              from the very first treatment. The process is pain-free and quick.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-rose-gold-light/30 rounded-2xl p-6 text-center">
                <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <benefit.icon className="h-7 w-7 text-burgundy" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-charcoal-light text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Areas Section */}
      <section className="bg-rose-gold-light/20 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Treatment Areas</h2>
            <p className="text-body max-w-2xl mx-auto">
              We offer treatments for all areas. 4-6 sessions recommended for optimal 
              results due to our machine&apos;s efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatmentAreas.map((treatment) => (
              <div 
                key={treatment.id} 
                id={treatment.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-gold-light"
              >
                <h3 className="heading-3 mb-4">{treatment.name}</h3>
                <p className="text-body mb-4">{treatment.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-burgundy">
                    Recommended: {treatment.sessions}
                  </span>
                </div>
                <div className="border-t border-rose-gold-light pt-4">
                  <p className="text-sm text-charcoal-light mb-2">Areas included:</p>
                  <ul className="space-y-1">
                    {treatment.areas.map((area, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-charcoal">
                        <Check className="h-4 w-4 text-burgundy" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Your Treatment Journey</h2>
            <p className="text-body max-w-2xl mx-auto">
              A quick and efficient process that leaves your skin glowing and smooth.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Call Candice', description: 'Book your appointment by phone' },
              { step: '02', title: 'Consultation', description: 'Quick assessment of your skin and treatment plan' },
              { step: '03', title: 'Treatment', description: 'Pain-free laser sessions with immediate results' },
              { step: '04', title: 'Glow', description: 'Enjoy smooth, glowing, hair-free skin' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-serif font-bold text-rose-gold mb-4">{item.step}</div>
                <h3 className="font-serif text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-charcoal-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-burgundy section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Get Started?</h2>
          <p className="text-rose-gold-light max-w-2xl mx-auto mb-8">
            Please call Candice to book your appointment today. Experience pain-free 
            laser hair removal with results from the first session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0722991188" 
              className="bg-white text-burgundy px-8 py-3 rounded-full font-medium hover:bg-rose-gold-light transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Book Today - 072 299 1188
            </a>
            <a 
              href="/pricing" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-burgundy transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

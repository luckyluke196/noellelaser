import type { Metadata } from 'next'
import Link from 'next/link'
import { Sparkles, Zap, Shield, Clock, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our comprehensive laser hair removal services. From full body to targeted areas, we offer safe and effective treatments for all skin types in Johannesburg.',
}

const treatmentAreas = [
  {
    id: 'face',
    name: 'Face & Neck',
    areas: ['Upper Lip', 'Chin', 'Sideburns', 'Full Face', 'Neck', 'Ears'],
    description: 'Achieve a flawless, hair-free complexion with our precise facial treatments. Perfect for upper lip, chin, and sideburns.',
    sessions: '6-8 sessions',
  },
  {
    id: 'underarms',
    name: 'Underarms',
    areas: ['Underarms'],
    description: 'Quick and effective underarm treatment. Say goodbye to daily shaving and razor burn. Feel confident and fresh.',
    sessions: '6-8 sessions',
  },
  {
    id: 'bikini',
    name: 'Bikini Area',
    areas: ['Bikini Line', 'Brazilian', 'Full Bikini'],
    description: 'From bikini line touch-ups to full Brazilian treatments. Discreet, professional, and comfortable experience.',
    sessions: '6-8 sessions',
  },
  {
    id: 'legs',
    name: 'Legs',
    areas: ['Lower Legs', 'Upper Legs', 'Full Legs', 'Knees'],
    description: 'Silky smooth legs all year round. No more waxing appointments or razor cuts. Long-lasting results.',
    sessions: '6-8 sessions',
  },
  {
    id: 'arms',
    name: 'Arms & Hands',
    areas: ['Full Arms', 'Lower Arms', 'Upper Arms', 'Hands', 'Fingers'],
    description: 'Smooth, hair-free arms and hands. Perfect for those who want to feel confident in short sleeves.',
    sessions: '6-8 sessions',
  },
  {
    id: 'body',
    name: 'Body',
    areas: ['Back', 'Chest', 'Stomach', 'Shoulders'],
    description: 'Comprehensive body treatments for larger areas. Ideal for both men and women seeking smooth skin.',
    sessions: '6-10 sessions',
  },
  {
    id: 'full-body',
    name: 'Full Body',
    areas: ['Complete Head-to-Toe Treatment'],
    description: 'Our most comprehensive package. Full body laser hair removal for complete transformation.',
    sessions: '6-10 sessions',
  },
]

const benefits = [
  {
    icon: Zap,
    title: 'Fast Sessions',
    description: 'Most treatments take only 15-60 minutes depending on the area.',
  },
  {
    icon: Shield,
    title: 'Safe for All Skin Types',
    description: 'Our advanced technology is suitable for all skin tones and types.',
  },
  {
    icon: Clock,
    title: 'Long-Lasting Results',
    description: 'Experience up to 90% permanent hair reduction after completing sessions.',
  },
  {
    icon: Sparkles,
    title: 'Minimal Discomfort',
    description: 'Advanced cooling technology ensures comfortable treatments.',
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
            Discover our comprehensive range of laser hair removal treatments. 
            From quick touch-ups to full body transformations, we have a solution for you.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">How Laser Hair Removal Works</h2>
            <p className="text-body max-w-3xl mx-auto">
              Our state-of-the-art diode laser technology targets hair follicles beneath the 
              skin&apos;s surface, delivering precise pulses of light energy that disable hair growth 
              without damaging surrounding tissue. The treatment is safe, effective, and provides 
              long-lasting results.
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
              Choose from our range of treatment areas. Each package includes 
              a personalized consultation to assess your needs.
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
              From consultation to your final session, we guide you every step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Free assessment of your skin type and treatment plan' },
              { step: '02', title: 'Preparation', description: 'We guide you on how to prepare for your session' },
              { step: '03', title: 'Treatment', description: 'Quick and comfortable laser sessions' },
              { step: '04', title: 'Results', description: 'Enjoy smooth, hair-free skin that lasts' },
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
            Book your free consultation today and let us create a personalized 
            treatment plan just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-burgundy px-8 py-3 rounded-full font-medium hover:bg-rose-gold-light transition-all duration-300">
              Book Free Consultation
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-burgundy transition-all duration-300">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

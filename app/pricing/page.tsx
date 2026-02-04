import type { Metadata } from 'next'
import Link from 'next/link'
import PricingCard from '@/components/PricingCard'
import { Gift, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for laser hair removal treatments at Noelle Laser in Johannesburg. View our competitive rates and package deals.',
}

const pricingData = [
  {
    area: 'Upper Lip',
    price: 'R250',
    priceNote: 'per session',
    features: ['10-15 minute session', 'Precise treatment', 'Minimal discomfort', 'Quick results'],
    popular: false,
  },
  {
    area: 'Underarms',
    price: 'R400',
    priceNote: 'per session',
    features: ['15-20 minute session', 'Both underarms', 'Long-lasting results', 'Say goodbye to shaving'],
    popular: true,
  },
  {
    area: 'Bikini Line',
    price: 'R500',
    priceNote: 'per session',
    features: ['20-30 minute session', 'Discreet treatment', 'Professional care', 'Comfortable experience'],
    popular: false,
  },
  {
    area: 'Brazilian',
    price: 'R800',
    priceNote: 'per session',
    features: ['30-45 minute session', 'Complete treatment', 'Private setting', 'Expert technicians'],
    popular: true,
  },
  {
    area: 'Full Legs',
    price: 'R1,500',
    priceNote: 'per session',
    features: ['60-90 minute session', 'Ankle to upper thigh', 'Silky smooth results', 'Most popular area'],
    popular: false,
  },
  {
    area: 'Full Arms',
    price: 'R800',
    priceNote: 'per session',
    features: ['45-60 minute session', 'Wrist to shoulder', 'Including hands', 'Even coverage'],
    popular: false,
  },
  {
    area: 'Full Face',
    price: 'R600',
    priceNote: 'per session',
    features: ['30-45 minute session', 'All facial areas', 'Precise control', 'Flawless complexion'],
    popular: false,
  },
  {
    area: 'Full Body',
    price: 'R4,500',
    priceNote: 'per session',
    features: ['3-4 hour session', 'Complete treatment', 'Best value', 'Ultimate package'],
    popular: true,
  },
]

const packages = [
  {
    name: 'Starter Package',
    description: 'Perfect for first-timers',
    areas: '3 Small Areas',
    sessions: '6 sessions each',
    price: 'R3,600',
    savings: 'Save R600',
  },
  {
    name: 'Confidence Package',
    description: 'Our most popular choice',
    areas: 'Underarms + Bikini + Lower Legs',
    sessions: '6 sessions each',
    price: 'R9,500',
    savings: 'Save R2,900',
  },
  {
    name: 'Ultimate Package',
    description: 'Complete transformation',
    areas: 'Full Body',
    sessions: '6 sessions',
    price: 'R22,500',
    savings: 'Save R4,500',
  },
]

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="heading-1 mb-6">Transparent Pricing</h1>
          <p className="text-body max-w-2xl mx-auto">
            Quality laser hair removal at competitive prices. No hidden fees, 
            no surprises - just beautiful, smooth skin.
          </p>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="bg-burgundy py-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Gift className="h-6 w-6 text-rose-gold" />
          <p className="text-white text-center">
            <strong>Free Consultation</strong> - Book your complimentary skin assessment and personalized treatment plan
          </p>
          <Link href="/contact" className="bg-white text-burgundy px-6 py-2 rounded-full text-sm font-medium hover:bg-rose-gold-light transition-all">
            Book Now
          </Link>
        </div>
      </section>

      {/* Individual Pricing Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Per Session Pricing</h2>
            <p className="text-body max-w-2xl mx-auto">
              All prices are per session. Most clients require 6-8 sessions for optimal results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingData.map((item, index) => (
              <PricingCard key={index} {...item} />
            ))}
          </div>
          <p className="text-center text-charcoal-light mt-8 text-sm">
            * Prices are in South African Rand (ZAR). Package discounts available.
          </p>
        </div>
      </section>

      {/* Package Deals Section */}
      <section className="bg-rose-gold-light/30 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Package Deals</h2>
            <p className="text-body max-w-2xl mx-auto">
              Save more with our pre-paid packages. Commit to your smooth skin journey 
              and enjoy significant savings.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-rose-gold-light hover:shadow-xl transition-all">
                <div className="bg-burgundy text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                  {pkg.savings}
                </div>
                <h3 className="heading-3 mb-2">{pkg.name}</h3>
                <p className="text-charcoal-light mb-4">{pkg.description}</p>
                <div className="border-t border-rose-gold-light pt-4 mb-4">
                  <p className="text-sm text-charcoal mb-1"><strong>Areas:</strong> {pkg.areas}</p>
                  <p className="text-sm text-charcoal"><strong>Sessions:</strong> {pkg.sessions}</p>
                </div>
                <div className="text-3xl font-bold text-burgundy mb-6">{pkg.price}</div>
                <Link href="/contact" className="btn-primary block text-center">
                  Get This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">What&apos;s Included</h2>
              <ul className="space-y-4">
                {[
                  'Free initial consultation and skin assessment',
                  'Personalized treatment plan',
                  'Pre and post-care instructions',
                  'Cooling gel for comfort during treatment',
                  'Follow-up care advice',
                  'Flexible rescheduling policy',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-burgundy rounded-full p-1 mt-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-gold-light/50 rounded-2xl p-8">
              <h3 className="heading-3 mb-4">Need a Custom Quote?</h3>
              <p className="text-body mb-6">
                Have multiple areas you&apos;d like to treat? Contact us for a personalized 
                package and pricing tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Get Custom Quote
                </Link>
                <a href="tel:+27123456789" className="btn-secondary flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Flexible Payment Options</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            We accept cash, credit/debit cards, and EFT payments. 
            Ask about our payment plans for package deals.
          </p>
          <Link href="/contact" className="bg-rose-gold text-charcoal px-8 py-3 rounded-full font-medium hover:bg-rose-gold-light transition-all duration-300">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

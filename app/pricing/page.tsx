import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for laser hair removal treatments at Noelle Laser in Randburg, Johannesburg. View our competitive rates and package deals.',
}

const womensPricing = [
  { service: 'Lip', price: 'R85' },
  { service: 'Brow', price: 'R85' },
  { service: 'Chin', price: 'R95' },
  { service: 'Top of Bikini', price: 'R100' },
  { service: 'Sides', price: 'R110' },
  { service: 'Bikini Sides', price: 'R110' },
  { service: 'Underarm', price: 'R120' },
  { service: 'Full Hollywood', price: 'R350' },
  { service: 'Full Face', price: 'R395' },
  { service: 'Half Arm', price: 'R495' },
  { service: 'Half Leg', price: 'R500' },
  { service: 'Full Leg', price: 'R700' },
]

const mensPricing = [
  { service: 'Ear Hair', price: 'R120' },
  { service: 'Nose Hair', price: 'R150' },
  { service: 'Underarms', price: 'R195 - R225' },
  { service: 'Half Leg', price: 'R400' },
  { service: 'Half Arm', price: 'R450' },
  { service: 'Stomach', price: 'R595 - R695' },
  { service: 'Back', price: 'R595 - R695' },
  { service: 'Beard and Neck', price: 'R600' },
  { service: 'Arms', price: 'R700' },
  { service: 'Legs', price: 'R800' },
]

const packages = [
  {
    name: 'Essentials Package',
    areas: 'Bikini + Underarm + Upper Lip',
    sessions: '4 sessions',
    price: 'R800',
  },
  {
    name: 'Smooth & Confident',
    areas: 'Full Leg + Full Arm + Underarm',
    sessions: '4 sessions',
    price: 'R1,400',
  },
  {
    name: 'Full Body Special',
    areas: 'Complete Full Body Treatment',
    sessions: '4 sessions',
    price: 'R2,500',
    special: true,
    endsDate: '31 March 2026',
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

      {/* Session Info Banner */}
      <section className="bg-burgundy py-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Sparkles className="h-6 w-6 text-rose-gold" />
          <p className="text-white text-center">
            <strong>4-6 sessions recommended</strong> - Our advanced 4-wavelength machine delivers great results with fewer sessions
          </p>
          <a href="tel:0722991188" className="bg-white text-burgundy px-6 py-2 rounded-full text-sm font-medium hover:bg-rose-gold-light transition-all">
            Book Today
          </a>
        </div>
      </section>

      {/* Women's Pricing Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Women&apos;s Services</h2>
            <p className="text-body max-w-2xl mx-auto">
              All prices are per session. 4-6 sessions recommended for optimal results.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-rose-gold-light/30 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 bg-burgundy text-white font-semibold">
                <div className="px-6 py-4">Service</div>
                <div className="px-6 py-4 text-right">Price</div>
              </div>
              {womensPricing.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-white' : 'bg-rose-gold-light/20'}`}
                >
                  <div className="px-6 py-4 text-charcoal">{item.service}</div>
                  <div className="px-6 py-4 text-right font-semibold text-burgundy">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Men's Pricing Section */}
      <section className="bg-rose-gold-light/20 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Men&apos;s Services</h2>
            <p className="text-body max-w-2xl mx-auto">
              All prices are per session. 4-6 sessions recommended for optimal results.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-2 bg-charcoal text-white font-semibold">
                <div className="px-6 py-4">Service</div>
                <div className="px-6 py-4 text-right">Price</div>
              </div>
              {mensPricing.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <div className="px-6 py-4 text-charcoal">{item.service}</div>
                  <div className="px-6 py-4 text-right font-semibold text-burgundy">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Packages &amp; Specials</h2>
            <p className="text-body max-w-2xl mx-auto">
              Save more with our package deals. Enquire about our packages and specials today!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 shadow-lg border-2 hover:shadow-xl transition-all relative ${
                  pkg.special 
                    ? 'bg-burgundy text-white border-burgundy' 
                    : 'bg-white border-rose-gold-light'
                }`}
              >
                {pkg.special && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose-gold text-charcoal text-xs font-bold px-4 py-1 rounded-full">
                    LIMITED TIME
                  </div>
                )}
                <h3 className={`font-serif text-xl font-semibold mb-2 ${pkg.special ? 'text-white' : 'text-charcoal'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-4 text-sm ${pkg.special ? 'text-rose-gold-light' : 'text-charcoal-light'}`}>
                  {pkg.areas}
                </p>
                <p className={`mb-4 text-sm ${pkg.special ? 'text-rose-gold-light' : 'text-charcoal-light'}`}>
                  <Clock className="h-4 w-4 inline mr-1" />
                  {pkg.sessions}
                </p>
                <div className={`text-4xl font-bold mb-2 ${pkg.special ? 'text-rose-gold' : 'text-burgundy'}`}>
                  {pkg.price}
                </div>
                {pkg.endsDate && (
                  <p className="text-rose-gold-light text-sm mb-4">
                    Special ends {pkg.endsDate}
                  </p>
                )}
                <a 
                  href="tel:0722991188" 
                  className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 mt-4 ${
                    pkg.special 
                      ? 'bg-white text-burgundy hover:bg-rose-gold-light' 
                      : 'bg-burgundy text-white hover:bg-burgundy-dark'
                  }`}
                >
                  Book Today
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Pricing Section */}
      <section className="bg-rose-gold-light/30 section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Fewer Sessions?</h2>
              <p className="text-body mb-4">
                At Noelle Laser, we focus on great results with fewer sessions. Our advanced 
                4-wavelength machine uses stronger beams with a higher pulse, ensuring results 
                from the very first treatment.
              </p>
              <ul className="space-y-3">
                {[
                  'Pain-free treatment process',
                  'Results visible from the first session',
                  'Works on all skin tones',
                  'Can remove pigment and reduce scarring',
                  'Leaves skin glowing and smooth',
                  'Designed for sensitive skin',
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
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="heading-3 mb-4">Ready to Book?</h3>
              <p className="text-body mb-6">
                Please call Candice to book your appointment today. We&apos;re happy to answer 
                any questions about pricing or treatments.
              </p>
              <a 
                href="tel:0722991188" 
                className="btn-primary flex items-center justify-center gap-2 w-full"
              >
                <Phone className="h-5 w-5" />
                072 299 1188
              </a>
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
            Enquire about our packages and specials.
          </p>
          <a 
            href="tel:0722991188" 
            className="bg-rose-gold text-charcoal px-8 py-3 rounded-full font-medium hover:bg-rose-gold-light transition-all duration-300 inline-flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Book Today
          </a>
        </div>
      </section>
    </>
  )
}

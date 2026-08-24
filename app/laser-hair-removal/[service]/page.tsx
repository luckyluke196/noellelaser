import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, Sparkles, Check } from 'lucide-react'
import { servicesData, getServiceBySlug, getRelatedServices } from '@/lib/services-data'

export function generateStaticParams() {
  return servicesData.map((service) => ({ service: service.slug }))
}

export function generateMetadata({ params }: { params: { service: string } }): Metadata {
  const service = getServiceBySlug(params.service)
  if (!service) return {}

  return {
    title: `Laser Hair Removal ${service.name} in Randburg | From ${service.priceDisplay}`,
    description: `Laser hair removal for ${service.name.toLowerCase()} at Noelle Laser in Randburg, Johannesburg. ${service.priceDisplay} per session, ${service.sessions} recommended. Pain-free treatment, results from the first session.`,
  }
}

export default function ServiceDetailPage({ params }: { params: { service: string } }) {
  const service = getServiceBySlug(params.service)
  if (!service) notFound()

  const related = getRelatedServices(service)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Laser Hair Removal - ${service.name}`,
    serviceType: 'Laser Hair Removal',
    areaServed: {
      '@type': 'City',
      name: 'Randburg, Johannesburg',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Noelle Laser',
      telephone: '+27722991188',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Randburg',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
    },
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'ZAR',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="heading-1 mb-6">
            Laser Hair Removal {service.name} in Randburg: From {service.priceDisplay}
          </h1>
          <p className="text-body max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      {/* Price + Sessions Banner */}
      <section className="bg-burgundy py-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Sparkles className="h-6 w-6 text-rose-gold" />
          <p className="text-white text-center">
            <strong>{service.priceDisplay} per session.</strong> {service.sessions} recommended with our advanced 4-wavelength machine
          </p>
          <a
            href="tel:0722991188"
            className="bg-white text-burgundy px-6 py-2 rounded-full text-sm font-medium hover:bg-rose-gold-light transition-all"
          >
            Book Today
          </a>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Choose Noelle Laser?</h2>
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
                  'Leaves skin glowing and smooth',
                  'Designed for sensitive skin',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="bg-burgundy rounded-full p-1 mt-1">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rose-gold-light/30 rounded-2xl p-8">
              <h3 className="heading-3 mb-4">Ready to Book?</h3>
              <p className="text-body mb-2">
                {service.name} laser hair removal starts at{' '}
                <span className="font-semibold text-burgundy">{service.priceDisplay}</span> per
                session.
              </p>
              <p className="text-body mb-6">
                Book <span className="font-semibold text-burgundy">4 sessions</span> and get{' '}
                <span className="font-semibold text-burgundy">2 free</span> for optimal results.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:0722991188"
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                >
                  <Phone className="h-5 w-5" />
                  072 299 1188
                </a>
                <a
                  href="https://wa.me/27722991188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2 w-full"
                >
                  WhatsApp to Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="bg-rose-gold-light/20 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Related Treatments</h2>
              <p className="text-body max-w-2xl mx-auto">
                Other popular {service.groupName.toLowerCase()} treatments.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/laser-hair-removal/${r.slug}`}
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-gold-light"
                >
                  <h3 className="heading-3 mb-2">{r.name}</h3>
                  <p className="text-burgundy font-semibold">From {r.priceDisplay}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cross-links */}
      <section className="bg-charcoal section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">See Our Full Price List</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Compare {service.name.toLowerCase()} with our other treatments and view all services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-rose-gold text-charcoal px-8 py-3 rounded-full font-medium hover:bg-rose-gold-light transition-all duration-300"
            >
              View Full Pricing
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-burgundy transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

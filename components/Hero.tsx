import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  showCTA?: boolean
  backgroundClass?: string
}

export default function Hero({ 
  title, 
  subtitle, 
  showCTA = true,
  backgroundClass = 'bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light'
}: HeroProps) {
  return (
    <section className={`${backgroundClass} min-h-[80vh] flex items-center`}>
      <div className="container-custom section-padding text-center">
        <h1 className="heading-1 mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="text-body max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book Free Consultation
            </Link>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

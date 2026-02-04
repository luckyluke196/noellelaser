import Link from 'next/link'
import { Check } from 'lucide-react'

interface PricingCardProps {
  area: string
  price: string
  priceNote?: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({ area, price, priceNote, features, popular = false }: PricingCardProps) {
  return (
    <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${popular ? 'border-burgundy' : 'border-rose-gold-light'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-burgundy text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <h3 className="heading-3 mb-2">{area}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-burgundy">{price}</span>
        {priceNote && (
          <span className="text-charcoal-light text-sm block mt-1">{priceNote}</span>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-burgundy flex-shrink-0 mt-0.5" />
            <span className="text-charcoal-light">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
        href="/contact" 
        className={`block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 ${
          popular 
            ? 'bg-burgundy text-white hover:bg-burgundy-dark' 
            : 'border-2 border-burgundy text-burgundy hover:bg-burgundy hover:text-white'
        }`}
      >
        Book Now
      </Link>
    </div>
  )
}

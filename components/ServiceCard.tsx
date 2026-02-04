import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href?: string
}

export default function ServiceCard({ title, description, icon: Icon, href = '/services' }: ServiceCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-rose-gold-light h-full">
        <div className="bg-rose-gold-light rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-burgundy transition-colors duration-300">
          <Icon className="h-8 w-8 text-burgundy group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="heading-3 mb-4 group-hover:text-burgundy transition-colors">
          {title}
        </h3>
        <p className="text-body">
          {description}
        </p>
      </div>
    </Link>
  )
}

import Link from 'next/link'
import { Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Full Body', href: '/services#full-body' },
    { name: 'Face & Neck', href: '/services#face' },
    { name: 'Legs', href: '/services#legs' },
    { name: 'Underarms', href: '/services#underarms' },
    { name: 'Bikini', href: '/services#bikini' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Sparkles className="h-8 w-8 text-rose-gold" />
              <span className="font-serif text-2xl font-semibold text-rose-gold">
                Noelle Laser
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Premium laser hair removal in Johannesburg. Experience smooth, 
              confident skin with our advanced technology and expert care.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-rose-gold">
              Services
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-rose-gold">
              Company
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-rose-gold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-rose-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Wellness Street, Sandton<br />
                  Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-rose-gold flex-shrink-0" />
                <a 
                  href="tel:+27123456789" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +27 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-rose-gold flex-shrink-0" />
                <a 
                  href="mailto:hello@noellelaser.co.za" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hello@noellelaser.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-rose-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Mon - Fri: 9:00 - 18:00<br />
                  Sat: 9:00 - 14:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Noelle Laser. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

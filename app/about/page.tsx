import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Shield, Heart, Users, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Noelle Laser, Johannesburg\'s premier laser hair removal clinic. Meet our experienced team and discover our commitment to excellence.',
}

const values = [
  {
    icon: Heart,
    title: 'Client-Centered Care',
    description: 'Your comfort and satisfaction are our top priorities. We tailor every treatment to your unique needs.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We adhere to the highest safety standards with certified technicians and FDA-approved equipment.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We continuously invest in the latest technology and training to deliver exceptional results.',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'Our treatments are designed to work effectively on all skin types and tones.',
  },
]

const team = [
  {
    name: 'Dr. Sarah Naidoo',
    role: 'Medical Director',
    description: 'With over 15 years in aesthetic medicine, Dr. Naidoo leads our clinical protocols and training.',
  },
  {
    name: 'Noelle van der Berg',
    role: 'Founder & Lead Specialist',
    description: 'Certified laser technician with a passion for helping clients achieve their skincare goals.',
  },
  {
    name: 'Thandi Molefe',
    role: 'Senior Laser Technician',
    description: 'Specializing in treatments for diverse skin types with 8 years of experience.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="heading-1 mb-6">About Noelle Laser</h1>
          <p className="text-body max-w-2xl mx-auto">
            Where advanced technology meets personalized care. 
            Your journey to smooth, confident skin starts here.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="text-body mb-4">
                Founded in 2019, Noelle Laser was born from a simple belief: everyone deserves 
                to feel confident in their own skin. What started as a small clinic in Sandton 
                has grown into one of Johannesburg&apos;s most trusted laser hair removal destinations.
              </p>
              <p className="text-body mb-4">
                Our founder, Noelle van der Berg, experienced firsthand the frustration of 
                constant shaving, painful waxing, and ineffective treatments. Determined to 
                find a better solution, she trained with leading experts and invested in 
                state-of-the-art technology to bring world-class laser treatments to South Africa.
              </p>
              <p className="text-body">
                Today, we&apos;ve helped over 500 clients achieve smooth, beautiful skin. Our 
                success is built on three pillars: advanced technology, expert care, and 
                genuine dedication to every client who walks through our doors.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rose-gold-light to-rose-gold rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-burgundy mb-1">2019</div>
                  <div className="text-charcoal">Founded in Johannesburg</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-burgundy mb-1">500+</div>
                  <div className="text-charcoal">Happy Clients</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-burgundy mb-1">10,000+</div>
                  <div className="text-charcoal">Treatments Completed</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="text-3xl font-bold text-burgundy mb-1">98%</div>
                  <div className="text-charcoal">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-rose-gold-light/30 section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Our Values</h2>
            <p className="text-body max-w-2xl mx-auto">
              These principles guide everything we do at Noelle Laser.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-md">
                <div className="bg-rose-gold-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-charcoal-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Meet Our Team</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our certified specialists are passionate about helping you achieve your skincare goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-rose-gold-light to-rose-gold w-48 h-48 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-24 w-24 text-burgundy/30" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-burgundy font-medium mb-3">{member.role}</p>
                <p className="text-charcoal-light">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="bg-burgundy section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-white mb-6">Advanced Technology</h2>
              <p className="text-rose-gold-light mb-4">
                We use the latest diode laser technology, which is considered the gold 
                standard in laser hair removal. Our equipment is FDA-approved and proven 
                to deliver safe, effective results for all skin types.
              </p>
              <ul className="space-y-3">
                {[
                  'FDA-approved diode laser systems',
                  'Advanced cooling technology for comfort',
                  'Suitable for all skin tones (Fitzpatrick I-VI)',
                  'Precise targeting of hair follicles',
                  'Minimal side effects and downtime',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <div className="bg-rose-gold rounded-full p-1">
                      <svg className="h-3 w-3 text-burgundy" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-serif text-2xl font-semibold text-white mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  'Registered with the Health Professions Council of South Africa',
                  'Certified Laser Safety Officers on staff',
                  'Regular equipment maintenance and calibration',
                  'Ongoing staff training and certification',
                ].map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-rose-gold flex-shrink-0 mt-0.5" />
                    <span className="text-white">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Visit Our Clinic</h2>
            <p className="text-body max-w-2xl mx-auto">
              Conveniently located in Sandton, Johannesburg. Easy parking available.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-rose-gold-light/30 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-burgundy flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-charcoal-light">
                      123 Wellness Street, Sandton<br />
                      Johannesburg, 2196<br />
                      South Africa
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-burgundy flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <p className="text-charcoal-light">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-rose-gold-light rounded-2xl h-64 md:h-auto flex items-center justify-center">
              <div className="text-center text-charcoal-light">
                <MapPin className="h-12 w-12 mx-auto mb-2 text-burgundy/50" />
                <p>Map placeholder</p>
                <p className="text-sm">(Google Maps integration available)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-gold-light to-rose-gold section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Experience the Noelle Laser Difference</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Book your free consultation and discover why hundreds of clients trust 
            us with their laser hair removal journey.
          </p>
          <Link href="/contact" className="btn-primary">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

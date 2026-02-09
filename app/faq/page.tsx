import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import { Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about laser hair removal at Noelle Laser in Randburg. Learn about our pain-free procedure, 4-6 session results, and more.',
}

const generalFAQs = [
  {
    question: 'What is laser hair removal?',
    answer: 'Laser hair removal is a procedure that uses concentrated light energy to target and destroy hair follicles. The laser emits light that is absorbed by the pigment (melanin) in the hair, which damages the follicle and inhibits future hair growth. At Noelle Laser, our advanced 4-wavelength machine delivers results from the very first session.',
  },
  {
    question: 'Is laser hair removal safe?',
    answer: 'Yes, our treatments are completely safe. We use advanced 4-wavelength technology that is designed for sensitive skin and works effectively on all skin tones. Our machine uses stronger beams with higher pulse while remaining gentle on the skin.',
  },
  {
    question: 'Does laser hair removal hurt?',
    answer: 'No! At Noelle Laser, our treatments are completely pain-free. Unlike older laser technology that can be uncomfortable, our advanced 4-wavelength machine ensures a comfortable experience. The area is left glowing and beautifully smooth after treatment.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'Most clients need only 4-6 sessions for optimal results. This is fewer than traditional laser treatments because our 4-wavelength machine uses stronger beams with a higher pulse, ensuring results from the very start. We focus on great results with fewer sessions.',
  },
  {
    question: 'Is laser hair removal permanent?',
    answer: 'Laser hair removal provides long-lasting hair reduction, with most clients experiencing 80-90% permanent reduction after completing their 4-6 sessions. Some clients may need occasional maintenance sessions to maintain their results.',
  },
]

const treatmentFAQs = [
  {
    question: 'What areas can be treated?',
    answer: 'We treat almost any area of the body including face (lip, chin, brow, sides), underarms, bikini area (sides, hollywood), legs, arms, and full body. For men, we also treat back, chest, stomach, beard & neck, nose hair, and ear hair. Call Candice to discuss your specific treatment needs.',
  },
  {
    question: 'What skin types can be treated?',
    answer: 'Our advanced 4-wavelength machine is designed for sensitive skin and works effectively on all skin tones. Whether you have fair or dark skin, our technology delivers safe and effective results.',
  },
  {
    question: 'How long does each session take?',
    answer: 'Treatment times vary depending on the area being treated. Small areas like the upper lip take about 10-15 minutes, while larger areas like full legs can take longer. Our process is quick and efficient.',
  },
  {
    question: 'How should I prepare for my session?',
    answer: 'Before your session, you should: 1) Shave the treatment area 24 hours before (don\'t wax or pluck), 2) Avoid sun exposure and tanning for 2 weeks before treatment, 3) Don\'t apply lotions, deodorants, or makeup to the area. Call Candice if you have any questions.',
  },
  {
    question: 'What should I expect after treatment?',
    answer: 'After treatment, the area is left glowing and beautifully smooth. You may experience very mild redness which subsides quickly. Our machine can also help remove pigment and reduce scarring. Hair will start to shed within 1-3 weeks after your session.',
  },
]

const pricingFAQs = [
  {
    question: 'How much does laser hair removal cost?',
    answer: 'Our pricing varies depending on the treatment area. We have separate pricing for women and men. We also offer package deals with significant savings - including our Full Body Special at R2,500 for 4 sessions (ends 31 March 2026). Visit our pricing page or call Candice for details.',
  },
  {
    question: 'Do you offer package deals?',
    answer: 'Yes! We offer several packages including: Bikini + Underarm + Upper Lip for R800 (4 sessions), Full Leg + Full Arm + Underarm for R1,400 (4 sessions), and our Full Body Special for R2,500 (4 sessions). The Full Body Special ends 31 March 2026.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'Please call Candice directly on 072 299 1188 to book your appointment. We\'re open Monday to Friday 8am-6pm and Saturday 8am-1pm.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand that plans change. We ask for at least 24 hours notice if you need to reschedule or cancel your appointment. Call Candice on 072 299 1188 to reschedule.',
  },
]

export default function FAQPage() {
  const phoneNumber = '27722991188'
  const whatsappMessage = encodeURIComponent('Hi, I have a question about laser hair removal at Noelle Laser.')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light py-20">
        <div className="container-custom section-padding text-center">
          <h1 className="heading-1 mb-6">Frequently Asked Questions</h1>
          <p className="text-body max-w-2xl mx-auto">
            Everything you need to know about laser hair removal at Noelle Laser. 
            Can&apos;t find your answer? Call Candice directly.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="bg-white section-padding">
        <div className="container-custom max-w-4xl">
          {/* General Questions */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8">General Questions</h2>
            <FAQAccordion items={generalFAQs} />
          </div>

          {/* Treatment Questions */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8">Treatment Questions</h2>
            <FAQAccordion items={treatmentFAQs} />
          </div>

          {/* Pricing Questions */}
          <div className="mb-16">
            <h2 className="heading-2 mb-8">Pricing & Booking</h2>
            <FAQAccordion items={pricingFAQs} />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-rose-gold-light/30 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-4">Still Have Questions?</h2>
            <p className="text-body mb-8">
              Please call Candice to book your appointment or ask any questions. 
              We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0722991188" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                072 299 1188
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
              <Link href="/contact" className="btn-secondary">
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-burgundy section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">Ready to Get Started?</h2>
          <p className="text-rose-gold-light max-w-2xl mx-auto mb-8">
            Experience pain-free laser hair removal with results from the first session. 
            Please call Candice to book your appointment today.
          </p>
          <a 
            href="tel:0722991188" 
            className="bg-white text-burgundy px-8 py-3 rounded-full font-medium hover:bg-rose-gold-light transition-all duration-300 inline-flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Book Today
          </a>
        </div>
      </section>
    </>
  )
}

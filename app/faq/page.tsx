import type { Metadata } from 'next'
import Link from 'next/link'
import FAQAccordion from '@/components/FAQAccordion'
import { Phone, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about laser hair removal at Noelle Laser. Learn about the procedure, pain levels, results, and more.',
}

const generalFAQs = [
  {
    question: 'What is laser hair removal?',
    answer: 'Laser hair removal is a medical procedure that uses concentrated light energy to target and destroy hair follicles. The laser emits light that is absorbed by the pigment (melanin) in the hair, which damages the follicle and inhibits future hair growth. This results in long-lasting hair reduction, with most clients experiencing 80-90% permanent reduction after completing their treatment sessions.',
  },
  {
    question: 'Is laser hair removal safe?',
    answer: 'Yes, when performed by trained professionals using FDA-approved equipment, laser hair removal is very safe. At Noelle Laser, all our technicians are certified and experienced. We use advanced diode laser technology with built-in cooling systems to protect your skin. Before any treatment, we conduct a thorough skin assessment to ensure the treatment is suitable for you.',
  },
  {
    question: 'Does laser hair removal hurt?',
    answer: 'Most clients describe the sensation as a mild snapping or tingling feeling, similar to a rubber band snapping against the skin. Our advanced laser systems include cooling technology that significantly reduces discomfort. Pain tolerance varies between individuals and body areas, but most clients find the treatment very manageable. We can also adjust the settings for your comfort.',
  },
  {
    question: 'How many sessions will I need?',
    answer: 'Most clients require 6-8 sessions for optimal results, spaced 4-6 weeks apart. This is because hair grows in cycles, and the laser can only effectively target hair in the active growth phase. The exact number of sessions depends on factors like hair color, thickness, the treatment area, and your individual response to treatment. We\'ll provide a personalized estimate during your consultation.',
  },
  {
    question: 'Is laser hair removal permanent?',
    answer: 'Laser hair removal provides long-lasting hair reduction, with most clients experiencing 80-90% permanent reduction. Some hair may regrow over time, but it\'s typically finer and lighter. Many clients need occasional maintenance sessions (once or twice a year) to maintain their results. Hormonal changes can also affect hair growth.',
  },
]

const treatmentFAQs = [
  {
    question: 'What areas can be treated?',
    answer: 'Almost any area of the body can be treated with laser hair removal, including the face (upper lip, chin, sideburns), underarms, bikini area, legs, arms, back, chest, stomach, and more. The only areas we don\'t treat are directly around the eyes. During your consultation, we\'ll discuss your specific goals and create a customized treatment plan.',
  },
  {
    question: 'What skin types can be treated?',
    answer: 'Our advanced diode laser technology is safe and effective for all skin types, including darker skin tones (Fitzpatrick skin types I-VI). This is one of the advantages of diode lasers over older technologies. During your consultation, we\'ll assess your skin type and adjust the treatment parameters accordingly for optimal safety and results.',
  },
  {
    question: 'How long does each session take?',
    answer: 'Treatment times vary depending on the area being treated. Small areas like the upper lip take about 10-15 minutes, while larger areas like full legs can take 60-90 minutes. During your consultation, we\'ll give you an estimate of how long your specific treatment will take.',
  },
  {
    question: 'How should I prepare for my session?',
    answer: 'Before your session, you should: 1) Shave the treatment area 24 hours before (don\'t wax or pluck), 2) Avoid sun exposure and tanning for 2 weeks before treatment, 3) Don\'t apply lotions, deodorants, or makeup to the area, 4) Avoid caffeine on the day of treatment if you\'re sensitive to discomfort. We\'ll provide detailed pre-care instructions when you book.',
  },
  {
    question: 'What should I expect after treatment?',
    answer: 'After treatment, you may experience mild redness and swelling, similar to a mild sunburn, which usually subsides within a few hours to a day. You should avoid sun exposure, hot showers, saunas, and intense exercise for 24-48 hours. We\'ll provide you with detailed aftercare instructions. Hair will start to shed within 1-3 weeks after your session.',
  },
]

const pricingFAQs = [
  {
    question: 'How much does laser hair removal cost?',
    answer: 'Our pricing varies depending on the treatment area. Single sessions range from R250 for small areas like the upper lip to R4,500 for full body treatments. We also offer package deals with significant savings when you commit to the full treatment course. Visit our pricing page for detailed information or contact us for a personalized quote.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment options for our package deals. You can pay in installments for larger treatments. We accept cash, credit/debit cards, and EFT payments. Contact us to discuss payment plan options that work for you.',
  },
  {
    question: 'Is there a consultation fee?',
    answer: 'No, your initial consultation is completely free! During this consultation, we\'ll assess your skin type, discuss your goals, create a personalized treatment plan, and provide an accurate cost estimate. There\'s no obligation to proceed.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand that plans change. We ask for at least 24 hours notice if you need to reschedule or cancel your appointment. Late cancellations or no-shows may incur a fee. If you\'ve prepaid for a package, your session can be rescheduled at no additional cost with proper notice.',
  },
]

export default function FAQPage() {
  const phoneNumber = '27123456789'
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
            Can&apos;t find your answer? Contact us directly.
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
              Our friendly team is here to help. Reach out to us via phone, 
              WhatsApp, or book a free consultation to discuss your needs in person.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+27123456789" 
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Us
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
            Book your free consultation today and take the first step towards 
            smooth, confident skin.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-burgundy px-8 py-3 rounded-full font-medium hover:bg-rose-gold-light transition-all duration-300 inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}

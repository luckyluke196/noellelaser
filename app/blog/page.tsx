import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, guides, and insights on laser hair removal from Noelle Laser in Randburg, Johannesburg. Learn about treatment, preparation, and what to expect.',
  alternates: {
    canonical: '/blog',
  },
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <Image
          src="/noelle-laser-hero-image - mobile.png"
          alt=""
          fill
          priority
          className="object-cover sm:hidden"
        />
        <Image
          src="/noelle-laser-hero-image.png"
          alt=""
          fill
          priority
          className="object-cover hidden sm:block"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="container-custom section-padding relative text-center">
          <h1 className="heading-1 mb-6 text-white">The Noelle Laser Blog</h1>
          <p className="text-body text-white/90 max-w-2xl mx-auto">
            Tips, guides, and honest answers about laser hair removal, straight from our
            clinic in Randburg, Johannesburg.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8">
          <div className="container-custom">
            <Link
              href={`/blog/${featured.slug}`}
              className="block bg-burgundy rounded-2xl p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="inline-block bg-rose-gold text-burgundy text-sm font-medium px-4 py-1 rounded-full mb-4">
                {featured.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
                {featured.title}
              </h2>
              <p className="text-rose-gold-light text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
                {featured.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm mb-6">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featured.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featured.readTime}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-rose-gold font-medium">
                Read Article <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* Post Grid */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col bg-rose-gold-light/20 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-rose-gold-light"
              >
                <span className="inline-block bg-rose-gold-light text-burgundy text-xs font-medium px-3 py-1 rounded-full mb-4 self-start">
                  {post.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-3">
                  {post.title}
                </h3>
                <p className="text-charcoal-light mb-6 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-charcoal-light/80 mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center gap-2 text-burgundy font-medium">
                  Read Article <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-gold-light to-rose-gold section-padding">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Ready to Start Your Laser Journey?</h2>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Please call Candice to book your appointment today and experience pain-free,
            effective laser hair removal.
          </p>
          <a href="tel:0722991188" className="btn-primary inline-flex items-center gap-2">
            <Phone className="h-5 w-5" />
            Book Today - 072 299 1188
          </a>
        </div>
      </section>
    </>
  )
}

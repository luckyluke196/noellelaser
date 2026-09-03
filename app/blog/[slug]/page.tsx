import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, Calendar, Clock, ArrowLeft } from 'lucide-react'
import { blogPosts, getPostBySlug, getRelatedPosts, TABLE_MARKER, type PriceTableRow } from '@/lib/blog-data'

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="text-charcoal font-semibold">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    )
  )
}

function PriceTable({ rows, caption }: { rows: PriceTableRow[]; caption: string }) {
  const columns: { key: keyof PriceTableRow; label: string }[] = [
    { key: 'clinic', label: 'Clinic' },
    { key: 'suburb', label: 'Suburb' },
    { key: 'underarms', label: 'Underarms' },
    { key: 'face', label: 'Face (half/full)' },
    { key: 'legs', label: 'Legs (half/full)' },
    { key: 'bikini', label: 'Bikini / Brazilian' },
    { key: 'notes', label: 'Notes' },
  ]

  return (
    <div>
      <div className="overflow-x-auto rounded-2xl border border-rose-gold-light">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-burgundy text-white">
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.clinic}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-rose-gold-light/20'} ${
                  row.clinic === 'Noelle Laser' ? '!bg-rose-gold-light font-medium' : ''
                }`}
              >
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 text-charcoal align-top">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-charcoal-light/80 mt-3">{caption}</p>
    </div>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-ZA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const related = getRelatedPosts(post)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Noelle Laser',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Noelle Laser',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-gold-light via-warm-white to-rose-gold-light pt-20">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-burgundy font-medium mb-6 hover:underline w-fit"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <span className="inline-block bg-burgundy text-white text-sm font-medium px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="heading-1 mb-6 max-w-3xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-charcoal-light text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="space-y-6">
            {post.content.map((block, index) => {
              if (block === TABLE_MARKER && post.table) {
                return (
                  <div key={index} className="max-w-5xl mx-auto">
                    <PriceTable rows={post.table.rows} caption={post.table.caption} />
                  </div>
                )
              }
              if (block.startsWith('## ')) {
                return (
                  <h2 key={index} className="heading-3 max-w-3xl mx-auto pt-4">
                    {block.slice(3)}
                  </h2>
                )
              }
              return (
                <p key={index} className="text-body max-w-3xl mx-auto">
                  {renderInline(block)}
                </p>
              )
            })}
          </div>

          <div className="bg-rose-gold-light/50 rounded-xl p-6 mt-12 max-w-3xl mx-auto">
            <p className="text-burgundy font-semibold text-lg mb-2">
              Please call Candice to book your appointment today.
            </p>
            <a href="tel:0722991188" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              072 299 1188
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="bg-rose-gold-light/20 section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">More From the Blog</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-gold-light"
                >
                  <span className="inline-block bg-rose-gold-light text-burgundy text-xs font-medium px-3 py-1 rounded-full mb-3">
                    {r.category}
                  </span>
                  <h3 className="heading-3 mb-2 text-xl">{r.title}</h3>
                  <p className="text-charcoal-light text-sm">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

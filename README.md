# Noelle Laser Website

A modern, elegant website for Noelle Laser, a premium laser hair removal clinic in Johannesburg, South Africa.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- Responsive design (mobile-first)
- Modern, spa-like aesthetic with rose gold and burgundy color palette
- SEO optimized with meta tags and Open Graph
- WhatsApp integration for quick contact
- Contact form ready for backend integration
- FAQ accordion component
- Service and pricing cards

## Pages

- **Home** (`/`) - Hero, services preview, benefits, testimonials, CTA
- **Services** (`/services`) - Treatment areas, process overview
- **Pricing** (`/pricing`) - Per-session pricing, package deals
- **About** (`/about`) - Clinic story, team, technology, location
- **Contact** (`/contact`) - Contact form, phone, WhatsApp, map
- **FAQ** (`/faq`) - Common questions about laser hair removal

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Contact Information

Edit the following files to update contact details:
- `components/Footer.tsx` - Address, phone, email
- `components/WhatsAppButton.tsx` - WhatsApp number
- `app/contact/page.tsx` - All contact information

### Update Pricing

Edit `app/pricing/page.tsx` to update:
- Individual treatment prices
- Package deals and savings

### Brand Colors

Colors are defined in `tailwind.config.ts`:
- `rose-gold`: #E8D5D3
- `burgundy`: #6B2D3C
- `warm-white`: #FDFBFA
- `charcoal`: #2D2D2D

## Build for Production

```bash
npm run build
npm start
```

## License

Private - All rights reserved.

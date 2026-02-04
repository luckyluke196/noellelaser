import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#E8D5D3',
        'rose-gold-light': '#F5EDEC',
        'rose-gold-dark': '#D4B8B5',
        'burgundy': '#6B2D3C',
        'burgundy-light': '#8B4D5C',
        'burgundy-dark': '#4B1D2C',
        'warm-white': '#FDFBFA',
        'charcoal': '#2D2D2D',
        'charcoal-light': '#4D4D4D',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config

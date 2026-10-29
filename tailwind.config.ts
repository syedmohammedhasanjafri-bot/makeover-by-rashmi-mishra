import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          primary: '#FDFBF7', // Mulmul Ivory
          secondary: '#FBF8F5', // Rosewater Alabaster
          tertiary: '#F5EFEB', // Warm Travertine
        },
        ink: {
          primary: '#1C1917', // Deep Charcoal Ink
          espresso: '#57534E', // Warm Espresso
          muted: '#8C827A', // Raw Umber
          subtle: '#A89F91',
        },
        hairline: {
          DEFAULT: '#EAE3DA',
          strong: '#DFD7CD',
          dark: '#1C1917',
        },
        blush: {
          soft: '#E8DDD3',
          warm: '#F4ECE6',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Space Mono', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        sm: '1px',
      },
      letterSpacing: {
        widest: '0.15em',
        ultra: '0.22em',
      },
    },
  },
  plugins: [],
};

export default config;

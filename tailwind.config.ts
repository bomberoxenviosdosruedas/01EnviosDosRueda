import type { Config } from 'tailwindcss';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': {
          50: '#E6EEFE',
          100: '#BACEFD',
          200: '#8EAFFB',
          300: '#628FF9',
          400: '#3570F8',
          500: '#0950F6',
          600: '#0742CA',
          700: '#0636A5',
          800: '#052D8C',
          900: '#04236B',
          950: '#021440',
        },
        'brand-yellow': {
          50: '#FFFDE6',
          100: '#FFFAB8',
          200: '#FFF78A',
          300: '#FFF45C',
          400: '#FFF12E',
          500: '#FFEC01',
          600: '#E6D400',
        },
        'brand-white': {
          50: '#FFFFFF',
        },
        'brand-ink': '#00277C',
        'brand-dark': '#001035',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Outfit', 'IBM Plex Sans', 'Inter', 'sans-serif'],
        display: ['var(--font-display)', 'Anton SC', 'Anton', 'sans-serif'],
        headline: ['var(--font-display)', 'Anton SC', 'Anton', 'sans-serif'],
        subheading: ['var(--font-subheading)', 'Bebas Neue', 'sans-serif'],
        mono: ['var(--font-mono)', 'Geist Mono', 'monospace'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '9xl': '9rem',
      },
      lineHeight: {
        'hero': '0.8',
        'tight': '1.25',
        'relaxed': '1.625',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        'mega': '0.2em',
      },
      spacing: {
        'section-y': '6rem',
        'section-y-tight': '3rem',
        'container-max': '80rem',
        'control-sm': '2.25rem',
        'control': '2.5rem',
        'control-lg': '2.75rem',
        'control-xl': '3.5rem',
        'control-2xl': '4rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(0, 39, 124, 0.25)',
        'glow-yellow': '0 0 25px rgba(255, 236, 1, 0.35)',
        'glow-blue-lg': '0 0 50px rgba(0, 39, 124, 0.35)',
        'glow-yellow-lg': '0 0 50px rgba(255, 236, 1, 0.5)',
        'accent-sm': '0 2px 4px rgba(255, 236, 1, 0.15)',
        'accent-md': '0 4px 8px rgba(255, 236, 1, 0.2), 0 2px 4px rgba(255, 236, 1, 0.1)',
        'accent-lg': '0 8px 16px rgba(255, 236, 1, 0.3), 0 4px 8px rgba(255, 236, 1, 0.2)',
        'float-shadow': '0 25px 50px -12px rgba(0, 39, 124, 0.15)',
        'bezel-inner': 'inset 0 1px 0 rgba(255,255,255,0.1)',
        'elevated': '0 20px 40px -8px rgba(6,54,165,0.2), 0 8px 16px -4px rgba(6,54,165,0.12)',
        'hover-lift': '0 32px 64px -12px rgba(6,54,165,0.25)',
        'cta-glow': '0 0 40px rgba(255,236,1,0.4), 0 0 80px rgba(255,236,1,0.15)',
        'panel': '0 32px 120px -20px rgba(6,54,165,0.15)',
        'minimal': '0 4px 20px -2px rgba(6, 54, 165, 0.04), 0 2px 6px -1px rgba(6, 54, 165, 0.02)',
        'soft-elevation': '0 12px 24px -10px rgba(6, 54, 165, 0.12)',
        'antigravity-deep': '0 30px 60px -15px rgba(6, 54, 165, 0.3), 0 0 50px -10px rgba(255, 236, 1, 0.15)',
      },
      animation: {
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'counter-up': 'counter-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'logos-scroll': 'logos-scroll 30s linear infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        'border-pulse': {
          '0%, 100%': { borderColor: 'rgba(255,236,1,0.3)' },
          '50%': { borderColor: 'rgba(255,236,1,0.8)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'counter-up': {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'logos-scroll': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;

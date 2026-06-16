import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6A00',
          dim: '#CC5500',
          glow: '#FF8C00',
        },
        chrome: {
          100: '#f5f5f5',
          200: '#e0e0e0',
          400: '#9e9e9e',
          600: '#616161',
          800: '#1a1a1a',
          900: '#0d0d0d',
          950: '#080808',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      backgroundImage: {
        'chrome-texture': `
          radial-gradient(ellipse at 20% 50%, rgba(255,106,0,0.04) 0%, transparent 60%),
          radial-gradient(ellipse at 80% 20%, rgba(255,106,0,0.03) 0%, transparent 50%),
          linear-gradient(135deg, #0d0d0d 0%, #111111 50%, #0a0a0a 100%)
        `,
        'orange-glow': 'radial-gradient(ellipse at center, rgba(255,106,0,0.15) 0%, transparent 70%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

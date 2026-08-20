/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#fbf8f3',
          100: '#f5efe3',
          200: '#e9dcc4',
          300: '#d9c39e',
          400: '#c6a36f',
          500: '#b3894f',
          600: '#9a6f3f',
          700: '#7c5634',
          800: '#65462c',
          900: '#543a27',
        },
        ocean: {
          50: '#effbf9',
          100: '#d7f5f1',
          200: '#b0ebe4',
          300: '#7adbd0',
          400: '#42c2b6',
          500: '#22a89c',
          600: '#178a80',
          700: '#156e68',
          800: '#155855',
          900: '#154a48',
          950: '#042f2e',
        },
        ink: {
          50: '#f6f6f4',
          100: '#e7e6e1',
          200: '#cfcdc4',
          300: '#adaaa0',
          400: '#87837a',
          500: '#6c685f',
          600: '#55524b',
          700: '#45423d',
          800: '#3a3833',
          900: '#1f1d1a',
          950: '#121110',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1) translate(0,0)' },
          '100%': { transform: 'scale(1.12) translate(-2%, -1%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fade-in 1s ease forwards',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.22,1,0.36,1) forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'ken-burns': 'ken-burns 18s ease-out forwards',
        'marquee': 'marquee 38s linear infinite',
      },
    },
  },
  plugins: [],
};

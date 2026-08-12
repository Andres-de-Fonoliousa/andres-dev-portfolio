/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A2540',
        ink: '#0D2B4D',
        indigo: '#635BFF',
        'indigo-deep': '#4A43DB',
        lime: '#81B81A',
        mist: '#F6F9FC',
        fog: '#EEF2F7',
        line: '#E6EBF1',
        primary: '#0A2540',
        secondary: '#425466',
        muted: '#697386',
        codebg: '#0B1B33',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,37,64,0.04), 0 8px 24px rgba(10,37,64,0.06)',
        lift: '0 2px 4px rgba(10,37,64,0.05), 0 16px 40px rgba(10,37,64,0.12)',
        btn: '0 1px 2px rgba(10,37,64,0.2)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
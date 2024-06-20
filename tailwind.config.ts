import type { Config } from 'tailwindcss'

const config: Config = {
 content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
  extend: {
   backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
   },
   colors: {
    'bg-primary': 'hsl(213, 13%, 14%)',
    'bg-secondary': 'hsl(218, 14%, 16%)',
    'fg-primary': 'hsl(0, 0%, 100%)',
    'fg-secondary': 'hsl(211, 24%, 80%)',
    'accent-primary': 'hsl(272, 32%, 45%)',
   },
   fontFamily: {
    caveat: ['var(--caveat)'],
    inter: ['var(--inter)'],
    dmSans: ['var(--dm-sans)'],
   },
  },
 },
 plugins: [],
}
export default config

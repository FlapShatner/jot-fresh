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
    'fg-primary': 'var(--fg-primary)',
    'bg-primary': 'var(--bg-primary)',
    'fg-secondary': 'var(--fg-secondary)',
    'bg-secondary': 'var(--bg-secondary)',
    'var-red': 'var(--red)',
    'var-yellow': 'var(--yellow)',
    'var-green': 'var(--green)',
    'var-blue': 'var(--blue)',
    'var-magenta': 'var(--magenta)',
    'var-cyan': 'var(--cyan)',
    'var-cyan-light': 'var(--cyan-light)',
    accent: 'var(--accent)',
    'var-grey-dark': 'var(--grey-dark)',
    'var-grey-mid': 'var(--grey-mid)',
    'var-grey-light': 'var(--grey-light)',
   },
   fontFamily: {
    caveat: ['var(--caveat)'],
    inter: ['var(--inter)'],
    dmSans: ['var(--dm-sans)'],
    sono: ['var(--sono)'],
   },
  },
 },
 plugins: [],
}
export default config

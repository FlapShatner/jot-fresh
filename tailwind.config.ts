import type { Config } from 'tailwindcss'

const config: Config = {
 content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
 darkMode: ['class'],
 theme: {
  extend: {
   colors: {
    'fg-primary': 'var(--fg)',
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
    'var-cyan-trans': 'var(--cyan-trans)',
    accent: 'var(--accent)',
    'accent-light': 'var(--accent-light)',
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
   borderRadius: {
    primary: '8px',
   },
  },
 },
 plugins: [],
}
export default config

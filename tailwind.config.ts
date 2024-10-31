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
 			'var-yellow': 'var(--yellow-l)',
 			'var-green': 'var(--green)',
 			'var-blue': 'var(--blue)',
 			'var-blue-light': 'var(--blue-light)',
 			'var-magenta': 'var(--magenta)',
 			'var-cyan': 'var(--cyan)',
 			'var-cyan-light': 'var(--cyan-light)',
 			'var-cyan-trans': 'var(--cyan-trans)',
 			accent: {
 				DEFAULT: 'hsl(var(--accent))',
 				foreground: 'hsl(var(--accent-foreground))'
 			},
 			'accent-light': 'var(--accent-light)',
 			'var-grey-dark': 'var(--grey-dark)',
 			'var-grey-mid': 'var(--grey-mid)',
 			'var-grey-light': 'var(--grey-light)',
 			'var-editor-bg': '#282C34',
 			'var-editor-active': '#2E343D',
 			background: 'hsl(var(--background))',
 			foreground: 'hsl(var(--foreground))',
 			card: {
 				DEFAULT: 'hsl(var(--card))',
 				foreground: 'hsl(var(--card-foreground))'
 			},
 			popover: {
 				DEFAULT: 'hsl(var(--popover))',
 				foreground: 'hsl(var(--popover-foreground))'
 			},
 			primary: {
 				DEFAULT: 'hsl(var(--primary))',
 				foreground: 'hsl(var(--primary-foreground))'
 			},
 			secondary: {
 				DEFAULT: 'hsl(var(--secondary))',
 				foreground: 'hsl(var(--secondary-foreground))'
 			},
 			muted: {
 				DEFAULT: 'hsl(var(--muted))',
 				foreground: 'hsl(var(--muted-foreground))'
 			},
 			destructive: {
 				DEFAULT: 'hsl(var(--destructive))',
 				foreground: 'hsl(var(--destructive-foreground))'
 			},
 			border: 'hsl(var(--border))',
 			input: 'hsl(var(--input))',
 			ring: 'hsl(var(--ring))',
 			chart: {
 				'1': 'hsl(var(--chart-1))',
 				'2': 'hsl(var(--chart-2))',
 				'3': 'hsl(var(--chart-3))',
 				'4': 'hsl(var(--chart-4))',
 				'5': 'hsl(var(--chart-5))'
 			},
 			sidebar: {
 				DEFAULT: 'hsl(var(--sidebar-background))',
 				foreground: 'hsl(var(--sidebar-foreground))',
 				primary: 'hsl(var(--sidebar-primary))',
 				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
 				accent: 'hsl(var(--sidebar-accent))',
 				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
 				border: 'hsl(var(--sidebar-border))',
 				ring: 'hsl(var(--sidebar-ring))'
 			}
 		},
 		fontFamily: {
 			caveat: ['var(--caveat)'],
 			inter: ['var(--inter)'],
 			dmSans: ['var(--dm-sans)'],
 			sono: ['var(--sono)']
 		},
 		borderRadius: {
 			primary: '8px',
 			lg: 'var(--radius)',
 			md: 'calc(var(--radius) - 2px)',
 			sm: 'calc(var(--radius) - 4px)'
 		},
 		spacing: {
 			nav: '256px',
 			'nav-cnt': '236px'
 		}
 	}
 },
 plugins: [require("tailwindcss-animate")],
}
export default config

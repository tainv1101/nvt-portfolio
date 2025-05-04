import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '15px'
  	},
  	fontFamily: {
  		primary: 'var(--font-jetbrainsMono)',
			zentry: ['zentry', 'sans-serif'],
			general: ['general', 'sans-serif'],
			'robert-medium': ['robert-medium', 'sans-serif'],
			'robert-regular': ['robert-regular', 'sans-serif'],
			'circular-web': ['circular-web', 'sans-serif']
  	},
  	extend: {
  		colors: {
				"demo-foreground": "rgb(244, 244, 245)",
				"demo-subtext": "rgb(113, 113, 122)",
				'zentry-blue':{
					50: '#DFDFF0',
					75: '#DFDFF2',
					100: '#F0F2FA',
					200: '#010101',
					300: '#4FB7DD',
				},
				'zentry-yellow':{
					100: '#8E983F',
					300: '#EFDD66'
				},
				'zentry-violet':{
					300: '#5724FF',
				},
  			primary: '#1c1c22',
  			accent: {
  				DEFAULT: '#FF8533',
  				hover: '#FF6D00'
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
  		}
  	}
  },
  plugins: [],
} satisfies Config;

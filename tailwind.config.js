/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: [""],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/flowbite-react/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				background: '#f6f8fa',
				foreground: '#070708',
				primary: {
					DEFAULT: '#00b3a8',
					foreground: '#F9F9F9'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#08080A'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#08080A'
				},
				secondary: {
					DEFAULT: '#002b48',
					foreground: '#F4F4F5'
				},
				muted: {
					DEFAULT: '#F4F4F5',
					foreground: '#787f95'
				},
				accent: {
					DEFAULT: '#ffffff',
					foreground: '#787f95'
				},
				destructive: {
					DEFAULT: '#EE4444',
					foreground: '#F9F9F9'
				},
				border: '#eef0f4',
				input: '#eef0f4',
				ring: '#08080A',
				chart: {
					'1': '#E76E4F',
					'2': '#299D8F',
					'3': '#264753',
					'4': '#E8C468',
					'5': '#F4A361'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};

module.exports = {
	purge: [`./pages/**/*.{js,ts,jsx,tsx}`, `./components/**/*.{js,ts,jsx,tsx}`],
	corePlugins: {
		container: false,
	},
	darkMode: `class`,
	theme: {
		extend: {
			colors: {
				brand: {
					primary: {
						'light': `rgb(233,236,240)`,
						'base': `rgb(39,39,44)`,
						'dark': `rgb(33,33,37)`,
					},
					accent: {
						'light': `rgb(246, 146, 30)`,
						'base': `rgb(255, 87, 102)`,
						'dark': `rgb(240, 0, 21)`,
					},
				},
			},
			height: {
				content: `var(--h-content-area)`,
			},
			minHeight: {
				content: `var(--h-content-area)`,
			},
		},
	},
	variants: {
		extend: {
			borderWidth: [`hover`, `focus`],
		},
	},
	plugins: [
		// require(`@tailwindcss/forms`),
		({ addComponents }) => {
			addComponents({
				'.container': {
					width: `100%`,
					marginLeft: `auto`,
					marginRight: `auto`,
					paddingLeft: `1rem`,
					paddingRight: `1rem`,
					'@screen sm': {
						paddingLeft: `1.5rem`,
						paddingRight: `1.5rem`,
					},
					'@screen md': {
						paddingLeft: `3rem`,
						paddingRight: `3rem`,
					},
					'@screen lg': {
						paddingLeft: `6rem`,
						paddingRight: `6rem`,
					},
					'@screen xl': {
						paddingLeft: `9rem`,
						paddingRight: `9rem`,
					},
				},
			});
		},
	],
};

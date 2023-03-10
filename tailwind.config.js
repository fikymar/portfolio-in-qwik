/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				headerBlack: "#212529",
				buttonBlack: "#202020",
				redLink: "#e8464e",
			},
			fontFamily: {
				sans: "Montserrat, sans-serif",
			},
		},
	},
	plugins: [],
};

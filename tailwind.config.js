/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"blue-gradient":
					"linear-gradient(45deg, #096BDE, #096BDE 30%, #DDF1FF)",
			},
			animation: {
				marquee: "marquee 32240ms linear infinite",
				"marquee-fast": "marquee 44040ms linear infinite",
				"marquee-reverse": "marquee reverse 24560ms linear infinite",
			},
			keyframes: {
				marquee: {
					"100%": { transform: "translateY(-50%)" },
				},
			},
		},
	},
	plugins: [],
};

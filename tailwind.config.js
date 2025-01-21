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
				marquee: "marquee 14s linear infinite",
				"marquee-fast": "marquee 12s linear infinite",
				"marquee-reverse": "marquee reverse 24s linear infinite",
			},
			keyframes: {
				marquee: {
					from: { transform: "translateY(-50%)" },
					to: { transform: "translateY(50%)" },
				},
			},
		},
	},
	plugins: [],
};

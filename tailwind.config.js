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
				"marquee-fast": "marquee 24560ms linear infinite",
				"marquee-reverse": "marquee reverse 40800ms linear infinite",
				"spin-slow": "spin-slow 2s linear infinite",
				"spin-slow-reverse": "spin-slow reverse 5s linear infinite",
				"scroll-fadeIn": "scroll-fadeIn 1s ease-in-out",
			},
			keyframes: {
				marquee: {
					"100%": { transform: "translateY(-50%)" },
				},
				"spin-slow": {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(360deg)" },
				},
				"scroll-fadeIn": {
					from: { transform: "translateY(80%)", opacity: "0" },
					to: { transform: "translateY(0)", opacity: "1" },
				},
			},
		},
	},
	plugins: [],
};

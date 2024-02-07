import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["pastel"]
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
} satisfies Config
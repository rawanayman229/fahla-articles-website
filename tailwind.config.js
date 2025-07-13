/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero-bg': '#EBF5FF',
        'primary-blue': '#2563EB',
        'dark-text': '#1E293B',
        'dark-grey': '#6B7280',
        'light-grey': '#A7A9AB',
        'grey': '#4B5563',
        'navy-blue': '#111827',
      },
    },
  },
  plugins: [],
};

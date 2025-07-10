/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
],
theme: {
    extend: {
    colors: {
        'primary': '#2563EB',
        'dark-grey': '#6B7280',
        'light-grey': ' #A7A9AB ',
        'grey': '#4B5563',
        'navy-blue': '#111827',
    },
    },
},
plugins: [
],
}
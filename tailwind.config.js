/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
        borderRadius: {
            DEFAULT: '8px',
            full: '9999px',
        }
    },
    plugins: [],
}

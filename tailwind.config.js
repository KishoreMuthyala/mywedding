/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Playfair Display"', "serif"],
                body: ['"Roboto"', "sans-serif"],
                names: ['"Great Vibes"', "cursive"],
            },
            colors: {
                primary: {
                    50: "#fff1f2",
                    100: "#ffe4e6",
                    200: "#fecdd3",
                    300: "#fda4af",
                    400: "#fb7185",
                    500: "#f43f5e",
                    600: "#e11d48",
                    700: "#be123c",
                    800: "#9f1239",
                    900: "#881337",
                    950: "#4c0519",
                },
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                "slide-up": "slide-up 0.5s ease-out",
                "fade-in": "fade-in 0.5s ease-out",
                "scale-in": "scale-in 0.5s ease-out",
                "bounce-in":
                    "bounce-in 0.8s cubic-bezier(0.36, 0, 0.66, -0.56)",
                "slide-left": "slide-left 0.5s ease-out",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                "slide-up": {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "scale-in": {
                    "0%": { transform: "scale(0.9)", opacity: "0" },
                    "100%": { transform: "scale(1)", opacity: "1" },
                },
                "bounce-in": {
                    "0%": { transform: "scale(0)" },
                    "50%": { transform: "scale(1.25)" },
                    "100%": { transform: "scale(1)" },
                },
                "slide-left": {
                    "0%": { transform: "translateX(20px)", opacity: "0" },
                    "100%": { transform: "translateX(0)", opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};

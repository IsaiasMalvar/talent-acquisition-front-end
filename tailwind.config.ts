import type { Config } from "tailwindcss";

export default {
    content: [
        "./index.html",
        "./src/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                mobile: "320px",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                oswald: ["Oswald", "sans-serif"],
            },
            flexGrow: {
                2: "2",
            },
        },
    },
    plugins: [],
} satisfies Config;

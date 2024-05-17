import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
    ],
    // theme: {
    //   extend: {
    //     backgroundImage: {
    //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //       "gradient-conic":
    //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    //     },
    //   },
    // },
    theme: {
        extend: {
            screens: {
                xlaptop: "976px",
                laptop: "744px",
            },
            colors: {
                blue: "#050981",
                darkBlue: "#03072B",
                orange: "#fe9602",
                white: "#fff",
                brown: "#6c441c",
                purple: "#131634",
                gray: "#ffffff44",
                lightOrange:"#ECAA32",
                lightYellow:"#ED9F30"
            },
            fontFamily: {},
            extend: {
                spacing: {},
                borderRadius: {},
            },
        },
    },
    plugins: [flowbite.plugin()],
};
export default config;

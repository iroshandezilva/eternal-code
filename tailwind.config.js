const colors = require('tailwindcss/colors')

module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            padding: "15px"
        },
        extend: {
            fontFamily: {
                roboto: " 'Roboto Condensed', sans-serif",
                robotoMono: " 'Roboto Mono', monospace",
                poppins: "'Poppins', sans-serif",
            },
            colors: {
                'cloud-burst': '#212957',
                'cream-can': '#F4C44F',
                'daisy-bush': '#53199C',
                'sea-blue': '#0A102E',
                'grayLight': '#2C2C46',
                cyan: colors.cyan,
                teal: colors.teal,
                emerald: colors.emerald,
                violet: colors.violet,
                fuchsia: colors.fuchsia,
                amber: colors.amber,
                pink: colors.pink,
                rose: colors.rose,

            },
            backgroundImage: {
                'hero-bg': "url('../img/hero-animation.gif')",
                'bg1': "url('../img/bg-1.png')",
                'bg2': "url('../img/bg-2.png')",
                'bg3': "url('../img/bg-3.png')",
            },

            boxShadow: {
                'dark': '-7px 7px 0px rgba(0, 0, 0, 0.66)',
            },

            dropShadow:{
                'pink': '0px 0px 10px #e31196',
                'pinkDarkBottom': '0px 20px 50px #e3119670',
                'pinkDarkTop': '0px -20px 50px #e3119670'
            },

            letterSpacing: {
                widermx: '0.52em',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

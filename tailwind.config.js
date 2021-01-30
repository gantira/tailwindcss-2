const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'true-gray': colors.trueGray,
                'blue': colors.lightBlue,
                'teal': colors.teal,
                'lime': colors.lime,
                'emerald': colors.emerald,
                'cyan': colors.cyan,
                'red': colors.red,
                'rose': colors.rose,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

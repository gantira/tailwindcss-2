const colors = require('tailwindcss/colors')

module.exports = {
    theme: {
        extend: {
            colors: {
                'true-gray': colors.trueGray,
                'teal': colors.teal,
                'lime': colors.lime,
                'emerald': colors.emerald,
                'cyan': colors.cyan,
                'rose': colors.rose,
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

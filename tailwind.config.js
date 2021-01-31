const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    presets: [require('./preset-1')],
    theme: {
        extend: {
            colors: {
                'rose': colors.red
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}

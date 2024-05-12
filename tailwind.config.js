/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    darkMode: ['class'],
    content: [
            './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
            './storage/framework/views/*.php',
            './resources/views/**/*.blade.php',
            './resources/js/**/*.vue',
            './resources/css/app.css'
    ],
    theme: {
        extend: {
            keyframes:{
            'blink': {
                'from, to' : { color: 'transparent' },
                '50%': { color: 'inherit'}
            }
            },
            colors: {
                'dajgreen': '#0b1008',
                'dajgreen-light': '#25361b',
            },
            animation: {
                blink: 'blink 1s ease-in-out infinite'
            },
            fontFamily: {
                'console': ['FiraCode Nerd Font Second', ...defaultTheme.fontFamily.sans]
            },
            boxShadow: {
                'dayitem-green': '5px 5px 0px -2px #0b1008, 5px 5px #25361b',
                'dayitem': '5px 5px 0px -2px #fff, 5px 5px #25361b',
            }
        },
    },
    plugins: [],
}


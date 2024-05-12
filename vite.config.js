import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
    resolve: {
        alias: {
            '@': '/resources/js',
            'ziggy-js': '/vendor/tightenco/ziggy',
            '@/assets/fonts': '/resources/css/fonts'
        },
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js', 'resources/css/fonts/Fira Code/stylesheet.css'],
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vuePlugin()
    ],

});

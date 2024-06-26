// import './bootstrap';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { renderToString } from '@vue/server-renderer';
import VueGtag from "vue-gtag";
import { ZiggyVue } from 'ziggy-js';

import yearCalculate from '@/plugins/yearCalculate'

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    render: renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue')
        return pages[`./Pages/${name}.vue`]()
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(ZiggyVue)
        .use(yearCalculate)
        .use(VueGtag, {
            config: { id: "G-1CP2N0THM6" }
          })
        .mount(el)
    },
})

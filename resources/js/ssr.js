import { createInertiaApp, router } from '@inertiajs/vue3'
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'

import yearCalculate from './plugins/yearCalculate';
import VueGtag from 'vue-gtag';

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      return pages[`./Pages/${name}.vue`]
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin)
      .use(VueGtag, {
        config: { id: "G-1CP2N0THM6" }
      })
      .use(yearCalculate)
    },
  }),
)

import { unref, withCtx, createVNode, useSSRContext, ref, defineAsyncComponent, onMounted, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { useDark, useToggle } from "@vueuse/core";
import { UseDark } from "@vueuse/components";
import { Head, Link, createInertiaApp } from "@inertiajs/vue3";
import axios from "axios";
import VueGtag, { pageview } from "vue-gtag";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _imports_0$1 = "/build/assets/prev-qt-vb8-U.png";
const _sfc_main$4 = {
  __name: "TogglerTheme",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark({
      selector: "body",
      attribute: "class",
      valueDark: "dark",
      valueLight: "light"
    });
    useToggle(isDark);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(UseDark), _attrs, {
        default: withCtx(({ isDark: isDark2, toggleDark }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative bg-dajgreen dark:bg-white shadow-inner mx-auto mb-6 rounded-full w-14 md:w-16 h-8 md:h-10 transform transition-all duration-700 overflow-hidden ease-in-out"${_scopeId}><span class="${ssrRenderClass([{ "translate-x-6": isDark2, "translate-x-0": !isDark2 }, "top-0 absolute bg-white dark:bg-dajgreen-light rounded-full w-8 md:w-10 h-8 md:h-10 transition-transform duration-1000 cursor-pointer ease-in-out scale-75"])}"${_scopeId}></span></div>`);
          } else {
            return [
              createVNode("div", { class: "relative bg-dajgreen dark:bg-white shadow-inner mx-auto mb-6 rounded-full w-14 md:w-16 h-8 md:h-10 transform transition-all duration-700 overflow-hidden ease-in-out" }, [
                createVNode("span", {
                  onClick: ($event) => toggleDark(),
                  class: [{ "translate-x-6": isDark2, "translate-x-0": !isDark2 }, "top-0 absolute bg-white dark:bg-dajgreen-light rounded-full w-8 md:w-10 h-8 md:h-10 transition-transform duration-1000 cursor-pointer ease-in-out scale-75"]
                }, null, 10, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TogglerTheme.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
(function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
})();
const _sfc_main$3 = {
  __name: "Collection",
  __ssrInlineRender: true,
  props: ["dailyItems"],
  setup(__props) {
    const dailyItemsData = ref([]);
    ref(null);
    const apiurl = ref(`${"https://deanabnerjul.com/api/v1"}/public/daily-items`);
    const nextUrl = ref(apiurl.value);
    const DailyItemCard = defineAsyncComponent(() => import("./assets/DailyItemCard-T7mOmoXf.js"));
    onMounted(() => {
      pageview({
        page_title: "Collection - Deanabnerjul",
        page_location: window.location,
        page_path: "/collections"
      });
      loadMorePosts();
    });
    function loadMorePosts() {
      if (nextUrl.value === null) {
        console.log("no more fetch");
        return;
      }
      const url = nextUrl.value;
      nextUrl.value = null;
      axios.get(url).catch(function() {
        nextUrl.value = null;
      }).then(function(response) {
        dailyItemsData.value = [...dailyItemsData.value, ...response.data.data];
        nextUrl.value = response.data.links.next || null;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Collection</title><meta name="description" content="Dean Abner Julian personal collection/daily items website&#39;s. May you want it too"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Collection"),
              createVNode("meta", {
                name: "description",
                content: "Dean Abner Julian personal collection/daily items website's. May you want it too"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<main class="flex flex-col"><div class="flex-shrink mt-10"><span class="float-left dark:border-white dark:bg-dajgreen-light hover:shadow p-2 border border-black rounded-full hover:scale-105" title="Kembali"><img width="20" height="20"${ssrRenderAttr("src", _imports_0$1)} alt="" class="dark:invert"></span>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div><div class="flex-grow"><div class="mx-auto container"><div class="gap-4 lg:gap-6 xl:gap-8 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 pb-4"><!--[-->`);
      ssrRenderList(dailyItemsData.value, (collection) => {
        _push(ssrRenderComponent(unref(DailyItemCard), {
          key: collection.id,
          title: collection.title,
          image: collection.image,
          link: collection.url
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
      if (nextUrl.value !== null) {
        _push(`<div class="flex justify-center"><button class="bg-dajgreen dark:bg-dajgreen-light mx-auto px-4 py-2 border rounded-full text-white">Selanjutnya</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></main><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Collection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/build/assets/Julian-ecfpeahs.jpg";
const PixelateImage = "/build/assets/pixelate_julian-HK5kF2OM.png";
const _imports_2 = "/build/assets/twitter-utpEFr_u.png";
const _imports_3 = "/build/assets/linkedin-mKZIAaDv.png";
const _imports_4 = "/build/assets/instagram-7-6aoY1V.png";
const _imports_5 = "/build/assets/github-amIXt1jg.png";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Please Wait... </div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/utils/Loading.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const LoadingComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Opps... </div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/utils/Error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const isBrowser = typeof window !== "undefined";
    const WinBoxContact = defineAsyncComponent({
      loader: () => import("./assets/Contact-kdTGGYKZ.js"),
      // A component to use while the async component is loading
      loadingComponent: LoadingComponent,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200,
      // A component to use if the load fails
      errorComponent: ErrorComponent,
      // The error component will be displayed if a timeout is
      // provided and exceeded. Default: Infinity.
      timeout: 3e3
    });
    const WinBoxAbout = defineAsyncComponent({
      loader: () => import("./assets/About-rdytpvIA.js"),
      // A component to use while the async component is loading
      loadingComponent: LoadingComponent,
      // Delay before showing the loading component. Default: 200ms.
      delay: 200,
      // A component to use if the load fails
      errorComponent: ErrorComponent,
      // The error component will be displayed if a timeout is
      // provided and exceeded. Default: Infinity.
      timeout: 3e3
    });
    onMounted(() => {
      pageview({
        page_title: "Home - Deanabnerjul",
        page_location: window.location,
        page_path: "/"
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Home</title><meta name="description" content="Dean Abner Julian personal information website&#39;s"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Home"),
              createVNode("meta", {
                name: "description",
                content: "Dean Abner Julian personal information website's"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col justify-center min-h-screen"><header class="font-console"><div class="mx-auto">`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div><div class="flex justify-center items-center mb-6"><div class="border-8 border-green-900 rounded-full w-52 h-52 overflow-hidden"><img${ssrRenderAttr("src", _imports_0)} alt="" width="200" height="200" class="object-left w-full scale-100 hover:scale-125 transition-all duration-500 aspect-square ease-in-out object-cover"></div></div><nav class="mb-2"><ul class="flex flex-wrap justify-center items-center space-x-6 lg:space-x-4 space-y-2 lg:space-y-0 font-semibold"><li class="tracking-normal cursor-pointer">`);
      if (isBrowser) {
        _push(ssrRenderComponent(unref(WinBoxContact), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` /contact-me `);
            } else {
              return [
                createTextVNode(" /contact-me ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="tracking-normal cursor-pointer">`);
      if (isBrowser) {
        _push(ssrRenderComponent(unref(WinBoxAbout), null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` /about-me `);
            } else {
              return [
                createTextVNode(" /about-me ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li class="tracking-normal cursor-pointer">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("frontend.collections.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`/my-collection`);
          } else {
            return [
              createTextVNode("/my-collection")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></nav><h1 class="font-bold text-2xl text-green-900 tracking-wide"><img${ssrRenderAttr("src", PixelateImage)} alt="Dean Abner Julian Pixelate" width="30" height="30" class="float-left mr-2">deanabnerjul:$<span class="animate-blink duration-75 ease-in-out">|</span></h1></header><footer class="mt-6 font-console overflow-x-hidden"><h3 class="font-medium text-xl">Find me online:</h3><ul class="social-wrapper"><li class="social-link"><a href="https://twitter.com/deanabnerjul" target="_blank" class="link"><img class="social-icon" width="15" height="15"${ssrRenderAttr("src", _imports_2)} alt=""> Twitter</a></li><li class="social-link"><a href="https://www.linkedin.com/in/deanabner" target="_blank" class="link"><img class="social-icon" width="15" height="15"${ssrRenderAttr("src", _imports_3)} alt=""> Linkedin</a></li><li class="social-link"><a href="https://www.instagram.com/deanabnerjul" target="_blank" class="link"><img class="social-icon" width="15" height="15"${ssrRenderAttr("src", _imports_4)} alt=""> Instagram</a></li><li class="social-link"><a href="https://github.com/julians22" target="_blank" class="link"><img class="social-icon" width="15" height="15"${ssrRenderAttr("src", _imports_5)} alt=""> Github</a></li></ul></footer></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
const yearCalculate = {
  install: (app) => {
    app.config.globalProperties.$calculateYear = (year, month) => {
      return calculateYears(year, month);
    };
  }
};
function calculateYears(startYear, startMonth) {
  const startDate = new Date(startYear, startMonth - 1);
  const currentDate = /* @__PURE__ */ new Date();
  const timeDifference = currentDate - startDate;
  const millisecondsInYear = 1e3 * 60 * 60 * 24 * 365.25;
  const yearsElapsed = timeDifference / millisecondsInYear;
  return Math.floor(yearsElapsed);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Collection.vue": __vite_glob_0_0, "./Pages/Welcome.vue": __vite_glob_0_1 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).use(VueGtag, {
        config: { id: "G-1CP2N0THM6" }
      }).use(yearCalculate);
    }
  })
);
export {
  PixelateImage as P
};

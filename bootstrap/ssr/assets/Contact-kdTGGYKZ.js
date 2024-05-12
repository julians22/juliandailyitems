import { ref, onMounted, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import VueWinBox from "vue-winbox";
import { P as PixelateImage } from "../ssr.js";
import { event } from "vue-gtag";
import "@vueuse/core";
import "@vueuse/components";
import "@inertiajs/vue3";
import "axios";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
const _sfc_main = {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    const winboxref = ref(null);
    const OPTIONS = {
      title: "Contact me",
      class: "modern",
      background: "#00aa00",
      width: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      icon: PixelateImage
    };
    const isOpen = ref(false);
    const width = window.innerWidth;
    const terminalOpt = ref(null);
    onMounted(() => {
      terminalOpt.value = initTerminalWidth();
      OPTIONS.width = terminalOpt.value.width;
      OPTIONS.top = terminalOpt.value.top;
      OPTIONS.left = terminalOpt.value.left;
      OPTIONS.right = terminalOpt.value.right;
      OPTIONS.bottom = terminalOpt.value.bottom;
    });
    const initTerminalWidth = () => {
      return {
        width: width <= 425 ? 300 : 400,
        top: width <= 425 ? 10 : 50,
        right: width <= 425 ? 10 : 50,
        left: width <= 425 ? 10 : 50,
        bottom: width <= 425 ? 10 : 50
      };
    };
    const blur = (name) => {
      event("view_item", {
        "event_label": name,
        "event_category": "engagement"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      if (isOpen.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(unref(VueWinBox), {
          ref_key: "winboxref",
          ref: winboxref,
          options: OPTIONS,
          onClose: ($event) => isOpen.value = false,
          onFocus: ($event) => blur("contact")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-3 font-console text-white"${_scopeId}><h1 class="font-bold text-green-900 text-lg tracking-wide"${_scopeId}>contact-me:$<span class="animate-blink duration-75 ease-in-out"${_scopeId}>|</span></h1><div class="font-extralight text-xs leading-normal"${_scopeId}><p${_scopeId}>You can contact me at the email and phone number below</p><ul${_scopeId}><li${_scopeId}>Phone: +62-812-1856-261</li><li${_scopeId}>Email: dabnerjulian@gmail.com</li></ul></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-3 font-console text-white" }, [
                  createVNode("h1", { class: "font-bold text-green-900 text-lg tracking-wide" }, [
                    createTextVNode("contact-me:$"),
                    createVNode("span", { class: "animate-blink duration-75 ease-in-out" }, "|")
                  ]),
                  createVNode("div", { class: "font-extralight text-xs leading-normal" }, [
                    createVNode("p", null, "You can contact me at the email and phone number below"),
                    createVNode("ul", null, [
                      createVNode("li", null, "Phone: +62-812-1856-261"),
                      createVNode("li", null, "Email: dabnerjulian@gmail.com")
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Winbox/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

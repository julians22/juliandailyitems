import { ref, onMounted, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { VueWinBox } from "vue-winbox";
import { P as PixelateImage } from "../ssr.js";
import { event } from "vue-gtag";
import "@vueuse/core";
import "@vueuse/components";
import "@inertiajs/vue3";
import "axios";
import "@inertiajs/vue3/server";
import "@vue/server-renderer";
const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    const winboxref = ref(null);
    const isOpen = ref(false);
    const width = window.innerWidth;
    const terminalOpt = ref(null);
    const OPTIONS = {
      title: "About me",
      class: "modern",
      background: "#00aa00",
      width: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      icon: PixelateImage
    };
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
        width: width <= 425 ? 300 : 800,
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
          onFocus: ($event) => blur("about")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-3 font-console text-white"${_scopeId}><h1 class="font-bold text-green-900 text-lg tracking-wide"${_scopeId}>about-me:$<span class="animate-blink duration-75 ease-in-out"${_scopeId}>|</span></h1><div class="font-extralight text-xs leading-normal"${_scopeId}><p class="mb-2"${_scopeId}>My name is Dean Abner Julian Gerung, and I boast a rich ${ssrInterpolate(_ctx.$calculateYear(2018, "09"))} years tenure in the realm of programming. Fluent in languages such as JavaScript and PHP, I bring a dynamic skill set to the table.</p><p class="mb-2"${_scopeId}>I hold a Bachelor&#39;s Degree in System Information from Nusa Mandiri University in Jakarta, Indonesia, a testament to my commitment to academic excellence.As a seasoned web developer with ${ssrInterpolate(_ctx.$calculateYear(2018, "09"))} years of hands-on experience, I specialize in crafting cutting-edge solutions using Laravel, Vue.js, native JavaScript, and SCSS. My expertise extends beyond mere development; I am also adept at managing Linux VPS and Google Cloud servers, ensuring seamless deployment and maintenance of digital assets.I am a Bachelor Degree System Information from Nusa Mandiri University in Jakarta, Indonesia.</p><p class="mb-2"${_scopeId}>My journey in the programming world spans ${ssrInterpolate(_ctx.$calculateYear(2018, "09"))} years, commencing from my college days and continuing to evolve to this day. Throughout this time, I have honed my craft and cultivated a deep understanding of creating intuitive, efficient, and captivating web experiences.</p><p${_scopeId}>Driven by a passion for innovation and a desire to push boundaries, I believe in the power of collaborative efforts to build outstanding digital solutions. Let’s work together to transform ideas into reality and leave a lasting mark in the digital landscape.</p></div></div>`);
            } else {
              return [
                createVNode("div", { class: "p-3 font-console text-white" }, [
                  createVNode("h1", { class: "font-bold text-green-900 text-lg tracking-wide" }, [
                    createTextVNode("about-me:$"),
                    createVNode("span", { class: "animate-blink duration-75 ease-in-out" }, "|")
                  ]),
                  createVNode("div", { class: "font-extralight text-xs leading-normal" }, [
                    createVNode("p", { class: "mb-2" }, "My name is Dean Abner Julian Gerung, and I boast a rich " + toDisplayString(_ctx.$calculateYear(2018, "09")) + " years tenure in the realm of programming. Fluent in languages such as JavaScript and PHP, I bring a dynamic skill set to the table.", 1),
                    createVNode("p", { class: "mb-2" }, "I hold a Bachelor's Degree in System Information from Nusa Mandiri University in Jakarta, Indonesia, a testament to my commitment to academic excellence.As a seasoned web developer with " + toDisplayString(_ctx.$calculateYear(2018, "09")) + " years of hands-on experience, I specialize in crafting cutting-edge solutions using Laravel, Vue.js, native JavaScript, and SCSS. My expertise extends beyond mere development; I am also adept at managing Linux VPS and Google Cloud servers, ensuring seamless deployment and maintenance of digital assets.I am a Bachelor Degree System Information from Nusa Mandiri University in Jakarta, Indonesia.", 1),
                    createVNode("p", { class: "mb-2" }, "My journey in the programming world spans " + toDisplayString(_ctx.$calculateYear(2018, "09")) + " years, commencing from my college days and continuing to evolve to this day. Throughout this time, I have honed my craft and cultivated a deep understanding of creating intuitive, efficient, and captivating web experiences.", 1),
                    createVNode("p", null, "Driven by a passion for innovation and a desire to push boundaries, I believe in the power of collaborative efforts to build outstanding digital solutions. Let’s work together to transform ideas into reality and leave a lasting mark in the digital landscape.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Winbox/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

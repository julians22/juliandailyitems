import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "vue-gtag";
const _sfc_main = {
  __name: "DailyItemCard",
  __ssrInlineRender: true,
  props: ["title", "link", "image"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center items-wrapper border-[2px] border-dajgreen-light shadow-dayitem dark:shadow-dayitem-green w-full overflow-hidden" }, _attrs))}><div class="flex flex-col items-center mx-auto py-2 overflow-hidden group"><img class="group-hover:scale-105 rounded-md w-11/12 transform transition-all duration-300 aspect-square object-center object-contain"${ssrRenderAttr("alt", `Dean Abner Julian daily items ${props.title}`)} width="300" height="300"${ssrRenderAttr("src", `storage/${props.image}`)} alt=""><p class="my-2 font-medium text-black text-center text-sm dark:text-white tracking-tight"${ssrRenderAttr("title", props.title)}>${ssrInterpolate(props.title)}</p><a title="Beli Human Greatness Midweight T-shirt Maroon" target="_blank" class="group-hover:scale-105 bg-dajgreen dark:bg-dajgreen-light mt-auto px-2 py-1 border rounded-full font-semibold text-base text-white transform transition-all group-hover:-translate-y-2 duration-300 cursor-pointer group/button"><span class="group-hover/button:animate-blink duration-75">Gasken!</span><span class="transform transition-all group-hover/button:animate-blink duration-75 delay-1000">🔥</span></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DailyItemCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

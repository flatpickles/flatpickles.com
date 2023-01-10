import { c as create_ssr_component } from "../../chunks/index.js";
const ress_min = "";
const fonts = "";
const global = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper{width:100%;height:100vh;display:flex;flex-direction:column;align-items:center}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};

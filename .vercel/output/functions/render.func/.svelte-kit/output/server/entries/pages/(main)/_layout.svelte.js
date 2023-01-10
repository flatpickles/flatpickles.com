import { c as create_ssr_component } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".main-container.svelte-1hcs7uo{width:100%;max-width:var(--page-width);padding-top:var(--page-top-bottom-padding);padding-bottom:var(--page-top-bottom-padding);padding-left:var(--padding);padding-right:var(--padding);display:flex;flex-direction:column}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"main wrapper"}"><div class="${"main-container svelte-1hcs7uo"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};

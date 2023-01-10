import { c as create_ssr_component } from "./index.js";
const PageBody_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-body.svelte-19g94gz{font-size:1.25em;text-align:justify;margin-top:var(--padding)}",
  map: null
};
const PageBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"page-body svelte-19g94gz"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  PageBody as P
};

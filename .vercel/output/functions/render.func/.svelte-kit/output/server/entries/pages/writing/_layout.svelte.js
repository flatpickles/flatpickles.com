import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { B as Body } from "../../../chunks/Body.js";
import "clsx";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".writing{background-color:#FFF}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Body, "Body").$$render($$result, { class: "writing" }, {}, {})}
<div class="${"writing wrapper"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};

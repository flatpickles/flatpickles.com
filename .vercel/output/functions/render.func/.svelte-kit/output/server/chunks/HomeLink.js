import { c as create_ssr_component, e as escape } from "./index.js";
const HomeLink_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1e48ul6{display:block;width:calc(var(--padding) * 1.5);height:calc(var(--padding) * 1.5)}a.svelte-1e48ul6{color:inherit;text-decoration:none;opacity:var(--base-opacity);transition:opacity 0.3s ease-out;font-size:1.25em;pointer-events:all}a.svelte-1e48ul6:hover{opacity:1}",
  map: null
};
const HomeLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { opacity = "0.5" } = $$props;
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  $$result.css.add(css);
  return `<a href="${"/"}" style="${"--base-opacity: " + escape(opacity, true)}" class="${"svelte-1e48ul6"}"><img src="${"/media/quick-pick.png"}" alt="${"Flat Pickles"}" class="${"svelte-1e48ul6"}">
</a>`;
});
export {
  HomeLink as H
};

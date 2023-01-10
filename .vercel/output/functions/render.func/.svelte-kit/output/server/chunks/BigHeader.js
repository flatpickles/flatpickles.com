import { c as create_ssr_component, d as add_attribute } from "./index.js";
import { H as HeaderType } from "./types.js";
const flatPicklesImg = "/_app/immutable/assets/flatpickles-15b23cba.svg";
const notesImg = "/_app/immutable/assets/notes-0e97c44b.svg";
const mattNicholsImg = "/_app/immutable/assets/mattnichols-016e0fd8.svg";
const BigHeader_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1tcwj8w{width:100%;height:100%}.hidden.svelte-1tcwj8w{display:none}",
  map: null
};
const BigHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css);
  return `<div class="${"header"}">
    <img${add_attribute("src", flatPicklesImg, 0)} alt="${"Flat Pickles"}" class="${["svelte-1tcwj8w", type != HeaderType.FlatPickles ? "hidden" : ""].join(" ").trim()}">
    <img${add_attribute("src", notesImg, 0)} alt="${"Notes and Such"}" class="${["svelte-1tcwj8w", type != HeaderType.NotesAndSuch ? "hidden" : ""].join(" ").trim()}">
    <img${add_attribute("src", mattNicholsImg, 0)} alt="${"Matt Nichols"}" class="${["svelte-1tcwj8w", type != HeaderType.MattNichols ? "hidden" : ""].join(" ").trim()}">
</div>`;
});
export {
  BigHeader as B
};

import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Chili Recipe",
  "date": "11/11/2018"
};
const Chili_recipe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Start with fresh beans and add saltwater, preferably a friend’s tears of happiness. Add a live chicken, but then let it escape when you look away to check your phone. Make sure to grind up your seashells extra fine so their texture doesn’t betray the smooth mouthfeel of crushing existential doubt. Garnish with lemon.</p>`;
});
export {
  Chili_recipe as default,
  metadata
};

import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "On Happiness",
  "date": "11/6/2019"
};
const On_happiness = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>“Happy” is a destination, and like all destinations, it is mythical. There’s always somewhere else to go, until there’s nothing left. Instead of seeking happiness, seek more nuanced emotions - seek new ways to feel. Happiness is just a part of the journey.</p>`;
});
export {
  On_happiness as default,
  metadata
};

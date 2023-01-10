import { c as create_ssr_component } from "./index.js";
const metadata = { "title": "Presence", "date": "8/15/2017" };
const Presence = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Sift through the sands of time and find this moment<br>
Frozen solid, but thawing as your attention strays<br>
It is hard to stay focused.</p>
<p>Up here the birds sing in different registers<br>
One song meandering fluidly into the next<br>
Without concern for lost syllables.</p>`;
});
export {
  Presence as default,
  metadata
};

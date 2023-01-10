import { c as create_ssr_component } from "./index.js";
const metadata = { "title": "Fog", "date": "6/14/2012" };
const Fog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>I spent two hours<br>
watching the horizon<br>
as distant landmarks faded<br>
in and out of view.</p>
<p>Now the rain is stronger<br>
and darkness is falling.</p>`;
});
export {
  Fog as default,
  metadata
};

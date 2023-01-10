import { c as create_ssr_component } from "./index.js";
const metadata = { "title": "Beauty", "date": "10/3/2020" };
const Beauty = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Beauty condenses in the liminal space<br>
between something and nothing<br>
and I meander toward the void,<br>
pausing, pensively -<br>
snapping a photo for future reference</p>
<p>Beauty oozes through sinewy seams<br>
in a patchwork quilt of darkness<br>
an equal and opposite reaction,<br>
the seams pull tighter -<br>
thunder, steady rain,<br>
lights flickering in the storm</p>
<p>Beauty sings in the night,<br>
and something else -<br>
laughing? crying?<br>
I can’t hear the forest through the trees<br>
falling<br>
I’ve been gone a long time</p>`;
});
export {
  Beauty as default,
  metadata
};

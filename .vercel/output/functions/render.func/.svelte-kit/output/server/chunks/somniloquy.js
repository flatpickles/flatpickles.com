import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Somniloquy",
  "date": "1/2/2017"
};
const Somniloquy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>I’m too sleepy for poetry<br>
that weaves my threads of thought into a thousand tiny braids<br>
twisted tendrils whose tensile strength only God must know</p>
<p>I’m too sleepy for words<br>
that bend my gray matter backwards and sideways and forwards again<br>
stretching and sticking like taffy that’s never quite smooth enough</p>
<p>I’m too sleepy for strings of letters<br>
that interrupt my consciousness with their discontinuities<br>
as even the most sonorous sequences slip into sudden silence</p>`;
});
export {
  Somniloquy as default,
  metadata
};

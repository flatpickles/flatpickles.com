import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "Bricolage",
  "date": "8/31/2018"
};
const Bricolage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>I’m a solipsist on a silly quest<br>
to question the grounds on which we met<br>
You’re in my mind, and I in yours<br>
voracious ontological omnivores.</p>
<p>My subtle sands are mixed and mingled<br>
amidst Pringle cans and deadly shingles<br>
Myriad selves as shelves abound,<br>
collecting dust and losing ground<br>
All are real and all are fake,<br>
each purpose built as a garden rake</p>
<p>But what slips amidst my careful tines?<br>
Just time and rhymes and forgotten lines.</p>`;
});
export {
  Bricolage as default,
  metadata
};

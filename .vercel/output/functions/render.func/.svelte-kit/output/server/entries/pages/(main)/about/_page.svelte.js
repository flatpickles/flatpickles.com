import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { H as HeaderType } from "../../../../chunks/types.js";
import { B as BigHeader } from "../../../../chunks/BigHeader.js";
import { P as PageBody } from "../../../../chunks/PageBody.js";
const LinkBar_svelte_svelte_type_style_lang = "";
const css = {
  code: '.links.svelte-10oxa69{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;gap:calc(var(--padding) / 2);margin-top:var(--padding)}a.svelte-10oxa69{font-family:"Hobeaux";font-size:1.25em;text-decoration:none;color:rgb(11, 85, 11)}a.svelte-10oxa69:hover{text-decoration:underline}@media(max-width: 600px){a.svelte-10oxa69{flex-basis:25%}a.svelte-10oxa69:nth-child(3n-1){text-align:center}a.svelte-10oxa69:nth-child(3n){text-align:right}}@media(max-width: 350px){a.svelte-10oxa69{flex-basis:45%}a.svelte-10oxa69:nth-child(odd){text-align:left}a.svelte-10oxa69:nth-child(even){text-align:right}}',
  map: null
};
const LinkBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"links svelte-10oxa69"}"><a href="${"/"}" class="${"svelte-10oxa69"}">Homepage</a>
    <a href="${"https://xoxo.zone/@flatpickles"}" class="${"svelte-10oxa69"}">Mastodon</a>
    <a href="${"https://instagram.com/flatpickles"}" class="${"svelte-10oxa69"}">Instagram</a>
    <a href="${"https://github.com/flatpickles"}" class="${"svelte-10oxa69"}">GitHub</a>
    <a href="${"https://man1.biz"}" class="${"svelte-10oxa69"}">LinkedIn</a>
    <a href="${"/matt-nichols-resume.pdf"}" class="${"svelte-10oxa69"}">Resume</a>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1rbxukt_START -->${$$result.title = `<title>Matt Nichols</title>`, ""}<!-- HEAD_svelte-1rbxukt_END -->`, ""}

${validate_component(BigHeader, "BigHeader").$$render($$result, { type: HeaderType.MattNichols }, {}, {})}

${validate_component(LinkBar, "LinkBar").$$render($$result, {}, {}, {})}

${validate_component(PageBody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `<p>Hello world, it&#39;s me, Matt! Welcome to my internet living room.
        This is where I put the stuff I&#39;m creating and thinking about, and where I maintain an ongoing archive of projects and explorations.
        If you see fit to poke around, I hope you find something cool. Thanks for visiting!
    </p>
    <p>Here&#39;s another paragraph even, and we can see how this feels! It might not be that great. In fact, I might take all of this about text and put it straight into the trash, because let&#39;s be honest, your time is too valuable to sit here and read my nonsense. Like seriously, I can&#39;t believe you&#39;re still reading. You deserve a medal, or some similar acknowledgement of exceptional character! I&#39;m sure you get this all the time, but you rock. Big time.
    </p>`;
    }
  })}`;
});
export {
  Page as default
};

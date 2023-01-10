import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { P as PageBody } from "../../../../chunks/PageBody.js";
import { B as BigHeader } from "../../../../chunks/BigHeader.js";
import { H as HeaderType } from "../../../../chunks/types.js";
const PagesDisplay_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".pages.svelte-jhvcu7{width:100%;text-align:center;font-size:1em}.current-page.svelte-jhvcu7{text-decoration:underline}.other-page.svelte-jhvcu7{opacity:0.5}",
  map: null
};
const PagesDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"pages svelte-jhvcu7"}"><span class="${"other-page svelte-jhvcu7"}">[1]
    </span>
    <span class="${"current-page svelte-jhvcu7"}">[2]
    </span>
    <span class="${"other-page svelte-jhvcu7"}">[3]
    </span>
</div>`;
});
const Note_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".note.svelte-14j0hv4{padding-bottom:var(--padding)}.note-header.svelte-14j0hv4{display:flex;flex-direction:row;justify-content:space-between;align-items:baseline}.note-title.svelte-14j0hv4{font-size:1.25em;font-family:'Hobeaux'}.note-date.svelte-14j0hv4{opacity:0.5}",
  map: null
};
const Note = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"note svelte-14j0hv4"}"><div class="${"note-header svelte-14j0hv4"}"><div class="${"note-title svelte-14j0hv4"}">Demo Note
        </div>

        <div class="${"note-date svelte-14j0hv4"}">Published: Jan 7. 2023
        </div></div>

    <div class="${"note-body"}"><p>This is a demo note that I&#39;m putting in here, just to see how it feels.
            It&#39;s still going! It&#39;s gonna keep going for a minute, while we make sure that it feels good.
            How was your day? While we&#39;re here, I&#39;d love to hear about it. Oh wait, apologies, that&#39;s time.
            See you next week!
        </p></div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-1ejihdl{color:rgb(0, 0, 134);text-decoration:none}a.svelte-1ejihdl:hover{text-decoration:underline}.notes-lede.svelte-1ejihdl{font-size:1.25em;text-align:justify;padding:calc(var(--padding) / 2);margin-top:var(--padding);border-radius:calc(var(--padding) / 2);background-color:rgba(0, 0, 0, 7%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1olijs4_START -->${$$result.title = `<title>Notes and Such</title>`, ""}<!-- HEAD_svelte-1olijs4_END -->`, ""}

${validate_component(BigHeader, "BigHeader").$$render($$result, { type: HeaderType.NotesAndSuch }, {}, {})}

<div class="${"notes-lede svelte-1ejihdl"}"><p>This is a space for bits, pieces, odds, and ends. If you&#39;re looking for completed projects, check out my <a href="${"/"}" class="${"svelte-1ejihdl"}">homepage!</a></p></div>

${validate_component(PageBody, "PageBody").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Note, "Note").$$render($$result, {}, {}, {})}
    ${validate_component(Note, "Note").$$render($$result, {}, {}, {})}
    ${validate_component(Note, "Note").$$render($$result, {}, {}, {})}
    ${validate_component(Note, "Note").$$render($$result, {}, {}, {})}

    ${validate_component(PagesDisplay, "PagesDisplay").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};

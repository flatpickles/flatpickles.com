import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, f as each } from "../../../chunks/index.js";
import { B as BigHeader } from "../../../chunks/BigHeader.js";
import { H as HeaderType } from "../../../chunks/types.js";
const HighlightCard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: 'img.svelte-yo1lfa{position:absolute;width:100%;height:100%;object-fit:cover;z-index:-1}.card.svelte-yo1lfa{height:var(--highlight-height);background-image:var(--image-url);background-size:cover;flex:1 0 var(--highlight-min-width);filter:drop-shadow(0 0 calc(var(--padding) / 2) rgba(0, 0, 0, 0.2));text-decoration:none;border-radius:calc(var(--padding));overflow:hidden;transform:translateZ(0)}.overlay.svelte-yo1lfa{width:100%;height:100%;display:flex;flex-direction:column;justify-content:flex-end;background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9))}.title.svelte-yo1lfa{font-family:"Hobeaux";font-size:1.25em;color:#FFF;padding:var(--padding);user-select:none}',
  map: null
};
const HighlightCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { link } = $$props;
  let { image } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$3);
  return `<a${add_attribute("href", link, 0)} class="${"card svelte-yo1lfa"}"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="${"svelte-yo1lfa"}">
    <div class="${"overlay svelte-yo1lfa"}"><div class="${"title svelte-yo1lfa"}">${escape(title)}</div></div>
</a>`;
});
const floppyImg = "/_app/immutable/assets/floppy-de44fd06.png";
const goopImg = "/_app/immutable/assets/goop-c92fba15.png";
const rectImg = "/_app/immutable/assets/rect-feaad3ca.png";
const Highlights_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".highlights.svelte-14jakm8{display:flex;flex-direction:row;flex-wrap:wrap;gap:calc(var(--padding) / 2);margin-top:calc(var(--padding) * 1.5)}",
  map: null
};
const Highlights = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"highlights svelte-14jakm8"}">${validate_component(HighlightCard, "HighlightCard").$$render(
    $$result,
    {
      title: "Sketchbook",
      link: "https://sketchbook.flatpickles.com",
      image: floppyImg
    },
    {},
    {}
  )}
    ${validate_component(HighlightCard, "HighlightCard").$$render(
    $$result,
    {
      title: "Notes and Such",
      link: "/notes",
      image: goopImg
    },
    {},
    {}
  )}
    ${validate_component(HighlightCard, "HighlightCard").$$render(
    $$result,
    {
      title: "About Me",
      link: "/about",
      image: rectImg
    },
    {},
    {}
  )}
</div>`;
});
const ProjectList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-1r6a6hb{color:inherit;text-decoration:none}.project-list.svelte-1r6a6hb{margin-top:var(--padding);display:flex;flex-direction:column}.project-row.svelte-1r6a6hb{padding:calc(var(--padding) / 2);border-radius:calc(var(--padding) / 2);display:flex;flex-direction:row;column-gap:var(--padding);justify-content:space-between;flex-wrap:wrap;align-items:baseline}.project-row.svelte-1r6a6hb:nth-child(odd){background-color:rgba(0, 0, 0, 7%)}.project-title.svelte-1r6a6hb{flex-basis:300px;flex-grow:2;font-weight:bold;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1.25em}.project-metadata.svelte-1r6a6hb{flex-basis:300px;flex-grow:1;display:flex;flex-direction:row;column-gap:var(--padding);justify-content:space-between;color:rgba(0, 0, 0, 60%);font-size:1.25em}",
  map: null
};
const ProjectList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css$1);
  return `<div class="${"project-list svelte-1r6a6hb"}">${each(projects, (project) => {
    return `<a${add_attribute("href", project.url, 0)} class="${"project-row svelte-1r6a6hb"}"><div class="${"project-title svelte-1r6a6hb"}">${escape(project.title)}</div>
            <div class="${"project-metadata svelte-1r6a6hb"}"><div class="${"project-type"}">${escape(project.type)}</div>
                <div class="${"project-date"}">${escape(project.date.toLocaleDateString("en-us", {
      day: "numeric",
      year: "numeric",
      month: "short"
    }))}
                </div></div>
        </a>`;
  })}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".copyright.svelte-iuourl{text-align:center;margin-top:calc(var(--padding) * 2);opacity:0.4}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-et07fx_START -->${$$result.title = `<title>Flat Pickles</title>`, ""}<!-- HEAD_svelte-et07fx_END -->`, ""}

${validate_component(BigHeader, "BigHeader").$$render($$result, { type: HeaderType.FlatPickles }, {}, {})}



${validate_component(Highlights, "Highlights").$$render($$result, {}, {}, {})}

${validate_component(ProjectList, "ProjectList").$$render($$result, { projects: data.projects }, {}, {})}

<div class="${"copyright svelte-iuourl"}">Copyright © 2023 Matt Nichols
</div>`;
});
export {
  Page as default
};

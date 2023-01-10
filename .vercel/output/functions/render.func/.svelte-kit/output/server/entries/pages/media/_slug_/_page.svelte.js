import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component } from "../../../../chunks/index.js";
import { P as ProjectType } from "../../../../chunks/types.js";
import { H as HomeLink } from "../../../../chunks/HomeLink.js";
const MediaDisplay_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".media-outer-container.svelte-1omi4qm{position:absolute;width:100%;height:100%;display:flex;flex-direction:column;align-items:center}.media-inner-container.svelte-1omi4qm{height:100%;display:flex;flex-direction:row;align-items:center}.media_item.svelte-1omi4qm{max-width:100%;max-height:100%;object-fit:contain}.svg.svelte-1omi4qm{width:100%;height:100%}",
  map: null
};
const MediaDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css$1);
  return `<div class="${"media-outer-container svelte-1omi4qm"}"><div class="${"media-inner-container svelte-1omi4qm"}">${project.type == ProjectType.Image ? `<img${add_attribute("src", project.assetPath, 0)}${add_attribute("alt", project.title, 0)} class="${[
    "media_item svelte-1omi4qm",
    project.assetPath?.includes(".svg") ? "svg" : ""
  ].join(" ").trim()}">` : `${project.type == ProjectType.Video ? `
            <video class="${"media_item svelte-1omi4qm"}" autoplay><source${add_attribute("src", project.assetPath, 0)} type="${"video/mp4"}"><meta itemprop="${"name"}"${add_attribute("content", project.title, 0)}></video>` : `${project.type == ProjectType.Audio ? `<audio autoplay controls><source${add_attribute("src", project.assetPath, 0)} type="${"audio/mpeg"}"></audio>` : ``}`}`}</div>
</div>`;
});
const MediaOverlay_svelte_svelte_type_style_lang = "";
const css = {
  code: ".overlay.svelte-esgmjn{z-index:1;width:100%;display:flex;flex-direction:column;justify-content:space-between;pointer-events:none}.meta.svelte-esgmjn{padding:var(--padding)}.header.svelte-esgmjn{background-image:linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));padding-bottom:calc(var(--padding) * 2);pointer-events:all;display:flex;flex-direction:row;align-items:top;justify-content:space-between}.metadata.svelte-esgmjn{opacity:80%}.title.svelte-esgmjn{font-size:1.25em;font-family:'Hobeaux'}",
  map: null
};
const MediaOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { date } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  $$result.css.add(css);
  return `<div class="${"overlay svelte-esgmjn"}"><div class="${"meta header svelte-esgmjn"}"><div class="${"metadata svelte-esgmjn"}"><div class="${"title svelte-esgmjn"}">${escape(title)}</div>
            <div class="${"date"}">${escape(date.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "long"
  }))}</div></div>
        ${validate_component(HomeLink, "HomeLink").$$render($$result, { opacity: "0.7" }, {}, {})}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const project = data.project;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-f1mq9q_START -->${$$result.title = `<title>${escape(project.title)}</title>`, ""}<!-- HEAD_svelte-f1mq9q_END -->`, ""}

${validate_component(MediaDisplay, "MediaDisplay").$$render($$result, { project }, {}, {})}

${validate_component(MediaOverlay, "MediaOverlay").$$render($$result, { title: project.title, date: project.date }, {}, {})}`;
});
export {
  Page as default
};

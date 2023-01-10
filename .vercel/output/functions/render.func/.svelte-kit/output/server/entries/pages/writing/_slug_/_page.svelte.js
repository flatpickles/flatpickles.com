import { c as create_ssr_component, v as validate_component, e as escape, m as missing_component } from "../../../../chunks/index.js";
import { H as HomeLink } from "../../../../chunks/HomeLink.js";
const HomeLinkOverlay_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".home-wrapper.svelte-1ex2nc1{position:fixed;background-color:inherit;top:var(--padding);right:var(--padding);border-radius:50%}",
  map: null
};
const HomeLinkOverlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"home-wrapper svelte-1ex2nc1"}">${validate_component(HomeLink, "HomeLink").$$render($$result, { opacity: "0.7" }, {}, {})}
</div>`;
});
const WritingDisplay_svelte_svelte_type_style_lang = "";
const css = {
  code: ".writing-container.svelte-umghue{--writing-container-top-bottom-padding:calc(\n            max(\n                min(100px, 100/7 * 1vw),\n                calc(var(--padding) * 4)\n            )\n        );max-width:var(--page-width);padding-top:var(--writing-container-top-bottom-padding);padding-bottom:var(--writing-container-top-bottom-padding);padding-left:var(--padding);padding-right:var(--padding)}.title.svelte-umghue{font-family:'Hobeaux';font-size:2em}.date.svelte-umghue{opacity:0.5}.writing-body.svelte-umghue{padding-top:var(--padding)}",
  map: null
};
const WritingDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  $$result.css.add(css);
  return `<div class="${"writing-container svelte-umghue"}"><div class="${"title svelte-umghue"}">${escape(project.title)}</div>
    
    <div class="${"date svelte-umghue"}">${escape(project.date.toLocaleDateString("en-us", {
    day: "numeric",
    year: "numeric",
    month: "long"
  }))}</div>

    <div class="${"writing-body svelte-umghue"}">${validate_component(project.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { project = data.project } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return `${$$result.head += `<!-- HEAD_svelte-f1mq9q_START -->${$$result.title = `<title>${escape(project.title)}</title>`, ""}<!-- HEAD_svelte-f1mq9q_END -->`, ""}

${validate_component(HomeLinkOverlay, "HomeLinkOverlay").$$render($$result, {}, {}, {})}

${validate_component(WritingDisplay, "WritingDisplay").$$render($$result, { project }, {}, {})}`;
});
export {
  Page as default
};

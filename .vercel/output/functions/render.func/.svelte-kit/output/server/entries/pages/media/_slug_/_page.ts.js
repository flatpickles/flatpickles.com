import { C as Content } from "../../../../chunks/Content.js";
const load = async ({ params }) => {
  return {
    project: Content.mediaProject(params.slug)
  };
};
export {
  load
};

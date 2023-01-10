import { C as Content } from "../../../../chunks/Content.js";
const load = async ({ params }) => {
  const project = await Content.writingProject(params.slug);
  return {
    project
  };
};
export {
  load
};

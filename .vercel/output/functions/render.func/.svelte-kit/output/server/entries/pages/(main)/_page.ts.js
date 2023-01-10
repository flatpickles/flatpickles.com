import { C as Content } from "../../../chunks/Content.js";
const load = async ({ params }) => {
  const allProjects = await Content.fullIndex();
  return {
    projects: allProjects
  };
};
export {
  load
};

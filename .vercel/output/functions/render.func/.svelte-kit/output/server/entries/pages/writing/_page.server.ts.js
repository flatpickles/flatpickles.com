import { r as redirect } from "../../../chunks/index2.js";
const load = () => {
  throw redirect(307, "/");
};
export {
  load
};

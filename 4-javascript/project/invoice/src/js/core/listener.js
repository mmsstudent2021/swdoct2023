import { createFormHandler } from "./handlers.js";
import { createForm } from "./selectors.js";

const listener = () => {
  createForm.addEventListener("submit", createFormHandler);
};

export default listener;

import { exec } from "child_process";
import { TEMPLATE_URL } from "../keys.js";

/**
 * * clone the trinity project from github.
 */
export const generateTemplate = () => {
  const url = TEMPLATE_URL;

  const path = "./";

  exec(`cd ${path} && git clone ${url}`);

  console.log("Project generated successfully");
  console.log("Before Run 'npm install' to install the dependencies");
  console.log("Then Run 'npm run start' to start the project");
};

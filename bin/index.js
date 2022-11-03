#! /usr/bin/env node

import * as commander from "commander";
import shell from "shelljs";
import { TEMPLATE_URL } from "./keys.js";

//configurations

/**
 * * Prepare the commander instance.
 */
const program = commander.program
  .version("1.0.0")
  .description("CLI for trinity project")
  .option("-g, --generate", "Generate a new trinity project", false)
  .parse(process.argv);

/**
 * * get the options from the commander instance.
 */
const opt = program.opts();

/**
 * * clone the trinity project from github.
 */
const downloadTemplate = () => {
  const url = TEMPLATE_URL;

  const path = "./";
  shell.cd(path);
  shell.exec("git clone " + url);

  console.log("Template generated successfully");
  console.log("Before Run 'npm install' to install the dependencies");
  console.log("Then Run 'npm run start' to start the project");
};

if (opt.generate) {
  console.log("Generating a new trinity project...");
  downloadTemplate();
}

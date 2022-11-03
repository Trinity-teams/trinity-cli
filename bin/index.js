#! /usr/bin/env node

import * as commander from "commander";
import { generateTemplate } from "./functions/generate-project.js";

//configurations

/**
 * * Prepare the commander instance.
 */
const program = commander.program
  .version("1.1.1")
  .description("CLI for trinity project")
  .option("-g, --generate", "Generate a new trinity project")
  .parse(process.argv);

/**
 * * get the options from the commander instance.
 */
const opt = program.opts();

if (opt.generate) {
  console.log("Generating a new trinity project...");
  generateTemplate();
}

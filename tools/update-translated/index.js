/**
 * @fileoverview Task for updating `updated` YAML field.
 * Run this command while you have dirty files and it will update their
 * `updated` YAML field.
 *
 * Example: npm run updated && git commit -am 'Updated some blog posts'
 *
 * @author Matt Gaunt & Rob Dodson 💕
 */

// This task only runs against files in this directory.
const contentDir = 'src/site/content';

const chalk = require('chalk');
const fs = require('fs').promises;
const moment = require('moment');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const RE_UPDATED = /^updated:\s?(.*?)\n/m;
const MSG_UPDATE = `Updated ${chalk.bold('updated')} in`;

/**
 * Gets the list of modified and renamed files that have been staged.
 * This will ignore files that were added or deleted.
 * @return {Promise<Array<string>>} Returns array of changed files.
 */
async function getChangedFiles() {
  const cmd = 'git diff --cached --name-only --diff-filter=MR';
  const {stdout} = await exec(cmd, '.');
  return stdout.split('\n');
}

const run = async () => {
  console.log('omg im running');
};

run();

const puppeteer = require("puppeteer-core");
let execSync = require("child_process").execSync;
//import { executablePath } from 'puppeteer';
//import { execFile } from 'child_process';

chromiumParams = ['--no-first-run', '--no-default-browser-check'];
chromiumPath = executablePath();
execFile(chromiumPath, chromiumParams, (error, stdout) => {
  if (error) { throw error; }
  console.log(stdout);
});
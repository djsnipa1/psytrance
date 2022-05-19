const puppeteer = require('puppeteer-core');

//Your URL here
var url='https://djsnipa1.github.io/3d-portfolio'; 

// get chromium path
let execSync = require("child_process").execSync;
let getChromiumPath = execSync("which chromium");
// console.log(getChromiumPath.toString());
// chromiumPath
let chromiumPath = getChromiumPath.toString()
// fullChromiumPath
let fullChromiumPath = '/../../..' + chromiumPath;
console.log(fullChromiumPath)
// start puppeteer
//const browser = await puppeteer.launch({ executablePath: '/../../../nix/store/ia69plrrvn7czdhn3flq1ll39i92ixab-chromium-92.0.4515.159/bin/chromium',           args: ['--no-sandbox'] });
  // const browser = await puppeteer.launch({ executablePath: chromiumPath, args:  ['--no-sandbox'] });

(async () => {
  const browser = await puppeteer.launch({ executablePath: fullChromiumPath, headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] });

const page = await browser.newPage();
await page.goto(url);


console.log(await page.content());
  await page.screenshot({path: 'screenshot.png', fullPage: true});
})();


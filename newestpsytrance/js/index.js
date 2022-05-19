const puppeteer = require("puppeteer");

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
const browser = await puppeteer.launch({ executablePath: '/../../../nix/store/ia69plrrvn7czdhn3flq1ll39i92ixab-chromium-92.0.4515.159/bin/chromium', args: ['--no-sandbox'] });

  //const browser = await puppeteer.launch({ executablePath: fullchromiumPath, args:  ['--no-sandbox'] });


  
  const page = await browser.newPage();
  await page.goto('https://djsnipa1.github.io/3d-portfolio');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  await page.screenshot({path: 'screenshot.png', fullPage: true});
  
  console.log('Dimensions:', dimensions);

  await browser.close();
})();

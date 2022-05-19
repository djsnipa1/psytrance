const puppeteer = require("puppeteer-core");

//Your URL here
var url='https://djsnipa1.github.io/3d-portfolio'; 

var test = process.env.PUPPETEER_EXECUTABLE_PATH

console.log("trst: ",test)
function getChromiumPath() {
  

// get chromium path
let execSync = require("child_process").execSync;
let getChromiumPath = execSync("which chromium-browser");
// console.log(getChromiumPath.toString());
// chromiumPath
let chromiumPath = getChromiumPath.toString()
// fullChromiumPath
let fullChromiumPath = '/../../..' + chromiumPath;
return fullChromiumPath;
}
//console.log(getChromiumPath());

(async () => {
  let path = getChromiumPath()
    console.log("path: ", path)
  const browser = await puppeteer.launch({ executablePath: path, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log('Dimensions:', dimensions);

  await browser.close();
})();

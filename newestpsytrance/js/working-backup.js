const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/../../../nix/store/ia69plrrvn7czdhn3flq1ll39i92ixab-chromium-92.0.4515.159/bin/chromium-browser',
    args: ['--no-sandbox']
  });
  const pageUrl = "https://everynoise.com/new_releases_by_genre.cgi?genre=psychedelic%20trance&region=US"
  const page = await browser.newPage();
  await page.goto(pageUrl);

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log('Dimensions:', dimensions);
  //console.log(await page.content());
  await page.screenshot({
    path: 'screenshot.png',
    fullPage: false
  });

  let tracks = [];
  await Promise.all([
    // page.click('button[type=submit]'),
    page.click('input[type=checkbox]'),
    page.waitForNavigation({
      waitUntil: 'networkidle2'
    })
  ]);

  const rows = await page.$$('body > form > table > tbody > tr > td:nth-child(2) > div:nth-child(2) > div');
  const genres = await page.$$('.genrename');

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];

    const genreName = await genre.$eval('a', x => x.textContent);
    console.log('genre: ', genreName);
  }

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    const artist = await row.$eval('a:nth-child(3)', element => element.textContent);
    const track = await row.$eval('a:nth-child(5)', element => element.textContent);
    const href = await row.$eval('a:nth-child(5)', element => element.getAttribute('href'));

    console.log(artist, ' - ', track, ': ', href);
    tracks.push(href);

  }


  // console.log(rows.length);
  // console.log(genres.length);

  console.log('------ TRACKS -------');
  console.log(tracks);


  await browser.close();
})();

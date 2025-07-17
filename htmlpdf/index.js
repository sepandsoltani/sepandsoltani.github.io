const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--font-render-hinting=none', '--no-sandbox'],
    headless: "new",
  });
  const page = await browser.newPage();

  await page.goto(`file:${path.join(__dirname, '../_pages/cv.html')}`);

  await page.emulateMediaType('screen');
  await page.evaluate(() => document.body.style.zoom = 0.9);

  const pdf = await page.pdf({
    path: path.join(__dirname, '../files/Sepand_Soltani_cv.pdf'),
    margin: { top: '20px', right: '20px', bottom: '20px', left: '20px' },
    printBackground: true,
    format: 'A4',
  });

  await browser.close();
})();


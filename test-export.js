const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  await page.goto('http://localhost:5005/platform', {waitUntil: 'networkidle0'});
  const buttons = await page.$$('button');
  for(let b of buttons){
    const text = await page.evaluate(el => el.textContent, b);
    if(text.includes('Export as PDF')) {
      await b.click();
      console.log('Clicked export button!');
      await new Promise(r => setTimeout(r, 3000));
      break;
    }
  }
  await browser.close();
})();

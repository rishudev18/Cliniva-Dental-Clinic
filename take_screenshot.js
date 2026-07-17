const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Set viewport to match a standard desktop resolution
  await page.setViewport({ width: 1440, height: 900 });
  
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  console.log('Navigating to ' + filePath);
  await page.goto(filePath, { waitUntil: 'networkidle0' });
  
  console.log('Taking full page screenshot...');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  
  await browser.close();
  console.log('Screenshot saved successfully to screenshot.png');
})().catch(err => {
  console.error('Error taking screenshot:', err);
  process.exit(1);
});

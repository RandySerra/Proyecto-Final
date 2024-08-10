const puppeteer = require('puppeteer');

describe('Page', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should display the title', async () => {
    await page.goto('http://localhost:3000');
    const title = await page.title();
    expect(title).toBe('Expected Title');
  });
});

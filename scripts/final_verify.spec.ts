import { test, expect } from '@playwright/test';

test('Final Home Page Design Audit', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Wait for heavy components to load
  await page.waitForTimeout(2000);

  // Check for Orbitron font on H1
  const h1Font = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    if (!h1) return 'NOT FOUND';
    return getComputedStyle(h1).fontFamily;
  });
  console.log('H1 Font:', h1Font);

  // Check for the new background color #2264E3
  const bgColor = await page.evaluate(() => {
    return getComputedStyle(document.body).backgroundColor;
  });
  console.log('Body BG Color:', bgColor);

  await page.screenshot({ path: 'final_home_audit.png', fullPage: true });
});

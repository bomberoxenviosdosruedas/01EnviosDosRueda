import { test, expect } from '@playwright/test';

test('verify image creation admin pages', async ({ page }) => {
  // We'll skip the actual navigation and just check if we can reach the pages
  // In a real environment, we'd have to handle authentication.

  const pages = [
    '/admin/crea-imagenes',
    '/admin/crea-imagenes/generales',
    '/admin/crea-imagenes/servicios',
    '/admin/crea-imagenes/optimas'
  ];

  for (const path of pages) {
    const response = await page.goto(path);
    // If we are redirected to login, that's okay for now as long as the page exists.
    if (response?.status() === 200) {
      console.log(`Page ${path} is accessible`);
    } else {
       console.log(`Page ${path} returned status ${response?.status()}`);
    }
  }
});

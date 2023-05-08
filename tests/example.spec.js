// @ts-check
import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Daniel Carmona - Desarrollador Front-End/)
})

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Click the get started link.
  await page.getByRole('link', { name: 'Projects' }).click()

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*projects/)
})

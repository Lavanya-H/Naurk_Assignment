import { test, expect } from "@playwright/test"

test("print Admn users", async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('input[placeholder="Username"]').fill("Admin")
    await page.locator('input[placeholder="Password"]').fill("admin123")
    await page.locator('//button[@type="submit"]').click()
    await page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator('.oxd-select-text--after').first().click()
    await page.locator('//div[@class="oxd-select-text-input"]').first().click()
    await page.locator('//button[@type="submit"]').click()

    await page.waitForLoadState('networkidle');


    const textvalues = await page.locator('//div[@role="table"]/div[2]/div/div/div[2]').allTextContents()
    console.log(textvalues)

})
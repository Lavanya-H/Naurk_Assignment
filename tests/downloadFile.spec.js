import { test, expect } from '@playwright/test';
import fs from "fs"

test('working with downloadfile', async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/download")
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('//a[@href="download/test.txt"]').click()
        ]);
        const suggestedFilename = download.suggestedFilename();
        const filepath = 'tests/download/' + suggestedFilename;
        await download.saveAs(filepath);
        expect(fs.existsSync(filepath)).toBeTruthy()//whether file is download or not
    })

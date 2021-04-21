import puppeteer, { Page } from 'puppeteer-core'
import { getOptions } from './chromiumOptions'

let _page: Page | null

async function getPage(isDev: boolean): Promise<Page> {
	if (_page) {
		return _page
	}

	const options = await getOptions(isDev)
	const browser = await puppeteer.launch(options)

	_page = await browser.newPage()

	return _page
}

export async function getScreenshot(
	url: string,
	isDev: boolean
): Promise<string | void | Buffer> {
	const page = await getPage(isDev)

	await page.goto(
		`https://${url.replace('http://', '').replace('https://', '').trim()}`
	)
	await page.waitForTimeout(3000)
	await page.setViewport({ width: 1440, height: 1024 })

	const file = await page.screenshot({
		type: 'png'
	})

	return file
}

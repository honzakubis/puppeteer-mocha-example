import { expect } from 'chai'
import Launcher from '../launcher'

describe('Calculator Test', () => {
	let page

	before(async function () {
		page = await Launcher.build('Desktop')
	})

	after(async function () {
		await page.close()
	})

	step('should load calculator website', async function () {
		await page.goto('https://furbo.sk/playground/kalkulacka.php')
		await page.waitForText('h1', 'Kalkulačka')
	})

	step('should add numbers', async function () {
		await page.waitForSelector('#firstInput')
		await page.type('#firstInput', '10')

		await page.waitForSelector('#secondInput')
		await page.type('#secondInput', '10')

		await page.waitForSelector('#count')
		await page.click('#count')

		let result = await page.getText('#result')
		expect(result).to.equal('20')
	})

	step('should deduct numbers', async function () {
		await page.reload()
		await page.waitForSelector('#firstInput')
		await page.type('#firstInput', '10')

		await page.waitForSelector('#secondInput')
		await page.type('#secondInput', '10')

		await page.waitForSelector('#count')
		await page.click('#deduct')

		let result = await page.getText('#result')
		expect(result).to.equal('0')
	})

	step('should reset calculator', async function () {
		// TODO
	})
})

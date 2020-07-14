import { expect } from 'chai'

describe('Test', () => {
	step('TEST A', () => {
		expect(2).to.equal(2)
	})

	step('TEST B', () => {
		expect(2).to.equal(5)
	})

	step('TEST C', () => {
		expect(2).to.equal(2)
	})
})

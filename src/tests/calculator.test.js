import { expect } from 'chai'
import Launcher from '../launcher'

import CalculatorPage from '../pages/CalculatorPage'

describe('Calculator Test', () => {
  let desktop
  let calculatorPage

  before(async function () {
    desktop = await Launcher.build('Desktop')
    calculatorPage = new CalculatorPage(desktop)
  })

  after(async function () {
    await desktop.close()
  })

  step('should load calculator website', async function () {
    await calculatorPage.open()
  })

  step('should add numbers', async function () {
    await calculatorPage.fillFirstInput('10')
    await calculatorPage.fillSecondInput('10')
    await calculatorPage.sumNumbers()

    let result = await calculatorPage.getResult()
    expect(result).to.equal('20')
  })

  step('should deduct numbers', async function () {
    await desktop.reload()
    await calculatorPage.fillFirstInput('10')
    await calculatorPage.fillSecondInput('10')
    await calculatorPage.deductNumbers()

    let result = await calculatorPage.getResult()
    expect(result).to.equal('0')
  })
})

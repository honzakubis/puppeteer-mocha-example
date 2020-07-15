import BasePage from '../pages/BasePage'

export default class CalculatorPage extends BasePage {
  async open() {
    await this.page.goto('https://furbo.sk/playground/kalkulacka.php')
    await this.page.waitForText('h1', 'Kalkulačka')
  }

  async fillFirstInput(number) {
    await this.page.waitForSelector('#firstInput')
    await this.page.type('#firstInput', number)
  }

  async fillSecondInput(number) {
    await this.page.waitForSelector('#secondInput')
    await this.page.type('#secondInput', number)
  }

  async sumNumbers() {
    await this.page.waitForSelector('#count')
    await this.page.click('#count')
  }

  async deductNumbers() {
    await this.page.waitForSelector('#deduct')
    await this.page.click('#deduct')
  }

  async reset() {
    await this.page.waitForSelector('#reset')
    await this.page.click('#reset')
  }

  async getResult() {
    let result = await this.page.getText('#result')
    return result
  }
}

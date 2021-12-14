const{By} = require("selenium-webdriver")

module.exports = {
    crossOutMovie: async(driver) =>{
        await driver.findElement(By.xpath('//input')).sendKeys('Crossed Out Movie')

        await driver.findElement(By.xpath(`//button`)).click()

        await driver.findElement(By.xpath('//span')).click()      

}
}

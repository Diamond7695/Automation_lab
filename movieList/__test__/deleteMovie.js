const{By} = require("selenium-webdriver")

module.exports ={
    deleteMovie: async(driver) =>{
        await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')

        await driver.findElement(By.xpath(`//button`)).click()

        
        
        await driver.findElement(By.xpath(`//li//button`)).click()


        const movies = await driver.findElements(By.xpath('//li'))
        expect(movies).toHaveLength(0)
        
    
    }
        

}
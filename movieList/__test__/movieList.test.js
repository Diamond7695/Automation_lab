const {Builder,Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {deleteMovie} = require ('./deleteMovie')
const{crossOutMovie} = require ('./crossOutMovie')
beforeAll(async ()=>{
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
}) 
afterAll(async()=>{
    await driver.quit()
})
test('delete a movie', async() =>{
    await deleteMovie(driver)
    await driver.sleep(5000)
    
})

test('remove out movie', async()=>{
    await crossOutMovie(driver)
    await driver.sleep(5000)
})
const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

//crossing off a movie
//deleting a movie
//notifications are displayed.

describe('Test the Movies App functionality') {
    test("can cross off a movie title when the checkbox is clicked", async () => {
    await driver.findElement(By.id('movie-2')).click()
    })

//     const isChecked = await driver.findElement(By.xpath('(//ul/li/input)[{the one you want to check}]')).value;

// expect(await isChecked).toBeTruthy;


    test("can delete a movie when the Delete button is clicked", async () => {
        await driver.findElement(By.id('delete-btn')).click()
        const movie = true 
        await driver.
    })

    test("notifications are displayed when the checkbox is clicked", async () => {

    })

}
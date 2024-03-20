const {By, Builder, Browser} = require('selenium-webdriver');
// const assert = require("assert");

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.youtube.com');
  
    let title = await driver.getTitle();

    console.log('title', title);
  
    await driver.manage().setTimeouts({implicit: 500});

    let quotes = [];
    const search = await driver.findElement(By.className('ytd-searchbox'));
    const submitButton = await driver.findElement(By.id('search-icon-legacy'));
    await search.sendKeys('node js');
    await submitButton.click();


    // console.log(quoteText);
    // let submitButton = await driver.findElement(By.css('button'));
  
    // await textBox.sendKeys('Selenium');
    // await submitButton.click();
  
    // let message = await driver.findElement(By.id('message'));
    // let value = await message.getText();
    // console.log(value);
    // assert.equal("Received!", value);
  } catch (e) {
    console.log(e)
  } finally {
    // await driver.quit();
  }
}())
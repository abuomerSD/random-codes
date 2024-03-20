const {By, Builder, Browser} = require('selenium-webdriver');
// const assert = require("assert");

(async function firstTest() {
  let driver;

  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://quotes.toscrape.com/scroll');
  
    let title = await driver.getTitle();

    console.log('title', title);
  
    await driver.manage().setTimeouts({implicit: 500});

    let quotes = [];

  
    // let quoteText = await driver.findElement(By.className('text'));
    // const allQuotes = await driver.findElements(By.className('text'));
    // allQuotes.forEach( async e=> {
    //     const text = await e.getTagName()
    //     console.log(text);
    // })

        let arr = [];
          // Get element with tag name 'div'
          let quoteDiv = driver.findElement(By.className("quote"));

          // Get all the elements available with tag name 'p'
          let allQuotes = await quoteDiv.findElements(By.className("text"));
          for(let quote of allQuotes) {
            const author = await quote.findElement(By.className('author'));
            let qouteObj = {
                text: quote.getText(),
                author: author.getText(),
            }
            arr.push(qouteObj);
          }

          console.log(arr);

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
    await driver.quit();
  }
}())
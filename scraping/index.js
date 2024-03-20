const puppeteer = require('puppeteer');

async function run() {
    // const browser = await puppeteer.launch();
    // const browser = await puppeteer.launch({ignoreDefaultArgs: ['--disable-extensions']});
    // const browser = await puppeteer.launch({
    //     args: ['--no-sandbox', '--disable-setuid-sandbox'],
    //   });

      const browser = await puppeteer.launch({executablePath: '/Applications/Google Chrome/Contents/MacOS'});

    
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com/');

    // await page.screenshot({path: 'test.png'})
    console.log('test');

    await browser.close();  
}

run();
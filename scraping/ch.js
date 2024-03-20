const cheerio = require('cheerio');
// const {  } = require('node-fetch');
// import fetch from 'node-fetch';
const axios = require('axios');
const { chromium } = require('playwright');



async function run() {
    // const $ = await cheerio.fromURL('https://www.traversymedia.com/');
    // const html = await fetch('https://www.traversymedia.com/', {
    //     method: 'GET'
    // })

    // const html = await axios.get('https://www.traversymedia.com/');
    // const $ = cheerio.load(html)
    // // console.log(html);

    // const $p = $('p');

    // $p.forEach(p => {
    //     console.log(p.innerHTML);
    // });


      // Launch the browser and open a new blank page
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://quotes.toscrape.com/scroll');

  // Set screen size
  await page.setViewportSize({ width: 1080, height: 1024 });

  // wait for '.quotes' only == first data init finished
  await page.waitForSelector('.quotes');

  // scroll to the bottom of the page
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));

  // wait for '#loading' has display: none
  await page.waitForSelector('#loading', { state: 'hidden' });

  // wait for '.quotes'
  // and collect new quotes (.text, .author, .tags)
  const quotes = await page.evaluate(() => {
    const quotes = [];
    document.querySelectorAll('.quote').forEach((quote) => {
      const text = quote.querySelector('.text')?.textContent || '';
      const author = quote.querySelector('.author')?.textContent || '';
      const tags = quote.querySelector('.tags')?.textContent || '';
      quotes.push({ text, author, tags });
    });
    return quotes;
  });

  // Print out the quotes
  console.log(quotes);
  await browser.close();
}

run();



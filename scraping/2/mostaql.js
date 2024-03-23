const {By, Builder, until} = require('selenium-webdriver');
const ExcelJS = require('exceljs');


let driver;
let dataArray = [];
async function main() {
    try {
        driver = await new Builder().forBrowser('chrome').build();

        const url = 'https://mostaql.com/projects?category=development&budget_max=10000&sort=latest';
        await driver.get(url);

        // change page
        const numberOfPages = 3 ;

        for(let i =0; i < numberOfPages; i++) {
            try {
                await scrapData();
                let nextPageLink = await driver.findElement(By.xpath('/html/body/div[3]/div/div[1]/div/div[2]/div[2]/div/div[1]/div/ul/li[7]/a'));
                await driver.wait(until.elementIsVisible(nextPageLink), 10000);
                await nextPageLink.click();
            } catch (error) {
                let nextPageLink = await driver.findElement(By.xpath('/html/body/div[3]/div/div[1]/div/div[2]/div[2]/div/div[1]/div/ul/li[7]/a'));
                await driver.wait(until.elementIsVisible(nextPageLink), 10000);
                await nextPageLink.click();
                console.log(error);
            }
        }

        await writeDataToExcelSheet(dataArray);

    } catch (error) {
        console.log(error);
    }
    finally {
        await driver.quit();
    }

}


main();

async function scrapData() {

    const projects = await driver.findElements(By.className('project-row'));
    for(let project of projects) {
        const title = await project.findElement(By.css('.card--title a')).getText();
        const snippet = await project.findElement(By.css('.mrg--tt .details-url')).getText();
        const link = await await project.findElement(By.css('.mrg--tt .details-url')).getAttribute('href');
        const projectObj = {title, snippet, link};
        dataArray.push(projectObj);
        }
}

async function writeDataToExcelSheet(dataArray) {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Scraped Data');
    sheet.columns = [
        {header: 'project title', key: 'title', width: 20},
        {header: 'project snippet', key: 'snippet', width: 20},
        {header: 'project link', key: 'link', width: 20},
    ]
    dataArray.forEach(project => {
        sheet.addRow(project);
    });
    await workbook.xlsx.writeFile(`data-${Date.now()}.xlsx`);
}
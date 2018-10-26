const puppeteer = require('puppeteer');

async function getPic(){
    var num = Math.floor(Math.random()*100);

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://google.com');
    console.log("Taking Screenshot");
    await page.screenshot(
        {
           path: 'google' + num + '.png' 
        });
    var photoName = 'google' + num + '.png';

    console.log("Took screenshot");
    console.log("The name of the photo is " + photoName);

    await browser.close();
}

getPic();
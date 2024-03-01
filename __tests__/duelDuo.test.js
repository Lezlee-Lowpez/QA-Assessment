const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("check for div=choices", async () => {
    //open the page then click on draw 
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click()
    const isDivPresent = await driver.wait(until.elementLocated(By.id('choices')), 30000)
    const isDivVisible = await isDivPresent.isDisplayed();
    expect(isDivVisible).toBe(true);
  });

  test("check that add to duo displays div=player-duo", async ()=> {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("draw")).click()
    
    const choiceCards = await driver.wait(
      until.elementsLocated(By.css('.bot-card.outline')),
      30000
    );

    if (choiceCards.length > 0) {
      const addButton = await choiceCards[0].findElement(By.css('.bot-btn'));
      await addButton.click();
    }

    const playerDuoDiv = await driver.wait(
      until.elementLocated(By.id('player-duo')),
      30000
    );

    const isDisplayed = await playerDuoDiv.isDisplayed();
    expect(isDisplayed).toBe(true);
  })


});
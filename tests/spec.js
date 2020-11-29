var components = require('../pages/components');

describe('Protractor Demo App', function() {
    var testPage = new components
    it('should add one and two', function() {
        testPage.go();
        testPage.first.sendKeys(1);
        testPage.secondNumber.sendKeys(2);
        testPage.goButton.click();
        expect(testPage.result.getText()).toEqual('3');
        expect(browser.isElementPresent(testPage.result)).toBe(true);

        browser.actions().mouseMove(testPage.first).perform()
    });

});
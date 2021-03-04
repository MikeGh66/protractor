const { element, browser } = require('protractor')

var navigation = function () {
    this.firstNumber = element(by.css('*[class^=input-small]:nth-child(1)'));

    this.navigateToUrl = function (angular) {
        url = 'http://www.google.com'
        if (angular == 'angular') {
            console.log('prima intrare')
            browser.waitForAngularEnabled = true
            browser.get(url);
        }
        if (angular == 'local') {
            console.log('doua intrare')
            browser.waitForAngularEnabled = false
            browser.driver.get(url);
        }
    }
};

module.exports = navigation;
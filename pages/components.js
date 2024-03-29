const { element, browser } = require('protractor')

var components = function() {
  
  this.firstNumber = element(by.css('*[class^=input-small]:nth-child(1)'));
  this.first = element(by.model('first'))
  this.secondNumber = element(by.css('*[class^=input-small]:nth-child(3)'));
  this.goButton = element(by.id('gobutton'));
  this.result = element(by.binding('latest'))

};

module.exports = components;
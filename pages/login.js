var logIn = function() {
    this.firstNumber = element(by.css('*[class^=input-small]:nth-child(1)'));
    this.secondNumber = element(by.css('*[class^=input-small]:nth-child(3)'));
    this.goButton = element(by.id('gobutton'));
    this.result = element(by.binding('latest'))
  
  
    this.go = function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    }
  };
  
  module.exports = logIn;
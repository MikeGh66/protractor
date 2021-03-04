const { element, browser } = require('protractor')

var navigation = require('../../pages/functions/navigation');
var assertion = require('../../pages/functions/assertions');
var components = require('../../pages/components')


describe('Protractor Demo App', function() {

    var testPage = new components
    var navigationPage = new navigation
    var assertionPage = new assertion

    it('should add one and two', function() {
        navigationPage.navigateToUrl('local');

    });

});
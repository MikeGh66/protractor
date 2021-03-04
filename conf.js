var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    framework: "jasmine",
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites:{
      firstTest: ['tests/e2e/firstTest.js'],
    },
    // specs: ['../../tests/e2e/firstTest.js'],
    capabilities: {
      browserName: 'chrome'
    },

    onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: './TestReports',
         docTitle: 'Test Results',
         preserveDirectory: false,
         clientDefaults:{
          showTotalDurationIn: "header",
          totalDurationFormat: "ms",
          columnSettings:{
             warningTime: 10000,
             dangerTime: 20000
          }
       }   
      }).getJasmine2Reporter());

   }

  };
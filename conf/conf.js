// An example configuration file.
exports.config = {
  directConnect: true,
  idleTimeout:  690000,
   delay:300000,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    "console": "integratedTerminal" 
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['demo.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 90000,
    delay:6789009
    
  }
};

exports.config = {
  allScriptsTimeout: 15 * 1000,

  specs: [
    'test/e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/build/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 10 * 1000
  }
};

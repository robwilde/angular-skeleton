module.exports = function(config) {
  config.set({

    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'app/**/*.module.js',
      'app/**/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch: true,

    singleRun: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-phantomjs-launcher'
    ],

    reporters: ['dots']

  });
};

'use strict';

module.exports = {
  options: {
    autoWatch: false,
    browsers: ['PhantomJS'],
    client: {
      mocha: {
        reporter: 'html'
      }
    },
    files: [
      '<%= folders.output %>/vendor.js',
      '<%= folders.bower %>/jquery-mockjax/jquery.mockjax.js',
      '<%= folders.output %>/settings.js',
      '<%= folders.output %>/specHelper.js',
      '<%= folders.output %>/tests.js'
    ],
    frameworks: ['mocha'],
    //logLevel: 'LOG_DEBUG',
    singleRun: true,
    port: '<%= server.testPort %>'
  },

  ci: {
    options: {
      junitReporter: {
        outputFile: 'test-reports/ui-test-results.xml'
      },
      reporters: ['dots', 'junit'],
      singleRun: true
    }
  },

  development: {
  },

  keepalive: {
    options: {
      background: true,
      singleRun: false
    }
  }
};

'use strict';

module.exports = {
  development: {
    options: {
      alias: [
        './<%= folders.scripts %>/application:app'
      ],
      browserifyOptions: {
        debug: true
      },
      external: ['user-config'],
      transform: ['hbsfy', 'brfs', 'debowerify'],
      watch: true
    },
    dest: '<%= folders.tmp %>/app.js',
    src: [
      '<%= folders.bower %>/jquery-mockjax/jquery.mockjax.js',
      '<%= folders.fixtures %>/**/*.js'
    ]
  },

  settings: {
    options: {
      alias: ['./<%= folders.configs %>/<%= configFilename %>:user-config'],
      transform: ['hbsfy', 'debowerify'],
      watch: false
    },
    dest: '<%= folders.output %>/<%= filenames.settings %>',
    src: []
  },

  dist: {
    options: {
      alias: [
        './<%= folders.scripts %>/application:app'
      ],
      external: ['user-config'],
      transform: ['hbsfy', 'debowerify']
    },
    dest: '<%= folders.tmp %>/app.js',
    src: []
  },

  specHelper: {
    options: {
      alias: ['./<%= folders.test %>/support/specHelper:specHelper'],
      browserifyOptions: {
        debug: true
      },
      watch: false
    },
    dest: '<%= folders.output %>/specHelper.js',
    src: '<%= folders.test %>/support/specHelper.js'
  },

  test: {
    options: {
      browserifyOptions: {
        debug: true
      },
      external: ['app', 'specHelper', 'templates', 'user-config'],
      transform: ['hbsfy', 'debowerify'],
      watch: false
    },
    dest: '<%= folders.output %>/tests.js',
    src: [
      '<%= folders.test %>/**/*.js',
      '!<%= folders.bower %>/ui-components/scripts/main.js',
      '!<%= folders.test %>/support/**/*.js'
    ]
  }
};

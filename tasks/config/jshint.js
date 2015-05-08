'use strict';

module.exports = {
  options: {
    jshintrc: true,
    reporter: require('jshint-stylish')
  },

  app: '<%= folders.scripts %>/**/*.js',

  node: {
    files: {
      src: ['Gruntfile.js', '<%= folders.tasks %>/**/*.js']
    }
  },

  test: {
    files: {
      src: '<%= folders.test %>/**/*.js'
    }
  }
};

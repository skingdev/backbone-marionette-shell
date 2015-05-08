'use strict';

module.exports = function(grunt, options) {
  return {
    options: {
      spawn: false
    },

    configs: {
      files: '<%= folders.configs %>/**/*.js',
      tasks: [
        'config',
        'test:keepalive:run'
      ]
    },

    css: {
      files: [
        '<%= folders.styles %>/**/*.less'
      ],
      tasks: [
        'less:development',
        'test:keepalive:run'
      ]
    },

    pages: {
      files: [
        '<%= folders.pages %>/**/*.html.template'
      ],
      tasks: [
        'html:development',
        'test:keepalive:run'
      ]
    },

    compiledJS: {
      files: '<%= folders.tmp %>/app.js',
      tasks: [
        'copy:jsForDevelopment',
        'test:keepalive:run'
      ]
    },

    testJS: {
      files: '<%= folders.test %>/**/*.js',
      tasks: [
        'browserify:specHelper',
        'browserify:test',
        'test:keepalive:run'
      ]
    },

    templates: {
      files: [
        '<%= folders.templates %>/**/*.hbs'
      ],
      tasks: [
        'handlebars'
      ]
    }
  };
};

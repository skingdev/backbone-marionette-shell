'use strict';
/* jshint node: true */

var path = require('path');

module.exports = function (grunt) {
  // autoload grunt tasks from package.json and their configurations
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'tasks/config'),
    //overridePath: path.join(process.cwd(), 'tasks/config'),
    data: {
      vendorJS: [
        './bower_components/jquery/dist/jquery.js',
        './bower_components/lodash/dist/lodash.compat.js',
        './bower_components/backbone/backbone.js',
        './bower_components/backbone-deep-model/distribution/deep-model.js',
        './bower_components/backbone.validation/dist/backbone-validation.js',
        './bower_components/marionette/lib/backbone.marionette.js',
        './bower_components/handlebars/handlebars.runtime.js',
        './bower_components/bootstrap/js/alert.js',
        './bower_components/bootstrap/js/transition.js'
      ]
    }
  });

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/**/*.js']
    }

  });

  // load project tasks from tasks/ folder
  grunt.loadTasks('tasks');
  grunt.registerTask('default', 'help');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
};

'use strict';

var _ = require('lodash');

var config = {
  env: null,

  filenames: {
    css: '<%= package.name%>-<%= package.version %>.css',
    js: '<%= package.name%>-<%= package.version %>.js',
    settings: 'settings.js',
    templates: 'templates.js',
    vendor: 'vendor.js'
  },

  folders: {
    app: 'app',
    bower: 'bower_components',
    configs: 'config',
    devBuild: '.tmp/serve',
    dist: 'dist',
    fixtures: 'app/fixtures',
    node_modules: 'node_modules',
    pages: 'app/pages',
    scripts: 'app/scripts',
    static: 'app/static',
    styles: 'app/styles',
    tasks: 'tasks',
    templates: 'app/templates',
    test: 'test',
    testBuild: '.tmp/test',
    tmp: '.tmp'
  },

  server: {
    port: 9000,
    testPort: 9001
  },

  vendorJS: []
};

module.exports = function(grunt, options) {
  grunt.registerTask('setupConfig', 'Setup default configuration.', function() {
    var concatSRC = grunt.config.get('concat.vendor.src');
    var vendorJS = grunt.config.get('vendorJS') || [];
    grunt.config.set('concat.vendor.src', concatSRC.concat(vendorJS));
    grunt.config.merge(_.merge(config, grunt.config.getRaw()));
  });
};

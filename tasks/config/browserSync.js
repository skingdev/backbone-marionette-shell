'use strict';

module.exports = {
  options: {
    open: false,
    port: '<%= server.port %>'
  },

  development: {
    options: {
      server: {
        baseDir: [
          './<%= folders.devBuild %>',
          './<%= folders.static %>'
        ]
      },
      watchTask: true
    },
    src: [
      '<%= folders.output %>/<%= filenames.css %>',
      '<%= folders.output %>/<%= filenames.js %>',
      '<%= folders.output %>/<%= filenames.settings %>',
      '<%= folders.output %>/<%= filenames.vendor %>'
    ]
  },

  dist: {
    options: {
      server: {
        baseDir: './<%= folders.dist %>'
      },
      watchTask: false
    }
  }
};

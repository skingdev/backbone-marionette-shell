'use strict';

module.exports = {
  options: {
    banner: '/*! <%= package.name %> - <%= package.version %> - ' +
      'built <%= grunt.template.today() %> */\n'
  },

  dist: {
    files: [{
      dest: '<%= folders.output %>/<%= filenames.js %>',
      src: [
        '<%= folders.tmp %>/<%= filenames.vendor %>',
        '<%= folders.tmp %>/app.js'
      ]
    }]
  }
};

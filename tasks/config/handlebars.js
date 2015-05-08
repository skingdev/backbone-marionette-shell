'use strict';

module.exports = function(grunt) {
  return {
    compile: {
      files: [{
        dest: '<%= folders.node_modules %>/<%= filenames.templates %>',
        src: '<%= folders.templates %>/**/*.hbs'
      }],
      options: {
        commonjs: true,
        namespace: false,
        processName: function(filePath) {
          return filePath.replace(grunt.config.get('folders.templates') + '/', '');
        }
      }
    }
  };
};

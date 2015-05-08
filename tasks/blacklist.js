'use strict';

module.exports = function(grunt) {
  grunt.registerTask('blacklist', 'Raises error if matched string found.', function() {
    // require that `folders.tmp` be set
    this.requiresConfig('folders.tmp');

    grunt.config.merge({
      search: {
        blacklist: {
          files: {
            src: '<%= folders.tmp %>/app.js',
          },
          options: {
            failOnMatch: true,
            logFormat: 'console',
            searchString: /mockjax|debugger/g
          }
        }
      }
    });

    grunt.loadNpmTasks('grunt-search');
    grunt.task.run('search:blacklist');
  });
};

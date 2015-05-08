'use strict';

require('colors');

var karmaRunning = false;

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', 'Run tests for the project.', function(target, command) {
    target = target || 'development';

    if (target === 'keepalive' && command === 'run') {
      if (karmaRunning) {
        grunt.task.run('karma:keepalive:run');
      } else {
        grunt.log.writeln('Karma not running, skipping tests.');
      }
    } else {
      karmaRunning = true;
      grunt.task.run([
        'setupConfig',
        'env:test',
        'output',
        'clean',
        'jshint',
        'concat:vendor',
        'config',
        'handlebars',
        'browserify:development',
        'browserify:specHelper',
        'browserify:test',
        'copy:jsForDevelopment',
        'copy:vendorJSForDevelopment',
        'karma:' + target
      ]);

      if (target === 'keepalive') {
        grunt.log.writeln('Starting the testing server at ' + 'http://127.0.0.1:9001'.cyan);
        grunt.task.run('watch');
      }
    }
  });
};

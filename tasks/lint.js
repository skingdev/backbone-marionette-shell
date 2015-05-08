'use strict';

//
// Examples:
//
//   grunt lint
//
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('lint', 'Lint the javascript files.', function() {
    var tasks = [
      'setupConfig',
      'jshint'
    ];

    grunt.log.writeln('The JavaScript is now being linted.');
    grunt.task.run(tasks);
  });
};
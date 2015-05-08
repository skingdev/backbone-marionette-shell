'use strict';

//
// Examples:
//
//   grunt serve
//   grunt config:dist serve
//   grunt config:goblin serve
//
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', 'Serve files using local web server.', function() {
    var tasks = [
      'setupConfig',
      'env:development',
      'output',
      'clean',
      'jshint',
      'copy:bootstrapFonts',
      'copy:uiComponentsFonts',
      'copy:uiComponentsImages',
      'copy:chosenImages',
      'copy:static',
      'concat:vendor',
      'config',
      'handlebars',
      'browserify:development',
      'copy:jsForDevelopment',
      'copy:vendorJSForDevelopment',
      'less:development',
      'html:development',
      'browserSync:development',
      'watch'
    ];

    grunt.log.writeln('Your tests will run automatically as files are saved.');
    grunt.task.run(tasks);
  });
};

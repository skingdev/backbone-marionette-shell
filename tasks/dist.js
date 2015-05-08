'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('dist', 'Create a static distribution of the project files.', function(target) {
    var tasks = [
      'setupConfig',
      'env:dist',
      'output',
      'clean',
      'jshint',
      'copy:bootstrapFonts',
      'copy:uiComponentsFonts',
      'copy:uiComponentsImages',
      'copy:chosenImages',
      'copy:static',
      'concat:vendor',
      'config:dist',
      'config',
      'handlebars',
      'browserify:dist',
      'blacklist',
      'uglify:dist',
      'less:dist',
      'html:dist'
    ];

    if (target === 'serve') {
      // start a webserver and keep it running
      tasks.push('browserSync:dist');
    }

    grunt.task.run(tasks);
  });

  // task alias
  grunt.registerTask('build', 'dist');
};

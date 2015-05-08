'use strict';

module.exports = function(grunt) {
  grunt.registerTask('output', 'Sets output folder based on current env', function() {
    grunt.config.requires('env', 'folders', 'folders.devBuild', 'folders.dist', 'folders.testBuild');
    var env = grunt.config.get('env');
    var folders = grunt.config.get('folders');
    if (env === 'dist') {
      folders.output = folders.dist;
    } else if (env === 'test') {
      folders.output = folders.testBuild;
    } else {
      folders.output = folders.devBuild;
    }
    grunt.log.writeln('Setting output folder to: ' + folders.output);
    grunt.config.set('folders', folders);
  });
};

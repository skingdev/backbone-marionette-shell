'use strict';

module.exports = function(grunt) {
  grunt.registerTask('config', 'Creates settings.js file based on passed config file or env', function(target) {
    var configFilename = grunt.config.get('configFilename');

    if (target) {
      if (configFilename) {
        grunt.log.writeln('Config already set to ' + configFilename + '. Skipping.');
      } else {
        grunt.log.writeln('Setting config filename to ' + configFilename);
        grunt.config('configFilename', target);
      }
    } else {
      grunt.config('configFilename', grunt.config('configFilename') || 'development');
      grunt.log.writeln('Creating settings file from config: ' + grunt.config('configFilename'));
      grunt.task.run('browserify:settings');
    }
  });
};

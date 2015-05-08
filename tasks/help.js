'use strict';

require('colors');

module.exports = function(grunt) {
  grunt.registerTask('help', 'Explain the Grunt tasks available.', function() {
    grunt.log.writeln('Available tasks:\n');

    grunt.log.writeln('config:CONFIG_NAME [other_tasks]'.cyan + '\nUses the specified config ' +
      'file for the remainder of the following Grunt tasks. For example, ' +
      'running ' + 'grunt config:edgecase serve'.yellow + ' would run the ' +
      'serve'.yellow + ' task but use the edgecase config file.\n');
    grunt.log.writeln('dist'.cyan + '\nCreates a production version of the ' +
      'application in the "dist" folder.\n');
    grunt.log.writeln('dist:serve'.cyan + '\nCreates a production version of ' +
      'the application in the "dist" folder and then starts a webserver to view ' +
      'the files.\n');
    grunt.log.writeln('lint'.cyan + '\nLints all of the JavaScript files ' +
      'utilizing the settings in the .jshintrc file.\n');
    grunt.log.writeln('serve'.cyan + '\nStarts a local web server to run the ' +
      'application in development mode.\n');
  });
};

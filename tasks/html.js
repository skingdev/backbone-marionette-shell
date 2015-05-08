'use strict';

require('colors');

module.exports = function(grunt) {
  grunt.registerTask('html', function() {
    var input = grunt.template.process('<%= folders.pages %>/index.html.template');
    var output = grunt.template.process('<%= folders.output %>/index.html');

    grunt.log.writeln('Reading ' + input.cyan + ' file...');
    var htmlContent = grunt.template.process(grunt.file.read(input));

    grunt.log.writeln('Outputting generated html to ' + output.cyan);
    grunt.file.write(output, htmlContent);
  });
};

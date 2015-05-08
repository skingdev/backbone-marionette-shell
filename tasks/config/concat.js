'use strict';

module.exports = {
  vendor: {
    options: {
      nonull: true,
      sourceMap: false
    },
    dest: '<%= folders.tmp %>/<%= filenames.vendor %>',
    src: [
      // default libraries
    ]
  }
};

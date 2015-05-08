'use strict';

module.exports = {
  bootstrapFonts: {
    files: [{
      expand: true,
      cwd: '<%= folders.bower %>/bootstrap',
      dest: '<%= folders.output %>',
      src: 'fonts/**'
    }]
  },

  uiComponentsFonts: {
    files: [{
      expand: true,
      cwd: '<%= folders.bower %>/ui-components/dist',
      dest: '<%= folders.output %>',
      src: 'fonts/**'
    }]
  },

  uiComponentsImages: {
    files: [{
      expand: true,
      cwd: '<%= folders.bower %>/ui-components/dist',
      dest: '<%= folders.output %>',
      src: 'images/**'
    }]
  },

  chosenImages: {
    files: [{
      expand: true,
      cwd: '<%= folders.bower %>/chosen-bootstrap',
      dest: '<%= folders.output %>/images',
      src: ['chosen-sprite.png', 'chosen-sprite@2x.png']
    }]
  },

  jsForDevelopment: {
    files: [{
      dest: '<%= folders.output %>/<%= filenames.js %>',
      src: '<%= folders.tmp %>/app.js'
    }]
  },

  static: {
    files: [{
      expand: true,
      cwd: '<%= folders.static %>',
      dest: '<%= folders.output %>',
      src: '**'
    }]
  },

  vendorJSForDevelopment: {
    files: [{
      dest: '<%= folders.output %>/<%= filenames.vendor %>',
      src: '<%= folders.tmp %>/<%= filenames.vendor %>'
    }]
  }
};

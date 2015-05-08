'use strict';

module.exports = function() {
  this.templates = require('templates')(Handlebars);

  Marionette.TemplateCache.prototype.compileTemplate = function(templatePath) {
    return Application.templates[templatePath];
  };

  Marionette.TemplateCache.prototype.loadTemplate = function(templateID) {
    return templateID + '.hbs';
  };
};

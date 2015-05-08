'use strict';

var ApplicationRouter = require('./routers/application');
var config = require('./config');

module.exports = Backbone.Marionette.Application.extend({
  routers: null,

  constructor: function(options) {
    options = options || {};
    options.routers = [];
    Backbone.Marionette.Application.prototype.constructor.call(this, options);

    this.on('start', function() {
      this.history.start({
        hashChange: true,
        pushState: false
      });
    });

    this.addInitializer(function() {
      this.addRegions({
        content: '[data-region=content]',
        footer: '[data-region=footer]',
        header: '[data-region=header]',
        notifications: '[data-region=notifications]',
        modal: '[data-region=modal]'
      });

      this.history = Backbone.history;
      this.config = config;
      this.routers.push(new ApplicationRouter());
    });

    this.addInitializer(require('./initializers/templates'));
  },

  stop: function() {
    this.destroyRegions();
    Backbone.history.stop();
  }
});

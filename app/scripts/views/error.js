'use strict';

var config = require('../config');

module.exports = Backbone.Marionette.ItemView.extend({
  template: 'error',

  serializeData: function() {
    return {
      defaultUrl: config.defaultRoute
    };
  }
});

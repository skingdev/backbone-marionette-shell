'use strict';

var BaseController = require('./base');
var ErrorView = require('../views/error.js');
var IndexView = require('../views/index');
var config = require('../config');

module.exports = BaseController.extend({

  defaultRoute: function() {
    Backbone.history.navigate(config.defaultRoute);
    Application.content.show(new IndexView());
  },

  error: function() {
    Application.content.show(new ErrorView());
  }
});

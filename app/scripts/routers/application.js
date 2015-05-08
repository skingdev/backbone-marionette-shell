'use strict';

var ApplicationController = require('../controllers/application');

module.exports = Marionette.AppRouter.extend({
  controller: new ApplicationController(),
  appRoutes: {
    'error': 'error',
    '': 'defaultRoute'
  }
});

'use strict';

import angular from 'angular';

import 'angular-ui-router';
import './templates';
//import './services';
import './directives';

import './modules/home'

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  /*'app.services',*/
  'app.directives',
  'app.home'
];


// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', require('./constants'));

angular.module('app').config(require('./on_config'));

angular.module('app').run(require('./on_run'));

angular.bootstrap(document, ['app']);
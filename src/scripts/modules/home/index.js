'use strict';

import angular from 'angular';
const bulk = require('bulk-require');

const homeModule = angular.module('app.home', []);

const controllers = bulk(__dirname, ['./**/!(*index|*.spec).js']);

Object.keys(controllers).forEach((key) => {
  let item = controllers[key];

  controllersModule.controller(item.name, item.fn);
});

export default controllersModule;
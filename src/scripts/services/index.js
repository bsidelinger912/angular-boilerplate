'use strict';

import angular from 'angular';

import example from './example';

const servicesModule = angular.module('app.services', []);

servicesModule.service('exampleService', example);

export default servicesModule;

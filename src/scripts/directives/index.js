'use strict';

import angular from 'angular';


import example from './example';



const directivesModule = angular.module('app.directives', []);

directivesModule.directive('exampleDirective', example);

export default directivesModule;
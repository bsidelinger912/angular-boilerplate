'use strict';

import angular from 'angular';
import controller from './homeController';

function stateConfig(){
	console.log('state config');
}

const homeModule = angular.module('app.home', [])
	.controller('Home', controller)
	.run(stateConfig);
	

export default homeModule;
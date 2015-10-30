'use strict';

import angular from 'angular';
//import controller from './home.controller'

function HomeController() {

  // ViewModel
  const vm = this;

  vm.title = 'Title';
  vm.hello = 'hello world';
}

const homeModule = angular.module('app.home', [])
	.controller('Home', HomeController);


export default homeModule;
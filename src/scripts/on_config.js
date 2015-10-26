'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'Home as home',
    templateUrl: 'modules/home/home.html',
    title: 'Home'
  });

  $urlRouterProvider.otherwise('/');
}

export default OnConfig;
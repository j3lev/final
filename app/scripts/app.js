'use strict';

/**
 * @ngdoc overview
 * @name finalApp
 * @description
 * # finalApp
 *
 * Main module of the application.
 */
angular
  .module('finalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

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
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'mgcrea.ngStrap',
    'naif.base64'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/edit/new', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });

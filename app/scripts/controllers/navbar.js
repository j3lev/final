'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:NavbarCtrl
 * @description
 * # NavbarCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('NavbarCtrl', function ($scope, $location, User) {
    $scope.user = User;

    $scope.logout = function () {
      User.logout();
      $location.path('/login');
    };

  });

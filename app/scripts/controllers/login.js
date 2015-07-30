'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('LoginCtrl', function ($scope, User, $location) {

    $scope.isLoggedin = User.isLoggedin();

    if ($scope.isLoggedin) {
      $location.path('/manage');
    }

    $scope.loginUser = function (user, pass) {
      User.login(user, pass);
      if (User.isLoggedin()) {
        $location.path('/manage');
      } else {
        $scope.loginFail = true;
      }
    }
  });

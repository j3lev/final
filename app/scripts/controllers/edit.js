'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('EditCtrl', function ($scope, editItem, $location) {

    $scope.isLoading = true;
    $scope.item = editItem.get();

    $scope.save = function (editForm) {
      if (!$scope.item.id) {
        $scope.item.$save(function () {
          $scope.isLoading = false;
          $location.path('/manage');
        }, function () {
          $scope.isLoading = false;
          $scope.isError = true;
        });
      } else {
        $scope.item.$update(function (res) {
          $scope.isLoading = false;
          $location.path('/manage');
        }, function () {
          $scope.isLoading = false;
          $scope.isError = true;
        });
      }
    };

  });

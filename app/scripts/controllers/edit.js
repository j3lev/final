'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('EditCtrl', function ($scope, editItem, $location, $modal) {

    $scope.isLoading = true;
    $scope.item = editItem.get();

    if (!$scope.item) {
      $location.path('/manage');
    }

    $scope.save = function (editForm) {
      if (editForm.$valid) {
        var filetype = $scope.uploadedImg ? $scope.uploadedImg.filetype : '';
        if (!$scope.item.img || $scope.uploadedImg) {
          $scope.item.img = filetype ? 'data:' + filetype + ';base64,' + $scope.uploadedImg.base64 : '';
        }
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
      }
    };

    $scope.leave = function () {
      $scope.deleteModal.hide();
      editItem.set(null);
      $location.path('/manage');
    };

    $scope.openDeleteModal = function () {
      $scope.deleteModal = $modal({
        html: true,
        templateUrl: '/deleteModal.html',
        show: true,
        content: '<p>You will be discarding any unsaved changes.</p>',
        scope: $scope
      });
    };

  });

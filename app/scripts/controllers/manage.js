'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('ManageCtrl', function ($scope, $http, Item, editItem, $location, $modal) {
    $scope.items = [];
    $scope.isLoaded = false;
    $scope.isBusy = false;
    $scope.deleteItem = {};

    Item.query(function (res) {
      $scope.isLoaded = true;
      $scope.items = res;
    }, function () {
      $scope.isLoaded = true;
      $scope.isLoadError = true;
    });

    $scope.addNew = function () {
      var newItem = new Item({
        name: '',
        type: '',
        desc: '',
        img: '',
        company: '',
        stock: 0
      });
      editItem.set(newItem);
      $location.path('/edit/new');
    };

    $scope.edit = function (item) {
      editItem.set(item);
      $location.path('/edit');
    };

    $scope.leave = function () {
      $scope.deleteModal.hide();
      $scope.isBusy = true;
      for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].id === $scope.deleteItem.id) {
          $scope.items.splice(i, 1);
          break;
        }
      }
      $scope.deleteItem.$remove(function () {
        $scope.isBusy = false;
      });

    };


    $scope.deleteItem = function (item) {
      $scope.deleteItem = item;
      $scope.deleteModal = $modal({
        html: true,
        templateUrl: 'views/deleteModal.html',
        show: true,
        content: '<p>You will be permanently deleting ' + item.name + ' from your inventory.</p>',
        scope: $scope
      });
    };

  });

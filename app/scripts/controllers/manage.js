'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('ManageCtrl', function ($scope, $http, Item, editItem, $location) {
    $scope.items = [];
    $scope.isLoaded = false;

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


  });

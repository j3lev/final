'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('ManageCtrl', function ($scope, $http, User, Item, editItem, $location, $modal) {

    if (!User.isLoggedin()) {
      $location.path('/login');
    }

    $scope.items = [];
    $scope.companies = [];
    $scope.types = [];
    $scope.isLoaded = false;
    $scope.isBusy = false;
    $scope.deleteObj = {};

    Item.query(function (res) {
      $scope.isLoaded = true;
      $scope.items = res;
      for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.companies.indexOf($scope.items[i].company) === -1) {
          $scope.companies.push($scope.items[i].company);
        }
        if ($scope.types.indexOf($scope.items[i].type) === -1) {
          $scope.types.push($scope.items[i].type);
        }
      }
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

    $scope.leave = function (notSure) {
      $scope.deleteModal.hide();
      if (!notSure) {
        $scope.isBusy = true;
        for (var i = 0; i < $scope.items.length; i++) {
          if ($scope.items[i].id === $scope.deleteObj.id) {
            $scope.items.splice(i, 1);
            break;
          }
        }
        $scope.deleteObj.$remove(function () {
          $scope.isBusy = false;
        });
      }
    };

    $scope.resetFilters = function () {
      $scope.selectedCompany = '';
      $scope.selectedType = '';
    };

    $scope.deleteItem = function (item) {
      $scope.deleteObj = item;
      $scope.deleteModal = $modal({
        html: true,
        templateUrl: '/deleteModal.html',
        show: true,
        content: '<p>You will be permanently deleting <strong>' + item.name + '</strong> from your inventory.</p>',
        scope: $scope
      });
    };

  });

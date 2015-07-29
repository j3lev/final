'use strict';

/**
 * @ngdoc service
 * @name finalApp.editItem
 * @description
 * # editItem
 * Factory in the finalApp.
 */
angular.module('finalApp')
  .factory('editItem', function () {

    var editObj = null;

    return {
      set: function (item) {
        editObj = item;
      },
      get: function () {
        return editObj;
      }
    };
  });

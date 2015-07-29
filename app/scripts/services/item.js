'use strict';

/**
 * @ngdoc service
 * @name finalApp.item
 * @description
 * # item
 * Factory in the finalApp.
 */
angular.module('finalApp')
  .factory('Item', function ($resource, $location) {
    var apiUrl = $location.host() === 'localhost' ? 'http://localhost:1337' : '';

    return $resource(apiUrl + '/inventory/:id', {id: '@id'}, {
        update: {
          method: 'PUT'
        }
      });
  });

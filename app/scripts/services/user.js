'use strict';

/**
 * @ngdoc service
 * @name finalApp.User
 * @description
 * # User
 * Service in the finalApp.
 */
angular.module('finalApp')
  .service('User', function () {
    var firstName = 'Joey';
    var lastName = 'Levenson';
    var email = 'hello@fakeemail.com';
    var user = 'admin';
    var pw = 'admin';
    var isLoggedIn = false;

    return {
      isLoggedin: function () {
        return isLoggedIn;
      },
      login: function (username, password) {
        isLoggedIn = username === user && password === pw;
        return isLoggedIn;
      },
      logout: function () {
        isLoggedIn = false;
      }
    }
  });

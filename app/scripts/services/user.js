'use strict';

/**
 * @ngdoc service
 * @name finalApp.User
 * @description
 * # User
 * Service in the finalApp.
 */
angular.module('finalApp')
  .service('User', function ($window) {
    var firstName = 'Joey';
    var lastName = 'Levenson';
    var email = 'hello@fakeemail.com';
    var user = 'admin';
    var pw = 'admin';
    var isLoggedIn = Boolean($window.localStorage.getItem('loggedin'));

    return {
      isLoggedin: function () {
        return isLoggedIn;
      },
      login: function (username, password) {
        isLoggedIn = username === user && password === pw;
        if (isLoggedIn) {
          $window.localStorage.setItem('loggedin', 'true');
        }
        return isLoggedIn;
      },
      logout: function () {
        $window.localStorage.removeItem('loggedin');
        isLoggedIn = false;
      }
    }
  });

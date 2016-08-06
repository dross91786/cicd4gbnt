'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the clientApp
 */

angular.module('clientApp')
  .controller('UsersCtrl', function ($scope, User) {
    $scope.users = User.getList().$object;
  });

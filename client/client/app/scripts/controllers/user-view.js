'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserViewCtrl
 * @description
 * # UserViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserViewCtrl', function ($scope,$routeParams, User) {
  $scope.viewUser = true;
  $scope.user = User.one($routeParams.id).get().$object;
});

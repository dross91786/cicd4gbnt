'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserDeleteCtrl
 * @description
 * # UserDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserDeleteCtrl', function ($scope, $routeParams, User, $location) {
  $scope.user = User.one($routeParams.id).get().$object;
  $scope.deleteUser = function() {
    $scope.user.remove().then(function() {
      $location.path('/users');
    });
  };
  $scope.back = function() {
    $location.path('/users/' + $routeParams.id);
  };
});

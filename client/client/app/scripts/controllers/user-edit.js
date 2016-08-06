'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UserEditCtrl
 * @description
 * # UserEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UserEditCtrl', function ($scope,$routeParams, User, $location) {
  $scope.editUser = true;
  $scope.user = {};
  User.one($routeParams.id).get().then(function(user) {
    $scope.user = user;
    $scope.saveUser = function() {
      $scope.user.save().then(function() {
        $location.path('/user/' + $routeParams.id);
      });
    };
  });
});

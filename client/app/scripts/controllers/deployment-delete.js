'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeploymentDeleteCtrl
 * @description
 * # DeploymentDeleteCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('DeploymentDeleteCtrl', function ($scope, $routeParams, Deployment, $location) {
   $scope.deployment = Deployment.one($routeParams.id).get().$object;
   $scope.deleteDeployment = function() {
     $scope.deployment.remove().then(function() {
       $location.path('/deployments');
     });
   };
   $scope.back = function() {
     $location.path('/deployments/' + $routeParams.id);
   };
 });

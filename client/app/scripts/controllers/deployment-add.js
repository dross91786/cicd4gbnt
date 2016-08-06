'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeploymentAddCtrl
 * @description
 * # DeploymentAddCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('DeploymentAddCtrl', function ($scope, Deployment, $location) {
   $scope.deployment = {};
   $scope.saveDeployment = function() {
     Deployment.post($scope.deployment).then(function() {
       $location.path('/deployments');
     });
   };
 });

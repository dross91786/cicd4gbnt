'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeploymentEditCtrl
 * @description
 * # DeploymentEditCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('DeploymentEditCtrl', function ($scope,$routeParams, Deployment, $location) {
   $scope.editDeployment = true;
   $scope.deployment = {};
   Deployment.one($routeParams.id).get().then(function(deployment) {
     $scope.deployment = deployment;
     $scope.saveDeployment = function() {
       $scope.deployment.save().then(function() {
         $location.path('/deployment/' + $routeParams.id);
       });
     };
   });
 });

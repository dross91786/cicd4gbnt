'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeploymentViewCtrl
 * @description
 * # DeploymentViewCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('DeploymentViewCtrl', function ($scope,$routeParams, Deployment) {
   $scope.viewDeployment = true;
   $scope.deployment = Deployment.one($routeParams.id).get().$object;
 });

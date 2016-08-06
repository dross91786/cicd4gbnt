'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DeploymentsCtrl
 * @description
 * # DeploymentsCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('DeploymentsCtrl', function ($scope, Deployment) {
     $scope.deployments = Deployment.getList().$object;
   });

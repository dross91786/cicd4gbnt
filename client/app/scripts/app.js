'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl('http://localhost:7225');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
      })
      .when('/create/user', {
        templateUrl: 'views/user-add.html',
        controller: 'UserAddCtrl',
      })
      .when('/user/:id', {
        templateUrl: 'views/user-view.html',
        controller: 'UserViewCtrl',
      })
      .when('/user/:id/delete', {
        templateUrl: 'views/user-delete.html',
        controller: 'UserDeleteCtrl',
      })
      .when('/user/:id/edit', {
        templateUrl: 'views/user-edit.html',
        controller: 'UserEditCtrl',
      })
      .when('/deployments', {
        templateUrl: 'views/deployments.html',
        controller: 'DeploymentsCtrl',
      })
      .when('/create/deployment', {
        templateUrl: 'views/deployment-add.html',
        controller: 'DeploymentAddCtrl',
        controllerAs: 'deploymentAdd'
      })
      .when('/deployment/:id', {
        templateUrl: 'views/deployment-view.html',
        controller: 'DeploymentViewCtrl',
        controllerAs: 'deploymentView'
      })
      .when('/deployment/:id/delete', {
        templateUrl: 'views/deployment-delete.html',
        controller: 'DeploymentDeleteCtrl',
        controllerAs: 'deploymentDelete'
      })
      .when('/deployment/:id/edit', {
        templateUrl: 'views/deployment-edit.html',
        controller: 'DeploymentEditCtrl',
        controllerAs: 'deploymentEdit'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.factory('UserRestangular', function(Restangular) {
  return Restangular.withConfig(function(RestangularConfigurer) {
    RestangularConfigurer.setRestangularFields({
      id: '_id'
    });
  });
})
.factory('User', function(UserRestangular) {
  return UserRestangular.service('user');
})
.factory('Deployment', function(UserRestangular) {
  return UserRestangular.service('deployment');
});

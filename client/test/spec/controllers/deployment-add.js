'use strict';

describe('Controller: DeploymentAddCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeploymentAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeploymentAddCtrl = $controller('DeploymentAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeploymentAddCtrl.awesomeThings.length).toBe(3);
  });
});

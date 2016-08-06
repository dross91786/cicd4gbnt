'use strict';

describe('Controller: DeploymentEditCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeploymentEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeploymentEditCtrl = $controller('DeploymentEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeploymentEditCtrl.awesomeThings.length).toBe(3);
  });
});

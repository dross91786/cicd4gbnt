'use strict';

describe('Controller: DeploymentDeleteCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var DeploymentDeleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeploymentDeleteCtrl = $controller('DeploymentDeleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeploymentDeleteCtrl.awesomeThings.length).toBe(3);
  });
});

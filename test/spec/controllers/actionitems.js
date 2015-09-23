'use strict';

describe('Controller: ActionitemsCtrl', function () {

  // load the controller's module
  beforeEach(module('meetingsApp'));

  var ActionitemsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ActionitemsCtrl = $controller('ActionitemsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ActionitemsCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: MeetingsCtrl', function () {

  // load the controller's module
  beforeEach(module('meetingsApp'));

  var MeetingsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetingsCtrl = $controller('MeetingsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MeetingsCtrl.awesomeThings.length).toBe(3);
  });
});

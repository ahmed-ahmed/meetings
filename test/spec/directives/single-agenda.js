'use strict';

describe('Directive: singleAgenda', function () {

  // load the directive's module
  beforeEach(module('meetingsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<single-agenda></single-agenda>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the singleAgenda directive');
  }));
});

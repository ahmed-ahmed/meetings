'use strict';

/**
 * @ngdoc function
 * @name meetingsApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the meetingsApp
 */
angular.module('meetingsApp')
  .controller('MeetingsCtrl', function (service,$scope) {

  	$scope.meetings = [];

	service.getMeetings().then(function(response){
		$scope.meetings = response.data
	});


  });

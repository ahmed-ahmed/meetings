'use strict';

/**
 * @ngdoc function
 * @name meetingsApp.controller:MeetingsCtrl
 * @description
 * # MeetingsCtrl
 * Controller of the meetingsApp
 */
angular.module('meetingsApp')
  .controller('MeetingsCtrl', function (service) {

  	var meetings = [];

	service.getMeetings().then(function(response){
		meetings = response.data
	});


  });

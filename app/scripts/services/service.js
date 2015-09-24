'use strict';

/**
 * @ngdoc service
 * @name meetingsApp.service
 * @description
 * # service
 * Service in the meetingsApp.
 */
angular.module('meetingsApp')
  .service('service', function ($q, data) {
  	  var service = {};

    service.getMeetings = function() {
    	var deferred = $q.defer();
        deferred.resolve({data: data.meetingsList});
        return deferred.promise;
    }


    return service;
  });

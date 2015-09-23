'use strict';

/**
 * @ngdoc service
 * @name meetingsApp.service
 * @description
 * # service
 * Service in the meetingsApp.
 */
angular.module('meetingsApp')
  .service('service', function ($q) {
  	var meeting = {
  		subject: 'A QUICK LESSMEETING "MEETING PAGE" TUTORIAL',
  		date: '2015/12/15'
  		startTime: '1:00 PM'
  		endTime: '1:30 PM'
  		duration: 30
  		location: '',
  		attendees: [{
  			name: 'ahmed',
  			email: 'a@a.cc'
  		}]
  		meetingAgenda : [{
  			description: 'create a new unit tests',
  			time: 20,
  			subitems: {
  				description: 'create a new unit tests- part 1',
  			}
  		}],
  		message: 'Please you need to attend this super important!'
  	};

	var meeting2 = {
  		subject: 'A QUICK LESSMEETING "MEETING PAGE" TUTORIAL',
  		date: '2015/12/15'
  		startTime: '1:00 PM'
  		endTime: '1:30 PM'
  		duration: 30
  		location: '',
  		attendees: [{
  			name: 'ahmed',
  			email: 'a@a.cc'
  		}]
  		meetingAgenda : [{
  			description: 'create a new unit tests',
  			time: 20,
  			subitems: {
  				description: 'create a new unit tests- part 1',
  			}
  		}],
  		message: 'Please you need to attend this super important!'
  	};

    var meetings = [meeting1, meeting2];


    service.getMeetings = function() {
    	var deferred = $q.defer();
        deferred.resolve({data: meetings});
        return deferred.promise;
    }

  });

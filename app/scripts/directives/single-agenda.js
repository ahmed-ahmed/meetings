'use strict';

/**
 * @ngdoc directive
 * @name meetingsApp.directive:singleAgenda
 * @description
 * # singleAgenda
 */
angular.module('meetingsApp')
  .directive('singleAgenda', function () {
    return {
    	scope: {
    		agenda: '='
    	},
    	templateUrl: '/scripts/directives/single-agenda.html',
    	controller: function($scope) {
    		$scope.addItem = function (){
    			$scope.agenda.items.push({type: 'keypoint', subject: $scope.newItem});
    			$scope.newItem = '';
    			//to do set focus on the text box
    		}


    	},
    	restrict: 'E',
    	link: function postLink(scope, element, attrs) {
    		//element.text('this is the singleAgenda directive');
	    }
    };
  });

'use strict';

/**
 * @ngdoc overview
 * @name meetingsApp
 * @description
 * # meetingsApp
 *
 * Main module of the application.
 */
angular
  .module('meetingsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.uploader'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/teams', {
        templateUrl: 'views/teams.html',
        controller: 'TeamsCtrl',
        controllerAs: 'teams'
      })
      .when('/action-items', {
        templateUrl: 'views/action-items.html',
        controller: 'ActionItemsCtrl',
        controllerAs: 'actionItems'
      })
      .when('/meetings', {
        templateUrl: 'views/meetings.html',
        controller: 'MeetingsCtrl',
        controllerAs: 'meetings'
      })
      .when('/meeting', {
        templateUrl: 'views/meeting.html',
        controller: 'MeetingCtrl',
        controllerAs: 'meeting'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

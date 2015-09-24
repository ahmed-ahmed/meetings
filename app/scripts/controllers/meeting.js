'use strict';

/**
 * @ngdoc function
 * @name meetingsApp.controller:MeetingCtrl
 * @description
 * # MeetingCtrl
 * Controller of the meetingsApp
 */
angular.module('meetingsApp')
  .controller('MeetingCtrl', function ($scope, uiUploader) {


  	$scope.agendas = [
  		{
  			subject: 'This is Agenda subject by code',
        plannedDuration: 25,
  			items: [
  				{type: 'keypoint', subject: 'This is a key item'}
  			],

        
  		},
  		{
  			subject: 'This is Agenda subject 2',
        plannedDuration: 10,
  			items: [
  				{type: 'keypoint', subject: 'This is a key item'}
  			]

  		}
  	]

    $scope.participants = [
        {name: 'Ahmed Ahmed', email: 'aah@isc.com', avatar: ''},
        {name: 'Ali Ahmed', email: 'aah@isc.com', avatar: ''},
        {name: 'Ahmed Ali', email: 'aah@isc.com', avatar: ''}
        ]

    $scope.goals = [
      'To gain a bigger market share',
      'To have a better view in here',
    ];

    $scope.histories = [
      {subject : 'the clash of the clans', date: ''}
    ]

    $scope.documents = [
      {name: 'green paper', type: 'image', extension: '.jpg'}
    ];



    $scope.btn_remove = function(file) {
        $log.info('deleting=' + file);
        uiUploader.removeFile(file);
    };
    $scope.btn_clean = function() {
        uiUploader.removeAll();
    };
    $scope.btn_upload = function() {
        $log.info('uploading...');
        uiUploader.startUpload({
            url: 'http://realtica.org/ng-uploader/demo.html',
            concurrency: 2,
            onProgress: function(file) {
                $log.info(file.name + '=' + file.humanSize);
                $scope.$apply();
            },
            onCompleted: function(file, response) {
                $log.info(file + 'response' + response);
            }
        });
    };
    $scope.files = [];
    var element = document.getElementById('file1');
    element.addEventListener('change', function(e) {
        var files = e.target.files;
        uiUploader.addFiles(files);
        $scope.files = uiUploader.getFiles();
        $scope.$apply();
    });

  
  });

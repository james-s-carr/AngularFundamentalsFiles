'use strict';

eventsApp.controller('EventCtrl',
 function EventCtrl($scope) {

     $scope.sortOrder = '-upVoteCount';
     $scope.snippet = '<span>hi there</span>'
     $scope.event = {
         name: 'Test Event',
         date: '1/1/2016',
         time: '11 am',
         location: {
             address: 'At-Bristol',
             city: 'Bristol',
             country: 'UK'
         },
         imageUrl: '',
         sessions: [
             {
                 name: 'Session 1',
                 duration: 1,
                 upVoteCount: 0
             },
             {
                 name: 'Session 2',
                 duration: 2,
                 upVoteCount: 0
             },
             {
                 name: 'Session 3',
                 duration: 4,
                 upVoteCount: 0
             }
         ]
     }

     $scope.upVoteSession = function(session) {
         session.upVoteCount++;
     };

     $scope.downVoteSession = function(session) {
         session.upVoteCount--;
     }
 }
);


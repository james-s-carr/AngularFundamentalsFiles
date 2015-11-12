'use strict';

eventsApp.controller('EventCtrl',
 function EventCtrl($scope) {

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
         sessions: [
             {
                 name: 'Session 1',
                 upVoteCount: 0
             },
             {
                 name: 'Session 2',
                 upVoteCount: 0
             },
             {
                 name: 'Session 3',
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


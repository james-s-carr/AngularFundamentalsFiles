'use strict';

eventsApp.controller('EventCtrl',
    function EventCtrl($scope, eventData) {

        $scope.sortOrder = 'name';
        eventData.getEvent()
            .$promise
            .then(
                function (event) {
                    $scope.event = event;
                })
            .catch(
                function (response) {
                    console.log(response)
                }
            );

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        }
    }
);


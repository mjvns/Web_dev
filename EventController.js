'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.sortorder = 'name';
        $scope.buttonValue = true;
        $scope.mystyle = {color:'red'};
        $scope.boolValue = true;
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.myclass = "blue";
        $scope.event = {
            name: "Angular Boot Camp",
            date: "21/04/2018",
            time: "03:50 pm",
            location: {
                address: 'Google headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorname: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this duration you will learn the ins and outs of the directives!',
                    upVotecount: 0
                },
                {
                    name: 'Scopes for fun and Profit',
                    creatorname: 'Andrew Simon',
                    duration: '30 mins',
                    level: 'Intermediate',
                    abstract: 'In this session you will learn about the angular scopes!',
                    upVotecount: 0
                },
                {
                    name: 'Well behaved Controllers',
                    creatorname: 'Steve Valor',
                    duration: '1hr 30mins',
                    level: 'Advanced',
                    abstract: 'This session will deal about the angular routing!',
                    upVotecount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVotecount++;
        }
        $scope.downVoteSession = function (session) {
            session.upVotecount--;
        }
    });

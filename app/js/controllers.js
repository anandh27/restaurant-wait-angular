'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$scope', function($scope) {
    $scope.parties = [];

    $scope.party = {name: '', phone: '', size: ''};

    $scope.saveParty = function() {
      $scope.parties.push($scope.party);
      $scope.party = {name: '', phone: '', size: ''};
    };
  }]);


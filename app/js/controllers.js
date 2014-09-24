'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase) {
    var partiesRef = new Firebase('https://waitandeat-tomb.firebaseio.com/');

    $scope.parties = $firebase(partiesRef);

    $scope.newParty = {name: '', phone: '', size: ''};

    $scope.saveParty = function() {
      $scope.parties.$add($scope.newParty);
      $scope.newParty = {name: '', phone: '', size: ''};
    };
  }]);


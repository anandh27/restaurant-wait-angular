'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase) {
    // Connect scope.parties to live firebase data
    var partiesRef = new Firebase('https://waitandeat-tomb.firebaseio.com/parties');

    $scope.parties = $firebase(partiesRef);

    // Object to store data from the waitlist form
    $scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};

    // Function to save a new party to the waitlist
    $scope.saveParty = function() {
      $scope.parties.$add($scope.newParty);
      $scope.newParty = {name: '', phone: '', size: '', done: false, notified: 'No'};
    };

    //Function to send text message to a party.
    $scope.sendTextMessage = function(party) {
      var textMessageRef = new Firebase('https://waitandeat-tomb.firebaseio.com/textMessages');
      var textMessages = $firebase(textMessageRef);
      var newTextMessage = {
        phoneNumber: party.phone,
        size: party.size,
        name: party.name
      };
      textMessages.$add(newTextMessage);
      // Code here for notified
      party.notified = 'Yes';
      $scope.parties.$save(party.$id);
    };
  }]);


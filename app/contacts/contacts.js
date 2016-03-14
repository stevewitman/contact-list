'use strict';

angular.module('myApp.contacts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'contacts/contacts.html',
    controller: 'ContactsCtrl'
  });
}])

.controller('ContactsCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  var ref = new Firebase('https://contactlist-sw.firebaseio.com/');

  $scope.contacts = $firebaseArray(ref);

  $scope.addContact = function() {
    $scope.contacts.$add({
      name: $scope.name,
      email: $scope.email,
      phone: $scope.phone
    }).then(function(ref) {
      var id = ref.key();

      $scope.name = '';
      $scope.email = '';
      $scope.phone = '';
    });
  }
}]);

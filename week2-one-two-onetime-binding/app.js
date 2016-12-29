(function(){
  'use strict';

  angular.module('BindingExamples', [])
  .controller('BindingController', bindingController);

  bindingController.$inject = ['$scope'];

  function bindingController($scope) {
    $scope.firstName = "Deepak";

    $scope.showNumberOfWatchers = function() {
      console.log("# of watchers:", $scope.$$watchersCount);
    }

    $scope.showFirstName = function() {
      console.log("First Name:", $scope.firstName);
    }

    $scope.showFullName = function() {
      console.log("Full Name:", $scope.fullName);
    }

    $scope.setFullName = function() {
      $scope.fullName = $scope.firstName + " Champatiray";
    }
  }
})();

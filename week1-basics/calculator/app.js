(function(){
  'use strict';

  angular.module("calculator", [])
  .controller("calculatorController", function($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.calculateNameValue = function() {
      $scope.totalValue = 0;
      for(var i=0; i<$scope.name.length; i++) {
        $scope.totalValue += $scope.name.charCodeAt(i);
      }
    }
  });
})();

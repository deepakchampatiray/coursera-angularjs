(function(){
  'use strict';

  angular.module("BuiltinFilters", [])
  .controller("BuiltinFiltersController", builtinFiltersController);

  builtinFiltersController.$inject = ['$scope', '$filter'];

  function builtinFiltersController($scope, $filter){
    $scope.name = "deepak";

    $scope.getSurname = function() {
      return "Champatiray";
    }

    $scope.salary = 70000;
    $scope.formattedSalary = $filter('currency')($scope.salary, 'Rs.', 2);
  }
})();

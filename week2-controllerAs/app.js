(function(){
  'use strict';

  angular.module('ControllerAsApp', [])
  .controller("ParentController", ParentController)
  .controller("ChildController", ChildController)
  .controller("ParentController2", ParentController2)
  .controller("ChildController2", ChildController2);

  ParentController.$inject = ['$scope'];
  ChildController.$inject = ['$scope'];
  ChildController2.$inject = ['$scope'];

  function ParentController($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.nestedValue = 2;
  }

  function ChildController($scope) {
    console.log("CHILD - parentValue", $scope.parentValue);
    console.log("CHILD - $scope", $scope);

    console.log("Parent Controller : ", $scope.$parent);
  }

  function ParentController2() {
    var parent = this;
    parent.value = 1;
  }

  function ChildController2($scope) {
    var child = this;
    child.value = 5;
    console.log("Child Scope:", $scope, "Child ", this);
  }
})();

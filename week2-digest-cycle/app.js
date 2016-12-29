(function(){
  'use strict';

  angular.module('CounterApp', [])
  .controller('CounterController', counterController);

  counterController.$inject = ['$scope'];

  function counterController($scope) {
    $scope.counter = 0;

    $scope.showWatchers = function() {
      console.log('# of watchers :', $scope.$$watchersCount);
    }

    $scope.increment = function() {
      $scope.counter++;
    }

    $scope.$watch('counter', function(newVal, oldVal) {
      console.log('New Val:', newVal, ', Old Val:', oldVal);
    })
  }
})();

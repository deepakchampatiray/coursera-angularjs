(function(){
  angular.module("first-app", [])
  .controller("first-controller", function($scope){
    $scope.name = "Deepak";
    $scope.sayHello = function() {
      return "Hello " + $scope.name;
    }
  })
})();

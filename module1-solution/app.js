(function() {
  'use strict';

  var foodController_Func = function($scope) {
    var TOO_MUCH_COUNT = 3;
    $scope.foodCSV = "";
    $scope.foodMessage = "";

    // Return the number of items in the CSV IGNORING any empty values.
    var countFoodItems = function(foodCSV) {
      return foodCSV.split(',')
                    .filter(function(val) { // Filter out empty items between commas
                                      return !!val.trim();
                            })
                    .length;
    }

    var setMessage = function(msg, msgClass) {
      $scope.foodMessage = msg;
      $scope.foodMessageClass = msgClass;
    }

    $scope.calculateFood = function() {
      var foodCount = countFoodItems($scope.foodCSV);
      if(foodCount === 0) {
        setMessage("Please enter data first", "red");
      }
      else if(foodCount > TOO_MUCH_COUNT) {
        setMessage("Too Much!", "green");
      }
      else {
        setMessage("Enjoy!", "green");
      }
    }
  } // End of foodController_Func
  foodController_Func.$inject = ['$scope'];

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", foodController_Func);

})();

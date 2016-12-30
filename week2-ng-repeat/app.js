(function(){
  'use strict';

  angular.module("ngRepeatExample", [])
  .controller("ngRepeatController", ngRepeatController);

  ngRepeatController.$inject = ['$scope'];

  function ngRepeatController($scope) {
    $scope.guestList1 = [
                            "Tyler",
                            "Wilma",
                            "Medina",
                            "Castro",
                            "Morton",
                            "Loretta",
                            "Booker",
                            "Hardin",
                            "Jean",
                            "Shaw",
                            "Dona",
                            "Lindsey",
                            "Kelly"
                        ];
      $scope.guestList2 = [
                            {
                              "name": "Grant Carson",
                              "email": "grantcarson@greeker.com"
                            },
                            {
                              "name": "Travis Macdonald",
                              "email": "travismacdonald@greeker.com"
                            },
                            {
                              "name": "Drake Perkins",
                              "email": "drakeperkins@greeker.com"
                            },
                            {
                              "name": "West Brennan",
                              "email": "westbrennan@greeker.com"
                            },
                            {
                              "name": "Dolores Owens",
                              "email": "doloresowens@greeker.com"
                            },
                            {
                              "name": "Dominguez Mcleod",
                              "email": "dominguezmcleod@greeker.com"
                            },
                            {
                              "name": "Herring Levy",
                              "email": "herringlevy@greeker.com"
                            },
                            {
                              "name": "Betty Fuentes",
                              "email": "bettyfuentes@greeker.com"
                            },
                            {
                              "name": "Estes Carter",
                              "email": "estescarter@greeker.com"
                            },
                            {
                              "name": "Stephenson Barker",
                              "email": "stephensonbarker@greeker.com"
                            },
                            {
                              "name": "Woodard Aguilar",
                              "email": "woodardaguilar@greeker.com"
                            },
                            {
                              "name": "Phelps Winters",
                              "email": "phelpswinters@greeker.com"
                            },
                            {
                              "name": "Lindsay Vasquez",
                              "email": "lindsayvasquez@greeker.com"
                            }
                          ]
  }
})();

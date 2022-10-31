(function () {
  'use strict';
  angular.module('lunchMenuApp', [])
  .controller('LunchMenuController' , LunchMenuController);

  //Could decalre the below controller function and the scope injection in the array of .controller itself
  LunchMenuController.$inject = ['$scope'];
  function LunchMenuController($scope) {
    $scope.name ="Srujana";
    $scope.items;
    $scope.itemsArray =[];
    $scope.checkTooMuch = function (items) {
      if(items != null && items.trim().length > 0 ) {
        $scope.itemsArray = items.split(",").filter(function(item) {
          return (item != null) && (item.trim().length > 0);
        });
        $scope.message1 =  $scope.itemsArray.length <= 3 ? "Enjoy!!" : "Too Much!!";
        $scope.errorMessage="" ;
      } else {
        $scope.itemsArray = [];
        $scope.message1 = "";
        $scope.errorMessage = "Please provide data";
      }
    };
  };

})();

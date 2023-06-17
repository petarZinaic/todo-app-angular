const myApp = angular.module("myList", []);
myApp.controller("myListController", ($scope) => {
  $scope.items = ["Wake up", "Run"];
  $scope.newItem = "";
  $scope.pushItem = () => {
    if($scope.newItem != "") {
      $scope.items.push($scope.newItem);
      $scope.newItem = "";
    }
  }
  $scope.deleteItem = (index) => {
    $scope.items.splice(index, 1);
  }
});

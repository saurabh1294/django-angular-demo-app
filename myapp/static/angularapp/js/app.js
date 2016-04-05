// app.js
var myApp = angular.module('sortApp', [])

.controller('mainController', function($scope, $http) {
  $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchEmployee   = '';     // set the default search/filter term
  
  $http({
  method: 'GET',
  url: "static/angularapp/data.json"
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
	$scope.empList = response.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
});

myApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});
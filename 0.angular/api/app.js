var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.x1 = "john";
$scope.x2 = angular.isNumber($scope.x1);
});

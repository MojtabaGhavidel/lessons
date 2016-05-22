var app = angular.module('myApp', []);
app.controller('personCtrl', function($scope) {
    $scope.first_name = "John";
    $scope.last_name = "Doe";
    $scope.full_name = function() {
        return $scope.first_name + " " + $scope.last_name;
    };
});

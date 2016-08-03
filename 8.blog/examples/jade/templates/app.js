var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('myCtrl', function($scope) {
});
app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});


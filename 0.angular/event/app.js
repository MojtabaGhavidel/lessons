var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.myFunc = function(myE) {
		$scope.x = myE.clientX;
		$scope.y = myE.clientY;
		}
});

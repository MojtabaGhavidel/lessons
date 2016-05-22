angular.module('myApp', []).controller('namesCtrl', function($scope) {
  $scope.names = [
		'Jani',
		'Carl',
		'Margareth',
		'Hege',
		'Joe',
		'Gustav',
		'Birgit',
		'Mary',
		'Kai'
  ];
	$scope.orderByMe = function(x) {
		$scope.myOrderBy = x ;
	}
});

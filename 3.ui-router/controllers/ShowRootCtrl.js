angular.module("myApp").controller('ShowRootCtrl', ['$scope', '$state', '$stateParams',
   function($scope, $state, $stateParams) {
    $scope.params = $stateParams; 
  }])

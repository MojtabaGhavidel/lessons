angular.module("myApp").controller('HomeRootCtrl', ['$scope', '$state', '$stateParams',
   function($scope, $state, $stateParams) {
    $scope.params = $stateParams; 
  }])

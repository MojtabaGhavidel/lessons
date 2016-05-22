'use strict';

angular
  .module("MyApp", ['ui.router'])
  .controller('HomeRootCtrl', ['$scope', '$state', '$stateParams',
   function($scope, $state, $stateParams) {
    var foo = $stateParams.foo; 
    $scope.params = $stateParams; 
  }])
  .controller('ShowRootCtrl', ['$scope', '$state', '$stateParams',
   function($scope, $state, $stateParams) {
    $scope.params = $stateParams; 
  }])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          views: {
            '': {
              templateUrl: 'tpl.home.html',
              controller: 'HomeRootCtrl'
            }
          }
        }).state('test', {
          url: '/:foo',
          views: {
            '': {
              templateUrl: 'tpl.show.html',
              controller: 'ShowRootCtrl'
            }
          }
        });
      $urlRouterProvider.otherwise('/');
    }
  ])
  
.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])

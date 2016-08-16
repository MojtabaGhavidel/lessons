myApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		$stateProvider
			  .state('home', {
          url: '/',
          views: {
            '': {
              templateUrl: 'tpl.home.html',
              controller: 'HomeRootCtrl'
            }
          },
					resolve: {
          	deps: ['$ocLazyLoad', function($ocLazyLoad) {
            	return $ocLazyLoad.load({
              	name: 'myApp',
        			  files: [
          				"controllers/HomeRootCtrl.js"
          			]
							})
           }]
					}
        }).state('test', {
          url: '/:foo',
          views: {
            '': {
              templateUrl: 'tpl.show.html',
              controller: 'ShowRootCtrl'
            }
          },
					resolve: {
          	deps: ['$ocLazyLoad', function($ocLazyLoad) {
            	return $ocLazyLoad.load({
              	name: 'myApp',
        			  files: [
          				"controllers/ShowRootCtrl.js"
          			]
							})
           }]
					}
	
        });
      $urlRouterProvider.otherwise('/');
    }
  ])
  






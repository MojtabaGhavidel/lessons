var menuApp = angular.module('menuApp', [
  'ui.router', 'ui.router.menus', 'ui.bootstrap'
]);

menuApp.config(function ($urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(false);
      $urlRouterProvider.otherwise('/');
});

//sidebar state menus
//the `home` has no menu specified
//All other states belong to sidebar menu
menuApp.config(function($stateProvider) {
  $stateProvider
      .state('dashboard', {
        url: '/',
        templateUrl: 'templates/dashboard.html',
        menu: {
          name: 'Dashboard',
          tag: 'sidebar',
          priority: 100
        }
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        menu: {
          name: 'Profile',
          tag: 'sidebar',
          priority: 10
        }
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'templates/blog.html',
        menu: {
          name: 'Blog',
          tag: 'sidebar',
          priority: 5
        }
      })
  ;
});

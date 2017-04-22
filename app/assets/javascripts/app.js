angular.module('submissionsHub', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'HomeCtrl',
      resolve: {
        promise: ['api', function(api) {
          for (key in api) {
            if (typeof api[key] === "object") {
              api.getAll(key);
            }
          };
        }]}
    });
    $urlRouterProvider.otherwise('home');
  }
])

angular.module('submissionsHub', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'partials/_home.html',
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
    $stateProvider.state('poems', {
      url: '/poems/{id}',
      templateUrl: 'partials/_poems.html',
      controller: 'PoemsCtrl',
      resolve: {
        poem: ['$stateParams', 'api', function($stateParams, api) {
          return api.get('poems', $stateParams.id);
        }]
      }
    });
    $stateProvider.state('submissions', {
      url: '/submissions/{id}',
      templateUrl: 'partials/_submissions.html',
      controller: 'SubmissionsCtrl',
      resolve: {
        submission: ['$stateParams', 'api', function($stateParams, api) {
          return api.get('submissions', $stateParams.id);
        }]
      }
    });
    $stateProvider.state('journals', {
      url: '/journals/{id}',
      templateUrl: 'partials/_journals.html',
      controller: 'JournalsCtrl',
      resolve: {
        journal: ['$stateParams', 'api', function($stateParams, api) {
          return api.get('journals', $stateParams.id)
        }]
      }
    })
    $urlRouterProvider.otherwise('home');
  }
])

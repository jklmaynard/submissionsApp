angular.module('submissionsHub')
.controller('HomeCtrl', [
  '$scope',
  'api',
  function($scope, api) {
    $scope.poems = api.poems;
    $scope.submissions = api.submissions;
    $scope.journals = api.journals;
  }
])

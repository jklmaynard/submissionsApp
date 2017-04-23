angular.module('submissionsHub')
.controller('PoemsCtrl', [
  '$scope',
  'api',
  'poem',
  function($scope, api, poem) {
    $scope.test = 'Hello world!'
    $scope.poem = poem;
    $scope.submissions = poem.submissions
  }
])

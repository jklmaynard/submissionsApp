angular.module('submissionsHub', ['ui.router', 'templates'])
.config([])
.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello world!';
    $scope.poems = [
      'poem 1',
      'poem 2',
      'poem 3'
    ];
    $scope.journals = [
      'journal 1',
      'journal 2'
    ];
  }
])

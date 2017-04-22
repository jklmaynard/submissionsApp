angular.module('submissionsHub')
.controller('PoemsCtrl', [
  '$scope',
  'api',
  'poem',
  function($scope, api, poem) {
    $scope.test = 'Hello world!'
    $scope.poem = poem;
    api.getSubmissions('poems', poem.id).then(function(res) {
      $scope.submissions = res.data;
    })
  }
])

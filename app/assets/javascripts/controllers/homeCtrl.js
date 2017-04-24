angular.module('submissionsHub')
.controller('HomeCtrl', [
  '$scope',
  'api',
  function($scope, api) {
    $scope.poems = api.poems;
    $scope.submissions = api.submissions;
    $scope.journals = api.journals;
    $scope.addPoem = function() {
      if (!$scope.title || $scope.title === '') {return;}
      api.createPoem({title: $scope.title});
      $scope.title = '';
    };
    $scope.selection = {poem_ids: {}, journal: {}};
    $scope.addSubmission = function() {
      var selectedPoems = [];
      if (!$scope.name || $scope.name === '') {return};
      for (key in $scope.selection.poem_ids) {
        selectedPoems.push(parseInt(key));
      }
      api.createSubmission({
        name: $scope.name,
        poems: selectedPoems,
        journal: $scope.selection.journal
      });
    }
  }
])

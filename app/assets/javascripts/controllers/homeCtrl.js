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
  }
])

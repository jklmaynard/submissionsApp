angular.module('submissionsHub')
.controller('SubmissionsCtrl', [
  '$scope',
  'api',
  'submission',
  function($scope, api, submission) {
    $scope.submission = submission.submissions;
    $scope.poems = submission.poems
    api.getJournal(submission.id).then(function(res) {
      $scope.journal = res.data;
    })
  }
])

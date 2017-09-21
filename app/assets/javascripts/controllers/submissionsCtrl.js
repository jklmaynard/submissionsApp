angular.module('submissionsHub')
.controller('SubmissionsCtrl', [
    '$scope',
    'api',
    'submission',

    function($scope, api, submission) {
        $scope.submission = submission.submissions;
        $scope.poems = submission.poems;

        /***** controller functions *****/

        let getAcceptedValues = function() {
            $scope.poems.forEach(function(poem) {
                poem.accepted ? poem.accepted_value = "accepted" : poem.accepted_value = "not accepted";
            });
        }

        /***** _submissions.html scoped functions *****/

        $scope.poemAccepted = function(index) {
            let poem = $scope.poems[index];

            poem.accepted = true;
            poem.journal_accepted = $scope.journal.title

            api.updatePoem(poem);
            getAcceptedValues();

        };

        /***** on _submission.html load *****/

        api.getJournal(submission.journal_id).then(function(res) {
          $scope.journal = res.data[0];
        });

        getAcceptedValues();

    }
]);

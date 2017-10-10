angular.module('submissionsHub').controller(
    'JournalsCtrl',
    [
        '$scope',
        'api',
        'journal',

        function ($scope, api, journal) {

            $scope.journal = journal;
            $scope.submissions = journal.submissions;

            $scope.submissions.forEach(function(submission) {
                let updated_date = new Date(submission.updated_at).toString().split(' ').slice(1,4).join(' ');
                submission.created_date = new Date(submission.created_at).toString().split(' ').slice(1,4).join(' ');

                if (submission.updated_date !== submission.created_date) {
                    submission.updated_date = updated_date;
                }

                submission.status === "complete" ? submission.complete = true : submission.complete = false;
            });

        }
    ]
)

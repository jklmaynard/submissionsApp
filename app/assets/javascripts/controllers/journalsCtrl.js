angular.module('submissionsHub').controller(
    'JournalsCtrl',
    [
        '$scope',
        'api',
        'journal',

        function ($scope, api, journal) {

            // controller functions
            let setCalendarDate = function (date) {
                return new Date(date).toString().split(' ').slice(1,4).join(' ');
            }

            // scoped variables
            $scope.journal = journal;

            $scope.submissions = journal.submissions;
            $scope.submissions.forEach(function(submission) {

                // write out dates for easy reading
                let updated_date = setCalendarDate(submission.updated_at);
                submission.created_date = setCalendarDate(submission.created_at);

                if (submission.updated_date !== submission.created_date) {
                    submission.updated_date = updated_date;
                }

                // hide divs if submission is complete
                submission.status === "complete" ? submission.complete = true : submission.complete = false;

            });

            // functionality for editing Journal
            $scope.updateJournal = function(journal) {
                if (!$scope.notes || $scope.notes === '') {return;}
                journal.notes = $scope.notes;
                api.updateJournal(journal);

                $scope.notes = '';
                $scope.editMode = false;
            };

            // functionality for updating submissions
            $scope.removePoem = function(poem_index, submission) {
                // splice out the poem selected to be removed
                submission.poems.splice(poem_index, 1);

            };
            $scope.finishUpdate = function(submission) {
                api.updateSubmission(submission);

                $scope.updateSubmissionWindow = false;
            }

        }
    ]
)

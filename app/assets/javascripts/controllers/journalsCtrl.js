angular.module('submissionsHub').controller(
    'JournalsCtrl',
    [
        '$scope',
        'api',
        'journal',

        function ($scope, api, journal) {

            $scope.journal = journal;
            $scope.submissions = journal.submissions;

        }
    ]
)

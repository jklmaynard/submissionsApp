angular.module('submissionsHub').controller(
    'PoemsCtrl',
    [
        '$scope',
        'api',
        'poem',

        function($scope, api, poem) {

            $scope.poem = poem;
            $scope.submissions = poem.submissions;
            $scope.status = poem.accepted ? 'Accepted' : '';
            $scope.poem.accepted_date = new Date(poem.updated_at).toString().split(' ').slice(1,4).join(' ');

        }

    ]
)

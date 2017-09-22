angular.module('submissionsHub').controller(
    'PoemsCtrl',
    [
        '$scope',
        'api',
        'poem',

        function($scope, api, poem) {

            $scope.poem = poem;
            $scope.submissions = poem.submissions

        }

    ]
)

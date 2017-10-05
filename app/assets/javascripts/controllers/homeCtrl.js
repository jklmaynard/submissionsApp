angular.module('submissionsHub').controller(
    'HomeCtrl',
    [
        '$scope',
        'api',

        function($scope, api) {

            $scope.poems = api.poems;
            $scope.submissions = api.submissions;
            $scope.journals = api.journals;
            $scope.selection = {poems: {}, journal: ''};
            $scope.active = {poems: true};

            /***** homeCtrl scoped functions *****/

            $scope.addPoem = function() {
                if (!$scope.title || $scope.title === '') {return;}

                api.createPoem({title: $scope.title});
                $scope.title = '';
            };

            $scope.addSubmission = function() {
                var selectedPoems = [];

                if (!$scope.name || $scope.name === '') {return};
                //run through $scope.poems array
                $scope.poems.forEach(function(index) {
                    for (key in $scope.selection.poems) {
                        if (index.id === parseInt(key)) {
                            selectedPoems.push(index);
                        }
                    }

                    return selectedPoems;
                });

                api.createSubmission({
                    name: $scope.name,
                    poems: selectedPoems,
                    journal_id: parseInt($scope.selection.journal)
                });
            };

            $scope.addJournal = function() {
                if (!$scope.journal_title || $scope.journal_title === '') {
                    return;
                }
                api.createJournal( {title: $scope.journal_title, url: $scope.url} );
                $scope.journal_title = '';
                $scope.url = '';
            };

            $scope.activateTab = function(tab) {
                $scope.active = {}; //reset
                $scope.active[tab] = true;
            };

        }
    ]
);

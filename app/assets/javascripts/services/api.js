angular.module('submissionsHub')
.factory('api', [
    '$http',
    function($http) {
        var obj = { poems: [], submissions: [], journals: [] };

        obj.getAll = function(model) {
            $http.get('/'+ model + '.json').then(function(data) {
                angular.copy(data.data, obj[model]);
            });
        };

        obj.get = function(model, id) {
              return $http.get('/' + model + '/' + id + '.json').then(function(data) {
                if (model === "journals") {
                    data.data[0].submissions = data.data[1];
                    return data.data[0];
                } else {
                    model === "poems" ? data.data[0].submissions = data.data[1] : data.data[0].poems = data.data[1]
                    return data.data[0];
                }
            });
        };

        /***** journal REST *****/

        obj.getJournal = function(id) {
            return $http.get('/journals/' + id + '.json');
        };

        obj.createJournal = function(journal) {
            return $http.post('/journals.json', journal).then(function(data) {
                obj.journals.push(data.data);
            });
        }

        /***** poem REST *****/

        obj.getPoems = function(submission_id) {
            $http.get('/poems.json');
        };

        obj.createPoem = function(poem) {
            return $http.post('/poems.json', poem).then(function(data) {
                obj.poems.push(data.data);
            });
        };

        obj.updatePoem = function(poem) {
            return $http.put(`/poems/${poem.id}.json`, poem).then(function(data) {
                obj.poems.push(data.data);
            });
        }

        /***** submission REST *****/

        obj.createSubmission = function(submission) {
            return $http.post('/submissions.json', submission).then(function(data) {
                obj.submissions.push(data.data);
            })
        };


        return obj;
    }
]);

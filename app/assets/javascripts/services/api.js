angular.module('submissionsHub')
.factory('api', [
    '$http',
    function($http) {
        var obj = { poems: [], submissions: [], journals: [] };

        obj.getAll = function (model) {
            $http.get(`/${model}.json`).then(res => {
                angular.copy(res.data, obj[model]);
            });
        };

        obj.get = function (model, id) {

            return $http.get(`/${model}/${id}.json`).then(res => {

                if (model === "journals") {
                    res.data[0].submissions = res.data[1];

                    return res.data[0];

                } else {
                    model === "poems" ? res.data[0].submissions = res.data[1] : res.data[0].poems = res.data[1];

                    return res.data[0];
                }
            })
        }

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

        obj.updateSubmission = function(submission) {
            return $http.put(`/submissions/${submission.id}.json`, submission).then(function(data) {
                obj.submissions.push(data.data);
            })
        }


        return obj;
    }
]);

angular.module('submissionsHub')
.factory('api', [
  '$http',
  function($http) {
    var obj = {
      poems: [],
      submissions: [],
      journals: []
    };
    obj.getAll = function(model) {
      $http.get('/'+ model + '.json').then(function(data) {
        angular.copy(data.data, obj[model]);
      });
    };
    obj.get = function(model, id) {
      return $http.get('/' + model + '/' + id + '.json').then(function(data) {
        model === "poems" ? data.data[0].submissions = data.data[1] : data.data[0].poems = data.data[1]
        return data.data[0];
      })
    }
    obj.getJournal = function(id) {
      return $http.get('/journals/' + id + '.json')
    }
    obj.getPoems = function(submission_id) {
      $http.get('/poems.json')
    }
    return obj;
  }
]);

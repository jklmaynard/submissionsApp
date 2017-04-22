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
        return data.data;
      })
    }
    obj.getSubmissions = function(model, id) {
      return $http.get('/' + model + '/' + id + '/submissions.json');
    }
    return obj;
  }
]);

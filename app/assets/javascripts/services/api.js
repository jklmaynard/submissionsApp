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
    return obj;
  }
]);

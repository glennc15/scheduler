(function() {

  angular
    .module('loc8rApp')
    .service('rcmData', rcmData);

  rcmData.$inject = ['$http'];
  function rcmData ($http) {
    var rcm_projects = function() {
      return http.get('http://rcm.nov.com', { withCredentials: true });
    };

    // var locationByCoords = function (lat, lng) {
    //   return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20');
    // };

    // var locationById = function (locationid) {
    //   return $http.get('/api/locations/' + locationid);
    // };

    // var addReviewById = function (locationid, data) {
    //   return $http.post('/api/locations/' + locationid + '/reviews', data);
    // };

    // return {
    //   locationByCoords : locationByCoords,
    //   locationById : locationById,
    //   addReviewById : addReviewById
    // };

    return {
      rcm_projects: rcm_projects
    };
    
  }

})();
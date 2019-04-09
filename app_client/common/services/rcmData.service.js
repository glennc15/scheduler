(function() {

  angular
    .module('loc8rApp')
    .service('rcmData', rcmData);

  rcmData.$inject = ['$http'];
  function rcmData ($http) {
    
    var rcm_projects = function() {

      var rcm_projects_url = "https://rcm.nov.com/ProjectData/AvailableProjectsForProjectGrid_FST?_search=false&nd=1554818789878&rows=10000&page=1&sidx=IcProjectId&sord=asc";
      
      return $http.get(rcm_projects_url, { withCredentials: true });
    };

    return {
      rcm_projects: rcm_projects
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



  }

})();
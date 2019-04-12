(function() {

  angular
    .module('loc8rApp')
    .service('projectsData', projectsData);

  projectsData.$inject = ['$http'];
  function projectsData ($http) {
    
    var readAllProjects = function() {
      return $http.get('/api/projects');
    };

    var deleteProject = function(projectId) {
      return $http.delete('/api/projects/' + projectId);
    };

    var deselectAllProjects = function() {
      return $http.put('/api/projects/deselectAllProjects');
    };


    var setActiveProject = function(projectId) {
      return $http.put('/api/projects/setActiveProject/:projectid');
    };


    return {
      readAllProjects: readAllProjects,
      deleteProject: deleteProject,
      deselectAllProjects: deselectAllProjects,
      setActiveProject: setActiveProject
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
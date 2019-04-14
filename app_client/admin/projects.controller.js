(function () {

  angular
    .module('loc8rApp')
    .controller('projectsCtrl', projectsCtrl);

  projectsCtrl.$inject = ['$routeParams', '$modal', 'projectsData'];
  function projectsCtrl ($routeParams, $modal, projectsData) {

    var vm = this;

    var getProjectData = function(){
      projectsData.readAllProjects()
        .success(function(projectsData) {
          vm.projects = projectsData;
        })
        .error(function (e) {
          console.log(e);
        });
    };

    vm.pageHeader = {
      title: "Projects Admin"
    };

    getProjectData();

    // vm.projects = [{
    //   id: 9,
    //   name: "BFELS: M883 Urca",
    //   country_code: "BR"
    // },
    // {
    //   id: 55,
    //   name: "BFELS: M962 Frade",
    //   country_code: "BR"
    // }];


    vm.deleteProject = function(projectId) {

      // alert("delete_project(" + project_id + ") has been pressed!");
      projectsData.deleteProject(projectId)
        .success(function(statusCode){
          console.log(statusCode);
            getProjectData();
        })
        .error(function(e) {
          console.log(e);
        });

    };

    vm.setActiveProject = function(currentValue, projectId) {

      // see https://stackoverflow.com/questions/22539815/arent-promises-just-callbacks
      
      if (currentValue == 'true') {
        projectsData.deselectAllProjects().then(function(deselectResults) {
          console.log("deselectResults:" + deselectResults);
          return projectsData.setActiveProject(projectId);
        })
        .then(function(setActiveProjectResults) {
          console.log("setActiveProjectResults: " + setActiveProjectResults);
          return projectsData.readAllProjects();
        })
        .then(function(readAllProjectsResults) {
          console.log("readAllProjectsResults: " + readAllProjectsResults);
          vm.projects = readAllProjectsResults.data;
        })
        .catch(function(error) {
          console.log("error: " + error);
        });

      }
    };

  };


        // api().then(function(result){
        //     return api2();
        // }).then(function(result2){
        //     return api3();
        // }).then(function(result3){
        //      // do work
        // }).catch(function(error) {
        //      //handle any error that may occur before this point


   

})();
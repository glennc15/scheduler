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
      
      var setActiveProject = function(projectid) {
        projectsData.setActiveProject(projectId)
          .success(function(statusCode) {
            console.log("projectsData.setActiveProject() statusCode:");
            console.log(statusCode);
            // getProjectData();
          })
          .error(function(e) {
            console.log(e);
          });


      };


      if (currentValue == 'true') {
        projectsData.deselectAllProjects()
          .success(function(statusCode){
            console.log("projectsData.deselectAllProjects() statusCode:");
            console.log(statusCode);

            setActiveProject(projectId);
            
          })
          .error(function(e) {
            console.log(e);
          });
      }

    };



    
    // vm.locationid = $routeParams.locationid;

    // loc8rData.locationById(vm.locationid)
    //   .success(function(data) {
    //     vm.data = { location: data };
    //     vm.pageHeader = {
    //       title: vm.data.location.name
    //     };
    //   })
    //   .error(function (e) {
    //     console.log(e);
    //   });

    // vm.popupReviewForm = function () {
    //   var modalInstance = $modal.open({
    //     templateUrl: '/reviewModal/reviewModal.view.html',
    //     controller: 'reviewModalCtrl as vm',
    //     resolve : {
    //       locationData : function () {
    //         return {
    //           locationid : vm.locationid,
    //           locationName : vm.data.location.name
    //         };
    //       }
    //     }
    //   });

    //   modalInstance.result.then(function (data) {
    //     vm.data.location.reviews.push(data);
    //   });
    // };

  }

})();
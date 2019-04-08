(function () {

  angular
    .module('loc8rApp')
    .controller('projectsCtrl', projectsCtrl);

  projectsCtrl.$inject = ['$routeParams', '$modal', 'rcmData'];
  function projectsCtrl ($routeParams, $modal, rcmData) {
  // projectsCtrl.$inject = ['$routeParams', '$modal'];
  // function projectsCtrl ($routeParams, $modal) {

    var vm = this;

    vm.pageHeader = {
      title: "Projects Admin"
    };

    vm.projects = [{
      id: 9,
      name: "BFELS: M883 Urca",
      country_code: "BR"
    },
    {
      id: 55,
      name: "BFELS: M962 Frade",
      country_code: "BR"
    }];


    vm.delete_project = function(project_id) {
      alert("delete_project(" + project_id + ") has been pressed!");
    };

    vm.get_projects = function () {
      alert("Getting Projects from RCM");
    }

    rcmData.rcm_projects()
      .success(function(data) {
        console.log(data);
      })
      .error(function (e) {
        console.log(e);
      });

    
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
(function () {

  angular
    .module('loc8rApp')
    .controller('projectsCtrl', projectsCtrl);

  projectsCtrl.$inject = ['$routeParams', '$modal', 'loc8rData'];
  function projectsCtrl ($routeParams, $modal, loc8rData) {
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
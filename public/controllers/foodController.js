app.controller("foodController", function($scope, $state, $stateParams) {

  $scope.imgURL = "";
  $scope.loading = false;

  $(".not-hotdog").hide()
  $(".hotdog").hide()

  $scope.processImage = function() {
    $scope.loading = true;

    $timeout

    foodService.processImage($scope.imgURL)
      .then(function(response) {
        console.log(response);
      },
      function(error) {
        console.log(error);
      })
  }

})

app.controller("foodController", function($scope, foodService) {

  $scope.imgURL = "";
  $scope.loading = false;

  $(".not-hotdog").hide()
  $(".hotdog").hide()

  $scope.updatePage = function() {
    $(".not-hotdog").hide().removeClass('animated zoomInUp')
    $(".hotdog").hide().removeClass('animated zoomInUp')
  }

  $scope.processImage = function() {
    $scope.loading = true;

    foodService.processImage($scope.imgURL)
      .then(function(response) {
        console.log(response);
        if (response.data.result) {
          $scope.loading = false;
          $(".not-hotdog").hide()
          $(".hotdog").hide()

          $(".hotdog").show().addClass('animated zoomInUp')
        }
        else {
          $scope.loading = false;
          $(".not-hotdog").hide()
          $(".hotdog").hide()

          $(".not-hotdog").show().addClass('animated zoomInUp')
        }
      },
      function(error) {
        console.log(error);
      })
  }

})

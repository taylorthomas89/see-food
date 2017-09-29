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
    $(".not-hotdog").hide().removeClass('animated zoomInUp')
    $(".hotdog").hide().removeClass('animated zoomInUp')
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

// WORKS
// https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/1200px-Hot_dog_with_mustard.png

// FAILS
// https://www.wegmans.com/content/dam/wegmans/products/768/56768.jpg

// TRICK
// https://synchromiss.files.wordpress.com/2014/07/hot-dog-dog-costume-1.jpg
// https://images-na.ssl-images-amazon.com/images/I/41qN0y-0FFL._SL500_AC_SS350_.jpg

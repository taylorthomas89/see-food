app.service("foodService", function($http) {

  this.processImage = function(url) {
    return $http.get("/food/?img=" + url)
  }

})

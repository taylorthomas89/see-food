app.service("foodService", function($http) {

  this.processImage = function(url) {
    return $http.get("/seefood/?img=" + url)
  }

})

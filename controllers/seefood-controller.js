const axios = require('axios');

function processImage(req, res) {
  var authOptions = {
      method: 'POST',
      url: process.env.API_URI + '?' + 'visualFeatures=Description,Tags',
      headers: {
          'Ocp-Apim-Subscription-Key': process.env.API_KEY,
          'Content-Type': 'application/json'
      },
      // request body should contain source image url ..
      data: '{"url": ' + '"' + 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2017/07/15/bone-fragment-scare-forces-sabrett-hot-dog-recall/_jcr_content/par/featured_image/media-0.img.jpg/0/0/1500155561682.jpg?ve=1' + '"}',

      json: true
    };

      return axios(authOptions)
        .then(function(response){
          console.log(response.data);
          console.log(response.status);
      })
        .catch(function(error){
          console.log("ERROR: ");
          console.log(error);
      });
}


module.exports = {
  processImage
}

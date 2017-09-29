const axios = require('axios');

function processImage(req, res) {
  console.log("this is my query:", req.query.img);
  var authOptions = {
      method: 'POST',
      url: process.env.API_URI + '?' + 'visualFeatures=Description,Tags',
      headers: {
          'Ocp-Apim-Subscription-Key': process.env.API_KEY,
          'Content-Type': 'application/json'
      },
      // request body should contain source image url ..
      data: '{"url": ' + '"' + req.query.img + '"}',

      json: true
    };

    axios(authOptions)
      .then(function(response){
        console.log(response.data);
        // console.log(response.data.description.tags);
        var arr = response.data.description.tags
        var hot = arr.indexOf('hot')
        var dog = arr.indexOf('dog')
        var hotdog = arr.indexOf('hotdog')

        if((hot >= 0 && dog >= 0) || hotdog >= 0) {
          res.json({result: true})
        }
        else {
          res.json({result: false})
        }
    })
    .catch(function(error){
      console.log("ERROR: ");
      console.log(error);
    });
}

module.exports = { processImage }

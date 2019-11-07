var http = require("http")
var console = require("console")
module.exports.function = function search (day, cam) {
  var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?"
var urlFull= "earth_date=2015-6-3&api_key=DEMO_KEY"
  var options = { 
    query: {
      day: day
      cam: cam
    }
  };
  var ret = []
  if (typeof(day)!= "undefined"){
    options.query.day= day
  };
  if (typeof(cam)!= "undefined"){
    options.cam"= cam
  }
  
  try{
  res = http.getUrl(url,{query: options})
  ret = JSON.parse(res)
  } catch (err){
    console.log("ERROR: "+err)
  }
  return  ret
}

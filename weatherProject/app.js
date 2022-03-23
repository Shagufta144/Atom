const express = require("express");
const https  = require("https")
const bodyParser = require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
} )

app.post("/" , function(req , res){

const query = req.body.cityName;
const unit= "metric";
const apiKey = "2af42e6340d6c1b471a31176336f9add"
const url = "https://api.openweathermap.org/data/2.5/find?q="+query+"&units="+unit+"&appid="+apiKey;

https.get(url , function(response){
  console.log(response.statusCode);

  response.on("data", function(data){
  const weatherData = JSON.parse(data);
const temp = weatherData.list[0].main.temp
const des = weatherData.list[0].weather[0].description;
const icon =weatherData.list[0].weather[0].icon;
const imageURL = "http://openweathermap.org/img/wn/"+icon +"@2x.png";

res.write("<p> The Weather is currently " +des+" .</p>" );
res.write("<h1>The Temperature in "+ query+" is "+ temp + " degree Celsius. </h1>" );
res.write("<img src="+imageURL+">");
res.send();
  })
})
})

app.listen(3000 , function(){
  console.log("Server is running at port 3000.");
})

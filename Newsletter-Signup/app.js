const express  = require("express");
const bodyParser = require("body-parser");
const request =  require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req , res){
  const firstName = req.body.first;
const lastName = req.body.last;
const email = req.body.email;

const data = {
  members:[
    {
      email_address:email,
      status:"subscribed",
      merge_fields:{
        // FNAME:firstName
        // LNAME :lastName
      }
    }
  ]
}

const jsonData = JSON.stringify(data);



})

app.listen(3000 , function(){
  console.log("Server is running on port 3000.");
})



//a52651d433c3ef178575941b0ee03b19-us14
//id=3b006ca79d

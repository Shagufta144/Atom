const express = require ("express");
const app = express();

app.get("/", function(req , res){
 console.log(req);
 res.send("<h1>Hey , Cute Person!</h1>");
})
app.get("/contact" , function(req ,res){
  res.send("<h2>Contact me at : shaguftay38@gmail.com</h2>")
})
app.get("/about" , function(req  , res ){
  res.send("<h2> Hi , I am Shagufta Yasmin , a student of Bachelor's in Computer Applications.  I love meeting new people and learning new technologies . I am an aspiring Web Developer.</h2>");
})
app.get("/hobbies" , function(req ,res){
  res.send("<ul><li>Cappuchino</li> <li>Coding </li> </ul>");
})
app.listen(3000 , function(){
  console.log("server has started running ...");
});

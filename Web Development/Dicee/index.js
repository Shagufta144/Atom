//First Image

var randomNumber1 =Math.floor(Math.random()*6 + 1) ;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "Dicee Challenge - Starting Files/images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);


// second image
//var randomNumber2 = Math.floor(Math.random()*6) +1;
//var randomImageSource2 ="Dicee Challenge - Starting Files/images/dice" + randomNumber2 + ".png";
//  document.querySelectorAll("img")[1].setAttrtibute("src" , randomImageSource2);
var randomNumber2 =Math.floor(Math.random()*6 + 1) ;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "Dicee Challenge - Starting Files/images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins1";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").innerHTML= "Draw !";
}

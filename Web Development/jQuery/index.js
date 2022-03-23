//$("h1").css("color", "Blue");
$("h1").addClass("big-title");
//$("h1").removeClass("big-title");
$("button").addClass("btn");
//if($("button").hasClass("btn"))
//alert("True");

$("button").text("PRESS ME");
$("button").html("<em>KEYS</em>")
$("img").attr("src");
$("a").attr("href" , "https://www.yahoo.com");
$("h1").attr("class");
$("h1").click(function(){
  $("h1").css("color","purple");
})
//$("button").click(function(){
//  $("h1").css("padding","30px");
//})
//$("input").addClass("btn");
//$("input").keydown(function(key){
//  console.log(key.key);
//})
////$(document).keydown(function(key){r
//$("h1").text(key.key);
//})
//$("button").on("mouseover" , function(){
//  $("button").css("backgroundColor", "pink");
//})
//$("h1").before("<button> New </button>");
//$("h1").after("<button> New </button>");
//$("h1").prepend("<button> New </button>");
//$("h1").append("<button> New </button>");
//$("h1").remove("<button> New </button>");


// Website Animations using jQuery
//$("h1").hide();
//$("a").hide();
//$("h1").show();
//$("h1").toggle();
//$("h1").fadeOut();
//$("h1").fadeIn();
//$("button").on("click", function(){
//  $("h1").slideUp();
//})

//$("button").on("click", function(){
////  $("h1").slideDown();
//})

//$("button").on("click", function(){
//  $("h1").slideToggle();
//})
$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity:0.5  })
})

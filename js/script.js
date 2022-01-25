var body = document.querySelector("body");
var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");

//var h1 = document.querySelector("h1");
var firstTitle = document.querySelector('.firstTitle');
var secondTitle = document.querySelector(".secondTitle");
var thirdTitle = document.querySelector(".thirdTitle");
var fourthTitle = document.querySelector(".fourthTitle");
var fifthTitle = document.querySelector(".fifthTitle");
var sixthTitle = document.querySelector(".sixthTitle");
var seventhTitle = document.querySelector(".seventhTitle");
var eighthTitle = document.querySelector(".eigthTitle");
/*Ending of Titles */


//var descriptOne = document.querySelector(".descriptOne");
  
  

themeSwitchInput.addEventListener("click", function () {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      ball.classList.remove("move-right");

     firstTitle.innerText ="Cheese Burger with Extra Cheese";
     //descriptOne.innerText="Two buns, double American cheese, patti, lettues, tomatoes, pickles, red onions, ketechup, mustard, and mayo";
     secondTitle.innerText ="Becond Deluxe Cheese Burger";
     thirdTitle.innerText ="Double Big Cheese Burger";
     fourthTitle.innerText ="Grilled Chicken Sandwich";
     fifthTitle.innerText ="Double Cheesy Chicken Sandwich";
     sixthTitle.innerText ="Double Deluxe Chicken Sandwich";
     seventhTitle.innerText ="Fish Sandwich";
     eighthTitle.innerText ="Deluxe Fish Sandwich";
     descriptOne.innerText="THIS IS A TEST"; 
      /**End of heading/Titles */
    // descriptOne.innerText = "Two buns, double American cheese, patti, lettues, tomatoes, pickles, red onions, ketechup, mustard, and mayo.";
    } else {
      body.classList.add("light");
      ball.classList.add("move-right");
      firstTitle.innerText ="Deluxe Breakfast Biscuit";
      secondTitle.innerText ="Deluxe Breakfast Biscuit";
      //descriptOne.innerText="Two biscuits, cheese, egg, and bacon.";
      //secondTitle.innerText ="Upside Down Egg Breakfast Biscuit";
      thirdTitle.innerText ="Spicy Sausage Breakfast Biscuit";
      fourthTitle.innerText ="Toast Breakfast Plate";
      fifthTitle.innerText ="Waffle Breakfast Plate";
      sixthTitle.innerText ="French Toast Breakfast Plate";
      seventhTitle.innerText ="Simple Crepe Breakfast";
      eighthTitle.innerText ="Vegetarian Crepe Breakfast";

      descriptOne.innerText="THIS IS NOT A TEST"
    }
  });



  //END OF THE TOGGLE SPECICIAL EFFECTS



//document.getElementById("first_title")
//first.addEventListener('toggle,' function () {
  //if (body.classList.contains("first_title")) {
   // body.classList.remove("first_title");
    //ball.classList.remove("move-right");
  // firstTitle.innerText = "Stealth Quincy";
  //} else {
    //body.classList.add("first_title");
    //ball.classList.add("move-right");
 // }
//});
//END OF THE TOGGLE SPECICIAL EFFECTS

//});
//first.addEventListener('toggle,' myFunction);


 









  var time = new Date().getHours();
  // console.log(time);




//const meal = [
 // {meal: "cheeseBurger", price: 3.64},
  //{meal: "baconDeluxeCheeseBurger", price: 4.25},
  //{meal: "doubleBigCheeseBurger", price: 5.25},
  //{meal: "doubleBCheeseBurger", price: 5.25},
  //{meal: "grilledChickenBurger", price: 3.95},
  //{meal: "doubleCheeseChickenSandwich", price: 5.99},
  //{meal: "doubleDeluxeChickenSandwich", price: 7.25},
  //{meal: "fishSandwichWithCheese", price: 7.95},
  //{meal: "deluxeFishSandwich", price: 3.99},
//]

//let total = 0;

//meal.forEach(item => {
  //total += item.price;
//});

//const mealTime = function (food, price) {
 // food: "food";
 // price: "price";
//};
 // return mealTime;
//};







 // var cheeseBurger = 10;
 // var baconDeluxe = 5;
 // var doubleBig = 8;

 // var grilledChicken = 6;
  //var doubleCheeseChicken = 18;
  //var doubleDeluxeChicken = 4;

  //var fishWithCheese = 7;
  //var deluxeFish = 5;

  
//  if (time < 12) {
  //  alert("Good morning, welcome to South Rouxe, how may I help you?");

 // } else if (time <= 18) {
  //  prompt("Good afternoon, we are serving lunch, how may I help you?");
  //} else if (cheeseBurger <= 18) {
 //   alert(`We have ${cheeseBurger} cheese burgers left.`);
  //} else if (baconDeluxe <= 4) {
 //   alert(`We have ${baconDeluxe} bacon deluxe burgers left.`);
 // } else if (doubleBig <= 6) {
  //  alert(`We have ${doubleBig} double big cheese burgers left.`);
  //} else if (grilledChicken <= 6) {
  //  alert(`We have ${grilledChicekne}grilled chicken sandwiches left.`);
  //} else if (doubleDeluxeChicken <= 3) {
 //   alert(`We have ${doubleDeluxeChicken} double deluxe chicken sandwiches left.`);
  //} else if (fishWithCheese <= 4) {
  //  alert(`We have ${fishWithCheese} fish with cheese sandwishes left.`);
  //} else if (deluxeFish <= 4) {
  //  alert(`We have ${deluxeFish}deluxe fish sandwishes left.`);
  //} else if (time <= 18) {
  //  prompt(`Good afternoon, welcome to South Rouxe, we are serving lunch, how may I help you?`);
  //} else {
   // alert("Please come to the front to get your order.");
 // }






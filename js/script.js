var body = document.querySelector("body");
var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");


  

themeSwitchInput.addEventListener("click", function () {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      ball.classList.remove("move-right");
     //h1.innerText = "Stealth Quincy";
    } else {
      body.classList.add("light");
      ball.classList.add("move-right");
      //h1.innerText = "Party Quincy";
      // cheeseBurger.src = "img/upside_down_biscuit.jpg";
      //cheeseBurger.alt = "cheese_burger";
    }
  });
  //END OF THE TOGGLE SPECICIAL EFFECTS




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






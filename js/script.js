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
    }
  });
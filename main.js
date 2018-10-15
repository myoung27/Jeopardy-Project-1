// Define the variables for getting the points to add and subtract
// Define points
let score1 = document.querySelector("h1");

let results = document.querySelector("#seeResults");
let scoreResults = document.querySelector("p");
var points = 0;
let zeroPoints = 0;
let theme = new Audio("Tonight Show - Johnny Carson.mp3");
swal("Welcome To SmartyPants!").then(value => {
  swal(`The rules of this game are very simple:
     Answer the questions as best as you can and then press the "See Results" button to compare your score. Try this quiz against your friends to see who is the real SmartyPants!!!`),
    theme.play();
});
$(".btn-block").on("click", function () {
  if ($(this).hasClass("ten")) {
    zeroPoints = 10;
  } else if ($(this).hasClass("twenty")) {
    zeroPoints = 20;
  } else if ($(this).hasClass("thirty")) {
    zeroPoints = 30;
  } else if ($(this).hasClass("forty")) {
    zeroPoints = 40;
  } else if ($(this).hasClass("fifty")) {
    zeroPoints = 50;
  }
  $(this).css("visibility", "hidden");
});

$(".modal-footer button").on("click", function () {
  if ($(this).attr("data-attribute") == "correct") {
    points += zeroPoints;
  } else {
    points -= zeroPoints;
  }
  score1.innerHTML = points;
});
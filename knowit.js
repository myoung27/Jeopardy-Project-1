let anwser10a = document.querySelector("#a10a");
let anwser10aa = document.querySelector("#a10aa");
let anwser10aaa = document.querySelector("#a10aaa");
let anwser10b = document.querySelector("#a10b");
let anwser10bb = document.querySelector("#a10bb");
let anwser10bbb = document.querySelector("#a10bbb");
let anwser10c = document.querySelector("#a10c");
let anwser10cc = document.querySelector("#a10cc");
let anwser10ccc = document.querySelector("#a10ccc");
let anwser10d = document.querySelector("#a10d");
let anwser10dd = document.querySelector("#a10dd");
let anwser10ddd = document.querySelector("#a10ddd");
let anwser10e = document.querySelector("#a10e");
let anwser10ee = document.querySelector("#a10ee");
let anwser10eee = document.querySelector("#a10eee");
let score1 = document.querySelector("h1");
var points = 0;

anwser10a.addEventListener("click", function() {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[0].style.visibility = "hidden";
});
anwser10aa.addEventListener("click", function() {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[0].style.visibility = "hidden";
});
anwser10aaa.addEventListener("click", function() {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[0].style.visibility = "hidden";
});

anwser10b.addEventListener("click", function() {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[1].style.visibility = "hidden";
});
anwser10bb.addEventListener("click", function() {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[1].style.visibility = "hidden";
});
anwser10bbb.addEventListener("click", function() {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[1].style.visibility = "hidden";
});
anwser10c.addEventListener("click", function() {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[2].style.visibility = "hidden";
});
anwser10cc.addEventListener("click", function() {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[2].style.visibility = "hidden";
});
anwser10ccc.addEventListener("click", function() {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[2].style.visibility = "hidden";
});
anwser10d.addEventListener("click", function() {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[3].style.visibility = "hidden";
});
anwser10dd.addEventListener("click", function() {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[3].style.visibility = "hidden";
});
anwser10ddd.addEventListener("click", function() {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[3].style.visibility = "hidden";
});
anwser10e.addEventListener("click", function() {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[4].style.visibility = "hidden";
});
anwser10ee.addEventListener("click", function() {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[4].style.visibility = "hidden";
});
anwser10eee.addEventListener("click", function() {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[4].style.visibility = "hidden";
});

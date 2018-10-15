// List your variables for each anwser choice
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
let anwser20a = document.querySelector("#a20a");
let anwser20aa = document.querySelector("#a20aa");
let anwser20aaa = document.querySelector("#a20aaa");
let anwser20b = document.querySelector("#a20b");
let anwser20bb = document.querySelector("#a20bb");
let anwser20bbb = document.querySelector("#a20bbb");
let anwser20c = document.querySelector("#a20c");
let anwser20cc = document.querySelector("#a20cc");
let anwser20ccc = document.querySelector("#a20ccc");
let anwser20d = document.querySelector("#a20d");
let anwser20dd = document.querySelector("#a20dd");
let anwser20ddd = document.querySelector("#a20ddd");
let anwser20e = document.querySelector("#a20e");
let anwser20ee = document.querySelector("#a20ee");
let anwser20eee = document.querySelector("#a20eee");
let anwser30a = document.querySelector("#a30a");
let anwser30aa = document.querySelector("#a30aa");
let anwser30aaa = document.querySelector("#a30aaa");
let anwser30b = document.querySelector("#a30b");
let anwser30bb = document.querySelector("#a30bb");
let anwser30bbb = document.querySelector("#a30bbb");
let anwser30c = document.querySelector("#a30c");
let anwser30cc = document.querySelector("#a30cc");
let anwser30ccc = document.querySelector("#a30ccc");
let anwser30d = document.querySelector("#a30d");
let anwser30dd = document.querySelector("#a30dd");
let anwser30ddd = document.querySelector("#a30ddd");
let anwser30e = document.querySelector("#a30e");
let anwser30ee = document.querySelector("#a30ee");
let anwser30eee = document.querySelector("#a30eee");
let anwser40a = document.querySelector("#a40a");
let anwser40aa = document.querySelector("#a40aa");
let anwser40aaa = document.querySelector("#a40aaa");
let anwser40b = document.querySelector("#a40b");
let anwser40bb = document.querySelector("#a40bb");
let anwser40bbb = document.querySelector("#a40bbb");
let anwser40c = document.querySelector("#a40c");
let anwser40cc = document.querySelector("#a40cc");
let anwser40ccc = document.querySelector("#a40ccc");
let anwser40d = document.querySelector("#a40d");
let anwser40dd = document.querySelector("#a40dd");
let anwser40ddd = document.querySelector("#a40ddd");
let anwser40e = document.querySelector("#a40e");
let anwser40ee = document.querySelector("#a40ee");
let anwser40eee = document.querySelector("#a40eee");
let anwser50a = document.querySelector("#a50a");
let anwser50aa = document.querySelector("#a40aa");
let anwser50aaa = document.querySelector("#a50aaa");
let anwser50b = document.querySelector("#a50b");
let anwser50bb = document.querySelector("#a50bb");
let anwser50bbb = document.querySelector("#a50bbb");
let anwser50c = document.querySelector("#a50c");
let anwser50cc = document.querySelector("#a50cc");
let anwser50ccc = document.querySelector("#a50ccc");
let anwser50d = document.querySelector("#a50d");
let anwser50dd = document.querySelector("#a50dd");
let anwser50ddd = document.querySelector("#a50ddd");
let anwser50e = document.querySelector("#a50e");
let anwser50ee = document.querySelector("#a50ee");
let anwser50eee = document.querySelector("#a50eee");
// Define the variables for getting the points to add and subtract
let score1 = document.querySelector("h1");
let results = document.querySelector("#seeResults")
let scoreResults = document.querySelector("p");
var points = 0;
swal("Welcome To SmartyPants!",{
  buttons: ["Oh noez!", "Aww yiss!"],
});

anwser10a.addEventListener("click", function () {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[1].style.visibility = "hidden";
});
anwser10aa.addEventListener("click", function () {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[1].style.visibility = "hidden";
});
anwser10aaa.addEventListener("click", function () {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[1].style.visibility = "hidden";
});

anwser10b.addEventListener("click", function () {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[2].style.visibility = "hidden";
});
anwser10bb.addEventListener("click", function () {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[2].style.visibility = "hidden";
});
anwser10bbb.addEventListener("click", function () {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[2].style.visibility = "hidden";
});
anwser10c.addEventListener("click", function () {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[3].style.visibility = "hidden";
});
anwser10cc.addEventListener("click", function () {
  points += 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[3].style.visibility = "hidden";
});
anwser10ccc.addEventListener("click", function () {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[4].style.visibility = "hidden";
});
anwser10d.addEventListener("click", function () {
  points -= 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[4].style.visibility = "hidden";
});
anwser10dd.addEventListener("click", function () {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[4].style.visibility = "hidden";
});
anwser10ddd.addEventListener("click", function () {
  points += 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[4].style.visibility = "hidden";
});
anwser10e.addEventListener("click", function () {
  points += 10;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[5].style.visibility = "hidden";
});
anwser10ee.addEventListener("click", function () {
  points += 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[5].style.visibility = "hidden";
});
anwser10eee.addEventListener("click", function () {
  points -= 10;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[5].style.visibility = "hidden";
});
anwser20a.addEventListener("click", function () {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[6].style.visibility = "hidden";
});
anwser20aa.addEventListener("click", function () {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[6].style.visibility = "hidden";
});
anwser20aaa.addEventListener("click", function () {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[6].style.visibility = "hidden";
});

anwser20b.addEventListener("click", function () {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[7].style.visibility = "hidden";
});
anwser20bb.addEventListener("click", function () {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[7].style.visibility = "hidden";
});
anwser20bbb.addEventListener("click", function () {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[7].style.visibility = "hidden";
});
anwser20c.addEventListener("click", function () {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[8].style.visibility = "hidden";
});
anwser20cc.addEventListener("click", function () {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[8].style.visibility = "hidden";
});
anwser20ccc.addEventListener("click", function () {
  points += 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[8].style.visibility = "hidden";
});
anwser20d.addEventListener("click", function () {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[9].style.visibility = "hidden";
});
anwser20dd.addEventListener("click", function () {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[9].style.visibility = "hidden";
});
anwser20ddd.addEventListener("click", function () {
  points += 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[9].style.visibility = "hidden";
});
anwser20e.addEventListener("click", function () {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[10].style.visibility = "hidden";
});
anwser20ee.addEventListener("click", function () {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[10].style.visibility = "hidden";
});
anwser20eee.addEventListener("click", function () {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[10].style.visibility = "hidden";
});
anwser30a.addEventListener("click", function () {
  points -= 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[11].style.visibility = "hidden";
});
anwser30aa.addEventListener("click", function () {
  points += 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[11].style.visibility = "hidden";
});
anwser30aaa.addEventListener("click", function () {
  points -= 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[11].style.visibility = "hidden";
});

anwser30b.addEventListener("click", function () {
  points -= 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[12].style.visibility = "hidden";
});
anwser30bb.addEventListener("click", function () {
  points += 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[12].style.visibility = "hidden";
});
anwser30bbb.addEventListener("click", function () {
  points -= 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[12].style.visibility = "hidden";
});
anwser30c.addEventListener("click", function () {
  points -= 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[13].style.visibility = "hidden";
});
anwser30cc.addEventListener("click", function () {
  points -= 30;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[13].style.visibility = "hidden";
});
anwser30ccc.addEventListener("click", function () {
  points += 30;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[13].style.visibility = "hidden";
});
anwser30d.addEventListener("click", function () {
  points += 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[14].style.visibility = "hidden";
});
anwser30dd.addEventListener("click", function () {
  points -= 30;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[14].style.visibility = "hidden";
});
anwser30ddd.addEventListener("click", function () {
  points -= 30;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[14].style.visibility = "hidden";
});
anwser30e.addEventListener("click", function () {
  points -= 30;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[15].style.visibility = "hidden";
});
anwser30ee.addEventListener("click", function () {
  points += 30;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[15].style.visibility = "hidden";
});
anwser30eee.addEventListener("click", function () {
  points -= 30;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[15].style.visibility = "hidden";
});
anwser40a.addEventListener("click", function () {
  points -= 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[16].style.visibility = "hidden";
});
anwser40aa.addEventListener("click", function () {
  points -= 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[16].style.visibility = "hidden";
});
anwser40aaa.addEventListener("click", function () {
  points += 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[16].style.visibility = "hidden";
});

anwser40b.addEventListener("click", function () {
  points -= 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[17].style.visibility = "hidden";
});
anwser40bb.addEventListener("click", function () {
  points += 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[17].style.visibility = "hidden";
});
anwser40bbb.addEventListener("click", function () {
  points -= 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[17].style.visibility = "hidden";
});
anwser40c.addEventListener("click", function () {
  points -= 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[18].style.visibility = "hidden";
});
anwser40cc.addEventListener("click", function () {
  points += 40;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[18].style.visibility = "hidden";
});
anwser40ccc.addEventListener("click", function () {
  points -= 40;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[18].style.visibility = "hidden";
});
anwser40d.addEventListener("click", function () {
  points -= 40;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[19].style.visibility = "hidden";
});
anwser40dd.addEventListener("click", function () {
  points -= 40;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[19].style.visibility = "hidden";
});
anwser40ddd.addEventListener("click", function () {
  points += 40;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[19].style.visibility = "hidden";
});
anwser40e.addEventListener("click", function () {
  points -= 40;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[20].style.visibility = "hidden";
});
anwser40ee.addEventListener("click", function () {
  points += 40;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[20].style.visibility = "hidden";
});
anwser40eee.addEventListener("click", function () {
  points -= 40;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[20].style.visibility = "hidden";
});
anwser50a.addEventListener("click", function () {
  points -= 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[21].style.visibility = "hidden";
});
anwser50aa.addEventListener("click", function () {
  points += 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[21].style.visibility = "hidden";
});
anwser50aaa.addEventListener("click", function () {
  points -= 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[21].style.visibility = "hidden";
});

anwser50b.addEventListener("click", function () {
  points += 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[22].style.visibility = "hidden";
});
anwser50bb.addEventListener("click", function () {
  points -= 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[22].style.visibility = "hidden";
});
anwser50bbb.addEventListener("click", function () {
  points -= 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[22].style.visibility = "hidden";
});
anwser50c.addEventListener("click", function () {
  points -= 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[23].style.visibility = "hidden";
});
anwser50cc.addEventListener("click", function () {
  points += 50;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[23].style.visibility = "hidden";
});
anwser50ccc.addEventListener("click", function () {
  points -= 50;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[23].style.visibility = "hidden";
});
anwser50d.addEventListener("click", function () {
  points -= 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[24].style.visibility = "hidden";
});
anwser50dd.addEventListener("click", function () {
  points -= 50;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[24].style.visibility = "hidden";
});
anwser50ddd.addEventListener("click", function () {
  points += 50;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[24].style.visibility = "hidden";
});
anwser50e.addEventListener("click", function () {
  points -= 50;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[25].style.visibility = "hidden";
});
anwser50ee.addEventListener("click", function () {
  points += 50;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[25].style.visibility = "hidden";
});
anwser50eee.addEventListener("click", function () {
  points -= 50;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[25 ].style.visibility = "hidden";
});
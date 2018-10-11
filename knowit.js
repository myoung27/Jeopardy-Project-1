let anwser10a = document.querySelector("#a10a");
let anwser10aa = document.querySelector("#a10aa");
let anwser10aaa = document.querySelector("#a10aaa");
let anwser10b = document.querySelector("#a10b");
let anwser10bb = document.querySelector("#a10bb");
let anwser10bbb = document.querySelector("#a10bbb");
let anwser10c = document.querySelector("#a10b");
let anwser10cc = document.querySelector("#a10bb");
let anwser10ccc = document.querySelector("#a10bbb");
let score1 = document.querySelector("h1");
let points = 0;
anwser10a.addEventListener("click", function() {
    points -= 10
    score1.innerHTML = points;
});
anwser10aa.addEventListener("click", function() {
    points += 10
    score1.innerHTML = points;
  });
  anwser10aaa.addEventListener("click", function() {
    points -= 10
    score1.innerHTML = points;
  });

  anwser10b.addEventListener("click", function() {
    points += 10
    score1.innerHTML = points;
  });
  anwser10bb.addEventListener("click", function() {
    points += 10
    score1.innerHTML = points;
    });
    anwser10bbb.addEventListener("click", function() {``
      let newScore = points - 10;
      score1.innerHTML = newScore;
    });

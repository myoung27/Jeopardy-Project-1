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
anwser20a.addEventListener("click", function() {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[5].style.visibility = "hidden";
});
anwser20aa.addEventListener("click", function() {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[5].style.visibility = "hidden";
});
anwser20aaa.addEventListener("click", function() {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[5].style.visibility = "hidden";
});

anwser20b.addEventListener("click", function() {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[6].style.visibility = "hidden";
});
anwser20bb.addEventListener("click", function() {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[6].style.visibility = "hidden";
});
anwser20bbb.addEventListener("click", function() {
  points -= 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[6].style.visibility = "hidden";
});
anwser20c.addEventListener("click", function() {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[7].style.visibility = "hidden";
});
anwser20cc.addEventListener("click", function() {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[7].style.visibility = "hidden";
});
anwser20ccc.addEventListener("click", function() {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[7].style.visibility = "hidden";
});
anwser20d.addEventListener("click", function() {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[8].style.visibility = "hidden";
});
anwser20dd.addEventListener("click", function() {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[8].style.visibility = "hidden";
});
anwser20ddd.addEventListener("click", function() {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[8].style.visibility = "hidden";
});
anwser20e.addEventListener("click", function() {
  points += 20;
  console.log(points);
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[9].style.visibility = "hidden";
});
anwser20ee.addEventListener("click", function() {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[9].style.visibility = "hidden";
});
anwser20eee.addEventListener("click", function() {
  points -= 20;
  score1.innerHTML = points;
  document.getElementsByClassName("btn")[9].style.visibility = "hidden";
});
anwser30a.addEventListener("click", function() {
    points -= 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[10].style.visibility = "hidden";
  });
  anwser30aa.addEventListener("click", function() {
    points += 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[10].style.visibility = "hidden";
  });
  anwser30aaa.addEventListener("click", function() {
    points -= 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[10].style.visibility = "hidden";
  });
  
  anwser30b.addEventListener("click", function() {
    points += 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[11].style.visibility = "hidden";
  });
  anwser30bb.addEventListener("click", function() {
    points -= 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[11].style.visibility = "hidden";
  });
  anwser30bbb.addEventListener("click", function() {
    points -= 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[11].style.visibility = "hidden";
  });
  anwser30c.addEventListener("click", function() {
    points += 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[12].style.visibility = "hidden";
  });
  anwser30cc.addEventListener("click", function() {
    points -= 30;
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[12].style.visibility = "hidden";
  });
  anwser30ccc.addEventListener("click", function() {
    points -= 30;
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[12].style.visibility = "hidden";
  });
  anwser30d.addEventListener("click", function() {
    points += 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[13].style.visibility = "hidden";
  });
  anwser30dd.addEventListener("click", function() {
    points -= 30;
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[13].style.visibility = "hidden";
  });
  anwser30ddd.addEventListener("click", function() {
    points -= 30;
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[13].style.visibility = "hidden";
  });
  anwser30e.addEventListener("click", function() {
    points += 30;
    console.log(points);
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[14].style.visibility = "hidden";
  });
  anwser30ee.addEventListener("click", function() {
    points -= 30;
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[14].style.visibility = "hidden";
  });
  anwser30eee.addEventListener("click", function() {
    points -= 30;
    score1.innerHTML = points;
    document.getElementsByClassName("btn")[14].style.visibility = "hidden";
  });
  
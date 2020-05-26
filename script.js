window.onload = time();
var mean = 0;
var num = 1;
var total = 0;
var min;
var max;

function time() {
  min = 1000;
  max = 5000;
  var t = Math.floor(Math.random() * (max + 1 - min)) + min;
  setTimeout("flash()", t);
  num = num + 1;
}

function flash() {
  var start = performance.now();
  document.bgColor = "#ff0000";

  document.onclick = function () {
    document.bgColor = "#ffffff";
    var stop = performance.now();
    var score = stop - start;
    total = total + score;
    mean = total / num;
    document.getElementById("st").innerText = score;
    document.getElementById("mean").innerText =
      mean + " " + num + "回目 min=" + min + " max=" + max;
    if (num <= 9) {
      time();
    }
  };
}

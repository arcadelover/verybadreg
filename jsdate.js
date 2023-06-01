var lower = new Date("1907-03-04");
var upper = new Date();

var midpoint = new Date((lower.getTime() + upper.getTime()) / 2);
var midText = midpoint.toISOString().split("T")[0];
document.getElementById("actual-date").innerText = midText;

function earlier() {
  setNewMidpoint(lower, midpoint);
}

function later() {
  setNewMidpoint(midpoint, upper);
}

function setNewMidpoint(l, u) {
  lower = l;
  upper = u;
  midpoint = new Date((lower.getTime() + upper.getTime()) / 2);
  var midText = midpoint.toISOString().split("T")[0];
  document.getElementById("actual-date").innerText = midText;
}

document.getElementById("cleardate").addEventListener("click", function (event) {
    event.preventDefault();
    lower = new Date("1907-03-04");
    upper = new Date();
    midpoint = new Date((lower.getTime() + upper.getTime()) / 2);
    midText = midpoint.toISOString().split("T")[0];
    document.getElementById("actual-date").innerText = midText;
  });

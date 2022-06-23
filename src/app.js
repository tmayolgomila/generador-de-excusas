/* eslint-disable */
import "bootstrap";
import "./style.css";

var who = ["the dog", "my granma", "his turtle", "my bird"];
var what = ["eat", "pissed", "crushed", "broked"];
var when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here

  var quien = who[Math.floor(Math.random() * who.length)];

  var que = what[Math.floor(Math.random() * what.length)];

  var donde = when[Math.floor(Math.random() * when.length)];

  const element = document.getElementById("boton");
  element.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("excuse").innerHTML =
      quien + " " + que + " " + donde;
  }
};

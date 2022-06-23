/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  var who = ["the dog", "my granma", "his turtle", "my bird"];
  var what = ["eat", "pissed", "crushed", "broked"];
  var when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  var quien = who[Math.floor(Math.random() * (who.length - 1))];

  var que = what[Math.floor(Math.random() * (what.length - 1))];

  var donde = when[Math.floor(Math.random() * (when.length - 1))];

  const element = document.getElementById("boton");
  element.addEventListener("click", myFunction);
  function myFunction() {
    document.getElementById("excuse").innerHTML =
      quien + " " + que + " " + donde;
  }
};

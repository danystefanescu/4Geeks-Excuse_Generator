/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let allstuff =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    action[Math.floor(Math.random() * who.length)] +
    " " +
    what[Math.floor(Math.random() * who.length)] +
    " " +
    who[Math.floor(Math.random() * when.length)];
  document.querySelector("#excuse").innerHTML = allstuff;
};

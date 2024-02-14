/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domainType = [".com", ".biz"];

  const excuse = document.getElementById("excuse");

  // Set the innerHTML of "example" to "Hello, World!"
  excuse.innerHTML = `
  ${pronoun[Math.floor(Math.random() * 2)]} 
  ${adj[Math.floor(Math.random() * 2)]}  
  ${noun[Math.floor(Math.random() * 2)]}  
  ${domainType[Math.floor(Math.random() * 2)]}
  `;
  for (let x of pronoun) {
    for (let y of adj) {
      for (let n of noun) {
        for (let d of domainType) {
          excuse.innerHTML += `<div>${x}${y}${n}${d}</div>`;
        }
      }
    }
  }
};

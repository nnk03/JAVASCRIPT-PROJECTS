// document.getElementById("count-el").innerText = 4;
let c = 0;
let countEl = document.getElementById("count-el");
// console.log(countEl);
function increment() {
  c += 1;
  countEl.textContent = c;
}
let saveEl = document.getElementById("save-el");

function save() {
  let countStr = c + " -";
  saveEl.textContent += countStr;
  console.log(c);
  c = 0;
  countEl.textContent = c;
}

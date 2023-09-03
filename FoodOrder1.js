let items = document.getElementById("uitm");
let total = document.getElementById("uamt");
console.log(items, total);
buttons = document.querySelectorAll("button");
console.log(buttons);
for (x of buttons) {
  x.addEventListener("click", (e) => {
    txt = e.target.value;
    if (txt == 0) {
      items.innerText = 0;
      total.innerText = 0;
    } else {
      console.log(txt);
      items.innerText = parseInt(items.innerText) + 1;
      total.innerText = parseInt(total.innerText) + parseInt(txt);
    }
  });
}
function clear() {
  citm = document.getElementById("uitm");
  // citm.innerText='0';
  // document.getElementById("uitm")=parseInt("0");
}

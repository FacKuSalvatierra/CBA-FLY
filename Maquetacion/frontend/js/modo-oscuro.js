let switchButtom = document.getElementById("switch");

let header = document.querySelector("link");
let body = document.body;

switchButtom.addEventListener("click", function () {
  let val = body.classList.toggle("dark");
  header.classList.toggle("dark");


let body = document.body;
switchButtom.addEventListener("click", function () {
  let val = body.classList.toggle("dark");

  switchButtom.classList.toggle("active");
  localStorage.setItem("switch", val);
});


let valor = localStorage.getItem("switch");

if (valor == "true") {
  body.classList.add("dark");
} else {
  body.classList.remove("dark");
}

let valor=localStorage.getItem("switch")
if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}


const button = document.getElementById("button");

const circle = document.getElementById("circle");
const yin = document.getElementById("yin");
const feher = document.getElementById("feher");
const yang = document.getElementById("yang");
const pblack = document.getElementById("pblack");
const pwhite = document.getElementById("pwhite");

button.addEventListener("change", () => {
  if (circle.style.background == "black") {
    circle.style.background = "white";
    yin.style.background = "black";
    feher.style.background = "black";
    yang.style.background = "white";
    pblack.style.background = "white";
    pwhite.style.background = "black";
  } else {
    circle.style.background = "black";
    yin.style.background = "white";
    feher.style.background = "white";
    yang.style.background = "black";
    pblack.style.background = "black";
    pwhite.style.background = "white";
  }
});

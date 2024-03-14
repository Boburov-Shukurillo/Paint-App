const canvas = document.querySelector("canvas");
const input = document.querySelector("#input");
const colorPic = document.querySelector("#colorPic");
const colors = document.querySelectorAll(".colors");
const ereser = document.querySelector(".ereser");
const brush = document.querySelector(".brush");
const Download = document.querySelector(".Download");
const c = canvas.getContext("2d");
let innerWidth = 900;
let innerHeight = 500;
let ispain = false;
let x = 0;
let y = 0;
let brushPoin = input.value;
let curretColor = "#f00";

colors.forEach((e) => {
  e.addEventListener("click", (e) => {
    curretColor = `${e.target.id}`;
    c.strokeStyle = curretColor;
  });
});

ereser.addEventListener("click", () => {
  brush.classList.remove("active");
  ereser.classList.add("active");
  curretColor = "#fff";
  c.strokeStyle = curretColor;
});

brush.addEventListener("click", () => {
  ereser.classList.remove("active");
  brush.classList.add("active");
  curretColor = "#000";
  c.strokeStyle = curretColor;
});

colorPic.addEventListener("change", (e) => {
  curretColor = e.target.value;
  c.strokeStyle = curretColor;
});

canvas.width = innerWidth;
canvas.height = innerHeight;

input.addEventListener("change", (e) => {
  brushPoin = e.target.value;
});

canvas.addEventListener("mousedown", () => {
  c.lineWidth = brushPoin;
  ispain = true;
});

canvas.addEventListener("mouseup", () => {
  ispain = false;
  c.beginPath();
});

canvas.addEventListener("mousemove", (e) => {
  if (ispain) {
    x = e.offsetX;
    y = e.offsetY;
    c.lineTo(x, y);
    c.stroke();
  }
});

Download.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = `${Date.now()}.png`;
  link.href = canvas.toDataURL();
  link.click();
});

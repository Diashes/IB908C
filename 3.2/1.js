// Skapad av: Amanda Stensland

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const starsInput = document.getElementById("stars");
const time = document.getElementById("time");
const submit = document.getElementById("submit");

submit.onclick = draw;
stars.value = Math.round(Math.random() * 1000);

function draw(e) {
  e.preventDefault();
  drawSky();
  drawSun();
  drawStar();
}

function drawSky() {
  const t = new Date(time.value);
  console.log(time.value)
  console.log(t.getMinutes())
  drawDaySky();
  context.globalAlpha = 1;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawEveningSky() {
  // 17.01 - 10.00 evening
}

function drawNightSky() {
  var grd = context.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "white");
  context.fillStyle = grd;
}

function drawDaySky() {
  // 09.01 - 17.00 day
  var grd = context.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd.addColorStop(0, "white");
  grd.addColorStop(1, "lightblue");
  context.fillStyle = grd;
}

function drawMorningSky() {
  // 06.01 - 09.00 morning
  var grd = context.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, "red");
  grd.addColorStop(1, "white");
  context.fillStyle = grd;
}

function drawSun() {
  context.beginPath();
  context.arc(canvas.width / 3, canvas.height / 3, 30, 0, 2 * Math.PI);
  context.fillStyle = "yellow";
  context.fill();
}

function drawStar() {
  var isNumber = /^\d+$/;
  if (isNumber.test(starsInput.value) === false) return;
  let stars = [];
  for (let i = 0; i < starsInput.value; i++) {
    stars.push({
      radius: Math.round(Math.random() * 2),
      x: Math.round(Math.random() * canvas.width),
      y: Math.round(Math.random() * canvas.height)
    });
  }
  for (let star in stars) {
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();
  }
}
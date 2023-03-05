window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

let myObstacles = [];

let frames = 0;
let score = 0;

let speedY = 10;
let speedX = 5;

let posX = 220;
let posY = 450;

let objectInterval;
let gameInterval;

let gameOver = false;

const roadImg = new Image();
roadImg.src = "images/road.png";

const carImg = new Image();
carImg.src = "images/car.png";

class Obstacle {
  constructor(x) {
    this.x = x;
    this.y = -10;
    this.width = 130;
    this.height = 20;
    this.color = "#870007";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  moveVertically() {
    this.y += 5;
  }
}

function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, 220, 450, 60, 120);
  objectInterval = setInterval(() => {
    createObstacle();
    update();
  }, 2000);
  gameInterval = setInterval(update, 1000 / 60);
}

function update() {
  score++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, posX, posY, 60, 120);
  ctx.font = "19px Arial";
  ctx.fillText(`Score: ${score}`, 10, 50);

  myObstacles.forEach((obstacle) => {
    obstacle.draw();
    obstacle.moveVertically();
    if (
      posX < obstacle.x + obstacle.width &&
      posX + carImg.width > obstacle.x &&
      posY < obstacle.y + obstacle.height &&
      posY + carImg.height > obstacle.y
    ) {
      console.log("CRASH!");
      clearInterval(objectInterval);
      clearInterval(gameInterval);
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.font = "48px Arial";
      ctx.fillText("Game Over", 125, 300);
      ctx.fillStyle = "#870007";
      ctx.font = "38px Arial";
      ctx.fillText(`Score: ${score}`, 150, 450);
    }
  });

  myObstacles = myObstacles.filter((obstacle) => obstacle.y < canvas.height);
}
function createObstacle() {
  let x = Math.floor(Math.random() * 350);
  myObstacles.push(new Obstacle(x));
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      posX -= 10;
      break;
    case "ArrowRight":
      posX += 10;
      break;
  }
  if (posX < 0) {
    posX = 0;
  } else if (posX > 598 - carImg.width) {
    posX = 598 - carImg.width;
  }
  update();
});

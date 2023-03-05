window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    setInterval(createObstacle, 60);
  };
};

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const myObstacles = [];

let frames = 0;
let score = 0;

let speedY = 10;
let speedX = 5;

let posX = 220;
let posY = 450;

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
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(carImg, posX, posY, 60, 120);
}

function newPosition(x, y, width, height) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#870007";
  ctx.fillRect(x, y, width, height);
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
  clear();
});

// function createObstacle() {
//   let x = Math.floor(Math.random() * canvas.width);
//   let y = 0;
//   let height = 20;
//   let minWidth = 80;
//   let maxWidth = 300;
//   let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
//   newPosition(x, y, width, height);
// }

// for (i = 0; i < myObstacles.length; i++) {
//   myObstacles[i].y += -1;
//   myObstacles[i].update();
// }
//   frames += 1;
//   if (frames % 120 === 0) {
//     let x = Math.floor(Math.random() * canvas.width);
//     let y = 0;
//     let height = 20;
//     let minWidth = 80;
//     let maxWidth = 300;
//     let width = Math.floor(
//       Math.random() * (maxWidth - minWidth + 1) + minWidth
//     );
//     myObstacles.push(new Obstacle(x, y, width, height));
//     for (i = 0; i < myObstacles.length; i++) {
//       ctx.fillStyle = "#870007";
//       ctx.fillRect(x, y, width, height);
//       y += speedY;
//     }
//   }
//   //}
//   console.log(myObstacles);
// }

// window.onload = () => {
//   document.getElementById("start-button").onclick = () => {
//     startGame();
//     updateObstacles();
//     randomSize();
//   };

//   const myObstacles = [];
//   const canvas = document.querySelector("#canvas");
//   const ctx = canvas.getContext("2d");
//   let posX = 220;
//   let posY = 450;

//   function startGame() {
//     const roadImg = new Image();
//     roadImg.src = "images/road.png";
//     const carImg = new Image();
//     carImg.src = "images/car.png";

//     roadImg.onload = function () {
//       ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
//       ctx.drawImage(carImg, posX, posY, 60, 120);
//     };

//     document.addEventListener("keydown", (e) => {
//       switch (e.key) {
//         case "ArrowLeft":
//           posX -= 10;

//           break;
//         case "ArrowRight":
//           posX += 10;
//           console.log(posX + carImg.width);
//           break;
//       }
//       if (posX < 0) {
//         posX = 0;
//       } else if (posX > 598 - carImg.width) {
//         posX = 598 - carImg.width;
//       }
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
//       ctx.drawImage(carImg, posX, posY, 60, 120);
//     });
//   }

//   function updateObstacles() {
//     randomSize();
//     ctx.fillStyle = "red";
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }

//   function randomSize() {
//     random = {
//       x: Math.floor(Math.random() * (canvas.width + 1)),
//       y: Math.floor(Math.random() * canvas.height + 1),
//       width: Math.floor(Math.random() * (canvas.width - 158)),
//       height: 20,
//     };
//     console.log(random);
//   }
// };
